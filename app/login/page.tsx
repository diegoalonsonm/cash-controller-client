'use client'

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    axios.post('http://localhost:3930/login', {email, password}).then((res) => {
      if (res.data.Status === 'Success') {
        Swal.fire('Success', 'Welcome to Cash Controller', 'success')
        router.push('/')
      } else {
        Swal.fire('Error', 'You entered invalid credentials, try again', 'error')
      }
    }). catch((err) => {
      console.log(err.message)
    })
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{height: "calc(100vh - 56px)"}}>
        <div className="card width-50">
          <h5 className="card-header text-center">Login into Cash Controller</h5>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">Email address</label>
                <Input type="email" className='form-control' id='loginEmail' ariaDescribedby='loginEmail'
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="loginPass" className="form-label">Password</label>
                <Input type="password" id="loginPass" className="form-control" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button text='Log In' type='submit' className='btn-primary'/>
            </form>
            <div className='mt-3'>
              <Link href="/register">
                  <p>Don&apos;t you have an account yet? Sign Up here</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login