'use client'

import { useState } from "react"
import { Button } from '../components/Button'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from "next/navigation"

const Income = () => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0.0)
  const [category, setCategory] = useState(0)
  var email = ''

  if (typeof window !== 'undefined') {
    email = localStorage.getItem('email') ?? ''
  }

  const router = useRouter()

  const data = {description, amount, category, email}

  const cleanInputs = () => {
    setDescription('')
    setAmount(0.0)
    setCategory(0)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    axios.post('http://localhost:3930/incomes', data).then((res) => {
      if (res.data) {
        cleanInputs()
        Swal.fire({
          icon: 'success',
          title: 'Income added',
          text: 'Your income has been added successfully'
        })
        router.push('/')
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'There was an error adding the income'
        })
      }
    }).catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was an error adding the income'
      })
      console.log(err)
    })
  }

  return (
    <div className="container">
      <div className="row text-center mt-5">
        <div className="col">
          <h2>New Income</h2>
        </div>
      </div>
      <div className="row mt-3 mx-auto width-50">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="description">Description</label>
              <input type="text" className="form-control" id="description" aria-describedby="description"
                placeholder="Enter description" onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="amount">Amount</label>
              <input type="number" step="0.01" className="form-control" id="amount" placeholder="Enter amount"
                onChange={(e) => setAmount(Number(e.target.value))} />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="category">Category</label>
              <select className="form-control" id="category" onChange={(e) => setCategory(Number(e.target.value))}>
                <option>Select the according cateogry</option>
                <option value="9">Salary</option>
                <option value="10">Investment</option>
                <option value="11">Gift</option>
                <option value="12">Savings</option>
                <option value="13">Loans</option>
                <option value="14">Insurance</option>
                <option value="15">Other</option>
              </select>
            </div>
            <Button type="submit" className='btn-info text-white' text='Add income' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Income