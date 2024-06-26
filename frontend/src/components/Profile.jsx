import React, { useContext } from 'react'
import { AppContext } from '../context/App_Context'

const Profile = () => {
  const {user, userRecipe} = useContext(AppContext)
  return (
    <>
      <div className="container text-center my-3">
        <h1 className='text-capitalize'>Welcome, {user.name} </h1>
        <h2>{user.gmail}</h2>
      </div>
      <div className="container">
      <div className=" text-center mx-auto" style={{width:'1200px'}}>
        <div className="row d-flex justify-content-center align-items-center">
          {
            userRecipe?.map((data) => <div key={data._id} className='col-md-3 my-3 gap-1'>
               <div className='profile-recipe p-2 rounded bg-dark text-light'>

                <div className=" d-flex justify-content-center p-3 align-items-center" >

                <img src={data.imgurl} className="card-img-top" alt="recipe image" style={{
                  width:'200px',
                  height:'200px',
                  borderRadius: '10px',
                }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                 
                </div>
               </div>
              

            </div>)
          }
        </div>
      </div>
      </div>
    </>
  )
}

export default Profile
