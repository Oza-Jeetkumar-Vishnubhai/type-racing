import React,{useState} from 'react'
import Login from '../Components/Login'
import Register from '../Components/Register'

const AuthForm = () => {
    const [selected,setSelected] = useState("login")
    return (
      <div className='Container'>
        <div className="login-box">
          <div className="header-bar d-flex">
            <div className="login">Login</div>
            <div className="register">Register</div>
          </div>
          {
            selected==="login"?<Login />:<Register />
          }
        </div>
        <div className="img">
          <img src="" alt="mast photu" />
        </div>
      </div>
    )
}

export default AuthForm
