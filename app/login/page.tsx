import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{height: "calc(100vh - 56px)"}}>
        <div className="card width-50">
          <h5 className="card-header text-center">Login into Cash Controller</h5>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="loginEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="loginEmail" aria-describedby="loginEmail" />
                <div id="loginEmail" className="form-text">We&apos;ll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="loginPass" className="form-label">Password</label>
                <input type="password" className="form-control" id="loginPass" />
              </div>
              <button type="submit" className="btn btn-primary">Log In</button>              
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