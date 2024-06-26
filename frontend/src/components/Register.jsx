import React, { useContext, useState } from 'react'
import { AppContext } from '../context/App_Context'
import { Bounce, ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const { register } = useContext(AppContext)
  const [name, setname] = useState("")
  const [gmail, setgmail] = useState("")
  const [password, setpassword] = useState("")

  const registerHandler = async (e) => {
    e.preventDefault();
    const result = await register(name,gmail, password)
    toast.success(result.data.message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

    console.log(result.data)
    if(result.data.message !== "User Already exist") {

      setTimeout(() => {
        navigate('/login')
      }, 1000);
    }

  }

  return (
    <>
      <div className="container my-5 p-5" style={{
        width: '500px',
        border: "2px solid yellow",
        borderRadius: "10px",
      }}>
        <h2 className='text-center'>Register</h2>
        <form className='p-3 my-3' 
        onSubmit={registerHandler}
        style={{
          width:"420px",
          margin: 'auto',
        }}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input type="text" className="form-control" id="exampleInputName"  value={name} onChange={(e)=>setname(e.target.value)} required />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail2"  value={gmail} onChange={(e)=>setgmail(e.target.value)} required  />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e)=>setpassword(e.target.value)} required />
          </div>
          <div className="container d-grid col-6">

          <button type="submit" className="btn btn-primary mt-3">Register</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Register
