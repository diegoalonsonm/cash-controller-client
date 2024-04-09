'use client'

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import IncomeExpenseCard from "./components/IncomeExpenseCard";
import { Button } from "./components/Button";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [incomes, setIncomes] = useState([])
  const [balance, setBalance] = useState(0.0)
  const router = useRouter()
  
  axios.defaults.withCredentials = true;
  
  useEffect(() => {
    const email = localStorage.getItem('email')

    axios.get('http://localhost:3930/').then((res) => {
      if (res.status === 401) {
        setIsAuthenticated(false)
        router.push('/login')
      } else if (res.status === 200) {
        setIsAuthenticated(true)
      }
    }).catch((err) => {
      console.log(err)
      setIsAuthenticated(false)
      router.push('/login')
    })

    axios.get(`http://localhost:3930/users/balance/${email}`).then((res) => {
      setBalance(res.data)
    }).catch((err) => {
      console.log(err)
    })

    axios.get(`http://localhost:3930/expenses/${email}`).then((res) => {
      setExpenses(res.data)
    }).catch((err) => {
      console.log(err)
    })

    axios.get(`http://localhost:3930/incomes/${email}`).then((res) => {
      setIncomes(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [router])

  return (
    <main className="container">
      {
        isAuthenticated ? (
          <div className="mx-auto text-center mt-5">
            <h1>Your balance</h1>
            <p className={`${balance >= 0 ? 'text-success' : 'text-danger'} mt-4 h2`}>$ {balance}</p>
              <div className="row">
                <div className="col-12 col-md-6">
                  <h4 className="mt-5 mb-3">
                    Your expenses
                  </h4>
                  <div>
                    {expenses.map((expense: { id: string, description: string, categoryId: number, amount: number, date: string }) => (
                      <IncomeExpenseCard
                        key={expense.id}
                        description={expense.description}
                        category={expense.categoryId}
                        amount={expense.amount}
                        date={expense.date}
                      />
                    ))}
                  </div>
                  <Button type="button" className="btn-info" text="Add new expense" />
                </div>
                <div className="col-12 col-md-6">
                  <h4 className="mt-5 mb-3">
                    Your incomes
                  </h4>
                  <div>
                    {incomes.map((income: { id: string, description: string, categoryId: number, amount: number, date: string }) => (
                      <IncomeExpenseCard
                        key={income.id}
                        description={income.description}
                        category={income.categoryId}
                        amount={income.amount}
                        date={income.date}
                      />
                    ))}
                  </div>
                  <Button type="button" className="btn-info" text="Add new income" />
                </div>
              </div>
            </div>                    
        ) : (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <p className="h2">Loading...</p>
          </div>
        )
      }
    </main>

  );
}
