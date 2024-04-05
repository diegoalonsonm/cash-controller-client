'use client'

import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:3930/').then((res) => {
      if (res.status === 401) {
        setIsAuthenticated(false)
        router.push('/login')
      } else if (res.status === 200) {
        setIsAuthenticated(true)
      }
    }).catch((err) => {
      console.log(err)
      setIsAuthenticated(false)
      router.push('/login')
    })
  }, [router])

  const handleDelete = () => {
    axios.get('http://localhost:3930/logout').then((res) => {
      location.reload()
      Swal.fire({
        icon: 'success',
        title: 'Logged out successfully',
        text: 'Thanks for using Cash Controller!'
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <main className="container">
      {
        isAuthenticated ? (
          <div>
            <h3>Welcome to Cash Controller!</h3>
            <Button text="Logout" className="btn-danger" type="button" onClick={handleDelete} />
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <p className="h2">Loading...</p>
          </div>
        )
      }
    </main>

  );
}
