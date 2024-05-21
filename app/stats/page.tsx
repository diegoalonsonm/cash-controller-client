"use client"

import { useEffect, useState } from 'react'
import { LineChart } from "../components/LineChart"
import { BarChart } from "../components/BarChart"
import { PieChart } from "../components/PieChart"
import axios from 'axios'

const Stats = () => {
  const [incomeData, setIncomeData] = useState([])
  const [expensesData, setExpensesData] = useState([])
  
  useEffect(() => {
    const display = document.getElementById('display') as HTMLSelectElement
    const line = document.getElementById('line')
    const bar = document.getElementById('bar')
    const pie = document.getElementById('pie')
    const text = document.getElementById('text')

    const email = localStorage.getItem('email') || ""

    display.addEventListener('change', () => {
      const value = display.value
      if (value === 'Line') {
        line?.classList.remove('d-none')
        bar?.classList.add('d-none')
        pie?.classList.add('d-none')
        text?.classList.add('d-none')
      } else if (value === 'Bar') {
        line?.classList.add('d-none')
        bar?.classList.remove('d-none')
        pie?.classList.add('d-none')
        text?.classList.add('d-none')
      } else if (value === 'Pie') {
        line?.classList.add('d-none')
        bar?.classList.add('d-none')
        pie?.classList.remove('d-none')
        text?.classList.add('d-none')
      } else if (value === 'Text') {
        line?.classList.add('d-none')
        bar?.classList.add('d-none')
        pie?.classList.add('d-none')
        text?.classList.remove('d-none')
      }
    })

    axios.get(`http://localhost:3930/incomes/monthlyIncome/${email}`).then((res) => {
      setIncomeData(res.data)
    }).catch((err) => {
      console.log(err)
    })

    axios.get(`http://localhost:3930/expenses/monthlyExpense/${email}`).then((res) => {
      setExpensesData(res.data)
    }).catch((err) => {
      console.log(err)
    })

  }, [])

  return (
    <div className='container'>
      <div className="row">
        <div className="col">
          <h2>Stats Page</h2>
          <div className="my-3">
            <label htmlFor="display" className="me-3">Display:</label>
            <select name="Display" className="px-3" id="display">
              <option value="Text">Select a Chart</option>
              <option value="Line">Line</option>
              <option value="Bar">Bar</option>
              <option value="Pie">Pie</option>
            </select>
          </div>
          <div className="d-flex justify-content-center align-items-center mx-auto mt-4">
            <div id="text" className='d-block'>
              <h3>Choose your chart</h3>
            </div>
            <div id="line" className="d-none w-50">
              <h4 className='fw-normal'>Money In vs Money Out</h4>
              <LineChart incomeData={incomeData} expenseData={expensesData} /> 
            </div>
            <div id="bar" className="d-none w-50">
              <h4 className='fw-normal'>Expenditures by category</h4>
              <BarChart incomeOrExpenses={true} />
            </div>
            <div id="pie" className="d-none w-50">
              <h4 className='fw-normal'>Expenditures by category</h4>
              <PieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats