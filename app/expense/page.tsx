'use client'

import { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const Expense = () => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState(0.0)
  const [category, setCategory] = useState(0)

  const router = useRouter()
  const [email, setEmail] = useState(localStorage.getItem('email') || "")

  useEffect(() => {
    setEmail(localStorage.getItem('email') || "")
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
        
    const data = { description, amount, category, email }

    console.log(data)

    axios.post('http://localhost:3930/expenses', data).then((res) => {
      if (res.data) {
        Swal.fire({
          icon: 'success',
          title: 'Expense added',
          text: 'Your expense has been added successfully'
        })
        router.push('/')
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'There was an error adding the expense'
        })
      }
    }).catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was an error adding the expense'
      })
      console.log(err)
    })
  }

  return (
    <div className="container">
      <div className="row text-center mt-5">
        <div className="col">
          <h2>New Expense</h2>
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
                <option value="1">Food</option>
                <option value="2">Transport</option>
                <option value="3">Health</option>
                <option value="4">Education</option>
                <option value="5">Entertainment</option>
                <option value="6">Clothes</option>
                <option value="7">Rent</option>
                <option value="8">Services</option>
                <option value="15">Other</option>
              </select>
            </div>
            <Button type="submit" className='btn-info text-white' text='Add expense' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Expense