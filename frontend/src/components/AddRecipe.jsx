import React, { useContext, useState } from 'react'
import { AppContext } from '../context/App_Context'
import { Bounce, ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'


const AddRecipe = () => {
  const navigate = useNavigate()
  const { addRecipe } = useContext(AppContext)
  const [formData, setformData] = useState({
      title : "", 
      ist : "",
      ing1 : "",
      ing2 : "", 
      ing3 : "", 
      ing4 : "", 
      qty1 : "", 
      qty2 : "", 
      qty3 : "", 
      qty4 : "", 
      imgurl : "",
  });

  const onChangeHandler = (e)=>{
    const {name, value} = e.target
    setformData({...formData,[name]:value})
  }

  const onSubmitHandler = async(e) =>{
    e.preventDefault()

    const{
      title, 
      ist,
      ing1,
      ing2, 
      ing3, 
      ing4, 
      qty1, 
      qty2, 
      qty3, 
      qty4, 
      imgurl,
    } = formData;

    const result = await addRecipe(
      title, 
      ist,
      ing1,
      ing2, 
      ing3, 
      ing4, 
      qty1, 
      qty2, 
      qty3, 
      qty4, 
      imgurl,
    );

    // console.log("addRecipe", result)
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

    // console.log(result.data)
    if(result.data.message !== "User Already exist") {

      setTimeout(() => {
        navigate('/')
      }, 1000);
    }
  }



  return (
    <>
    <ToastContainer/>
      <div className="container my-5 p-5" style={{
        width: '500px',
        border: "2px solid yellow",
        borderRadius: "10px",
      }}>
        <h2 className='text-center'>Add Recipe</h2>
        <form className='p-3 my-3' 
          onSubmit={onSubmitHandler}
        style={{
          width:"400px",
          margin: 'auto',
        }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input name='title'
            value={formData.title}
            onChange={onChangeHandler}
            required
            type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Instruction</label>
            <input value={formData.ist} name='ist'
            onChange={onChangeHandler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Ingredient1</label>
            <input value={formData.ing1} name='ing1'
            onChange={onChangeHandler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Ingredient2</label>
            <input value={formData.ing2} name='ing2'
            onChange={onChangeHandler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Ingredient3</label>
            <input value={formData.ing3} name='ing3'
            onChange={onChangeHandler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Ingredient4</label>
            <input value={formData.ing4} name='ing4'
            onChange={onChangeHandler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Quantity1</label>
            <input value={formData.qty1} name='qty1'
            onChange={onChangeHandler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Quantity2</label>
            <input value={formData.qty2} name='qty2'
            onChange={onChangeHandler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Quantity3</label>
            <input value={formData.qty3} name='qty3'
            onChange={onChangeHandler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Quantity4</label>
            <input value={formData.qty4} name='qty4'
            onChange={onChangeHandler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">ImgURL</label>
            <input value={formData.imgurl} required name='imgurl'
            onChange={onChangeHandler} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            
          </div>
          
         
          <div className="container d-grid col-6">

          <button type="submit" className="btn btn-primary mt-3">Add Recipe</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default AddRecipe
