import React from 'react'
import { Button } from './Button'
import axios from 'axios'
import Swal from 'sweetalert2'
import Link from 'next/link'
import { IconLogout, IconUserCircle, IconChartBar, IconHome } from '@tabler/icons-react'

export const Navbar = () => {
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      text: "Your session will expire after this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I want to log out"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Logged out successfully',
          text: 'Thanks for using Cash Controller!'
        })
        localStorage.removeItem('email')
        setTimeout(() => {        
          if (result.isConfirmed) {
            axios.get('http://localhost:3930/logout').then((res) => {
              location.reload()            
            }).catch((err) => {
              console.log(err)
            })
          }
        }, 1000)
      }      
    })
  }

  return (
  <nav className="navbar bg-body-tertiary mx-md-5">
    <div className="container-fluid">
      <Link href="/" className='navbar-brand'>
        Cash Controller
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Cash Controller</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <Link href="/" className='nav-item text-secondary text-decoration-none'>
              <p>Home <IconHome size={20} className='mb-1' /> </p>
            </Link>
            <Link href="/stats" className='nav-item text-secondary text-decoration-none'>
              <p>Stats <IconChartBar size={20} className='mb-1' /> </p>
            </Link>
            <Link href="/profile" className='nav-item text-secondary text-decoration-none'>
              <p>My Profile <IconUserCircle size={20} className='mb-1' /> </p>
            </Link>
          </ul>
          <div>
            <Button text="Logout" className="btn-danger" type="button" onClick={handleDelete} icon={<IconLogout size={20} className='mb-1'/>} />
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}
