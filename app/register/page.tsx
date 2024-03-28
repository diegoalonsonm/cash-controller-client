import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{height: "calc(100vh - 56px)"}}>
        <div className="card width-50">
          <h5 className="card-header text-center">Register into Cash Controller</h5>
          <div className="card-body">
            <form>
                <div className="mb-3">
                    <label htmlFor="registerName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="registerName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We&apos;ll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
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

export default Register