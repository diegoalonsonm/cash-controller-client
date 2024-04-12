'use client'

import Image from "next/image"
import picPlaceholder from '../assets/picPlaceholder.webp'
import { useState } from "react"
import { Button } from "../components/Button"
import axios from "axios"
import Link from "next/link"

const Profile = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')

  const email = localStorage.getItem('email') || ""

  axios.get(`http://localhost:3930/users/${email}`).then((res) => {
    setName(res.data[0].name)
    setLastName(res.data[0].lastName)
  }).catch((err) => {
    console.log(err)
  })

  return (
    <div className='container mt-5'>
      <div className="row">        
        <div className="col d-flex justify-content-center align-items-center">
        <Image src={picPlaceholder} alt="placeholder" className="rounded-circle profilePic" />
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center mt-3"> 
          <h1>
            Your Info
          </h1>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder={name} readOnly />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" className="form-control" id="lastName" placeholder={lastName} readOnly />
          </div>          
        </div>
        <div className="col-12 col-md-6">
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder={email} readOnly />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" readOnly />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col d-flex justify-content-center align-items-center">
          <Link className="btn btn-info text-white w-50" href="/profile/edit">
            Edit info
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Profile