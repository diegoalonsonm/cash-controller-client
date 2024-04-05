'use client'

import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { Button } from '../components/Button'

const Register = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    axios.post('http://localhost:3930/users', {name, lastName, email, password}).then((res) => {
      Swal.fire('Success', 'User registered successfully', 'success')
      router.push('/')
    }).catch((err) => {
      Swal.fire('Error', 'Register Error. Please try again', 'error')
      console.log(err.message)
    })
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{height: "calc(100vh - 56px)"}}>
        <div className="card width-50">
          <h5 className="card-header text-center">Register into Cash Controller</h5>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="registerName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="registerName" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="registerLastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="registerLastName" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button text='Register' type='submit' className='btn-primary'/>          
            </form>
            <div className='mt-3'>
              <Link href="/login" className='text-body-secondary'>
                  <p>You already have an account? Log In here</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register