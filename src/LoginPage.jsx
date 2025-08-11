import React, { useState } from 'react'
import './index.css'
function LoginPage() {
  const [login, setLogin] = useState(true);
  return (
    <>

      <div className='login'>
        <h1>Login</h1>
        <label>Name</label><input login={login} type="text" placeholder='Enter your Name here' />
        <label>Password</label><input type="password" placeholder='Enter your Password here' />
        <button className='btn'>Login</button>
      </div>

    </>
  )
}

export default LoginPage
