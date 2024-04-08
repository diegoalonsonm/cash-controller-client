'use client'

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [balance, setBalance] = useState(10.2);
  const router = useRouter();
  
  axios.defaults.withCredentials = true;
  
  useEffect(() => {
    const email = localStorage.getItem('email')

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

    axios.get(`http://localhost:3930/users/balance/${email}`).then((res) => {
      setBalance(res.data[0].availableBudget)
    }).catch((err) => {
      console.log(err)
    })
  }, [router])

  return (
    <main className="container">
      {
        isAuthenticated ? (
          <div className="mx-auto text-center mt-5" style={{ maxWidth: '600px' }}>
            <h1>This month&apos;s balance</h1>
            <p className={`${balance > 0 ? 'text-success' : 'text-danger'} mt-4 h2`}>$ {balance}</p>
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
