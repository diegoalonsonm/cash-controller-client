'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

const EditPage = () => {
    const [nameInput, setNameInput] = useState('')
    const [lastNameInput, setLastNameInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [confirmPasswordInput, setConfirmPasswordInput] = useState('')

    const [nameData, setNameData] = useState('')
    const [lastNameData, setLastNameData] = useState('')
    const [passwordData, setPasswordData] = useState('')

    const email = localStorage.getItem('email')

    const data = {nameData, lastNameData, passwordData, email}
    
    useEffect(() => {
        axios.get(`http://localhost:3930/users/${email}`).then(res => {
            setNameInput(res.data[0].name)
            setLastNameInput(res.data[0].lastName)
            setPasswordInput(res.data[0].password)
        }).catch(err => {
            console.log(err)
        })
    }, [email])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (passwordData !== confirmPasswordInput) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords do not match'
            })
            return
        }

        if (passwordData === '' || confirmPasswordInput === '') {
            setPasswordData(passwordInput)
        }

        if (nameData === '') {
            setNameData(nameInput)
        }

        if (lastNameData === '') {
            setLastNameData(lastNameInput)
        }

        axios.put(`http://localhost:3930/users/${email}`, data).then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Your info has been updated'
            })
        }).catch(err => {
            console.log(err)
        })

    }

    return (
        <div className="container">
            <div className="row text-center mt-3">
                <div className="col">
                    <h2>
                        Edit your info
                    </h2>
                </div>
            </div>
            <div className="row mx-auto width-50 mt-2">
                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder={nameInput} 
                                onChange={e => setNameData(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" placeholder={lastNameInput}
                                onChange={e => setLastNameData(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" 
                                onChange={e => setPasswordData(e.target.value)} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password"
                                onChange={e => setConfirmPasswordInput(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-info text-white">Submit changes</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPage