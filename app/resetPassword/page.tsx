'use client'

import { useState } from 'react'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const ResetPassword = () => {
    const [email, setEmail] = useState('')

    //const data = { email }

    const router = useRouter()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        Swal.fire({
            title: "Confirm Email",
            text: "Be sure to send in the right email",
            icon: "info",
            showDenyButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Send email",
            denyButtonText: "Cancel"
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Email recieved!',
                    text: 'Your password will be sent to your email. Remember to check all your folders!'
                })
                axios.post('http://localhost:3930/users/recovery', email).then((res) => {
                  location.reload()                  
                }).catch((err) => {
                  console.log(err.response)
                })
                router.push('/login')
            }
        })
    }

    return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{height: "calc(100vh - 56px)"}}>
        <div className="card width-50">
          <h5 className="card-header text-center">Password Reset</h5>
          <div className="card-body">
            <p className='text-body-secondary'>Please enter your email so we can reset your password</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="resetPassEmail" className="form-label">Email address</label>
                    <Input type='email' className='form-control' id='resetPassEmail' aria-describedby='emailHelp'
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <Button text='Submit email' type='submit' className='btn-primary'/>          
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword