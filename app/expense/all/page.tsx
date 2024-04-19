'use client'

import { useEffect, useState } from 'react'
import axios from "axios"
import IncomeExpenseCard from "../../components/IncomeExpenseCard"

const AllExpenses = () => {
    const [expenses, setExpenses] = useState([])
    const [amount, setAmount] = useState(0.0)

    axios.defaults.withCredentials = true

    useEffect(() => {
        const email = localStorage.getItem('email')

        axios.get(`https://cash-controller-server.onrender.com/expenses/${email}`).then((res) => {
            setExpenses(res.data)
        }).catch((err) => {
            console.log(err)
        })

        axios.get(`https://cash-controller-server.onrender.com/expenses/totalAmount/${email}`).then((res) => {
            setAmount(res.data[0].totalAmount)
        }).catch((err) => {
            console.log(err)
        })

    }, [])

  return (
    <div className='container'>
        <div className="row mt-2 text-center">
            <div className="col">
                <h2>
                    All Expenses
                </h2>
            </div>
        </div>
        <div className="row mt-2 text-center">
            <p className='h4 fw-normal'>Total spent: <span className='text-info-emphasis'>{amount}</span></p> 
        </div>
        <div className="row width-50 mt-3 mx-auto">
            <div className="col">
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
        </div>
    </div>
  )
}

export default AllExpenses