import React, { useEffect, useState } from 'react'
import { AppContext } from './App_Context'
import axios from 'axios'
import { useAsyncError } from 'react-router-dom';


const App_State = (props) => {
  const url = "https://recipe-api-u75n.onrender.com/api";
  const [token, setToken] = useState("")
  const [recipe, setrecipe] = useState([])
  const [savedRecipe, setsavedRecipe] = useState([])
  const [user, setuser] = useState([])
  const [userId, setuserId] = useState("")
  const [userRecipe, setuserRecipe] = useState([])
  const [isAuthenticate, setisAuthenticate] = useState(false)
  const [reload, setreload] = useState(true)

  useEffect(() =>{
    const fetchRecipe = async()=>{

      const api = await axios.get( 
      `${url}/recipe`,
        
      {
        headers:{
          "Content-Type":"application/json"
        },
        // withCredentials:true
      });

      // console.log(api.data.recipe)
      setrecipe(api.data.recipe);
    }
    fetchRecipe();
    getSavedRecipeById();
    profile();
    recipeByUser(userId);
  },[token, userId, reload]);

  useEffect(() =>{
    if(token){
      localStorage.setItem("token",token)
    }
    const tokenFromLocalStorage = localStorage.getItem("token",token)
    if(tokenFromLocalStorage){

      setToken(tokenFromLocalStorage);
      setisAuthenticate(true)
    }
  }, [token, reload])

  // Register
  const register = async(name, gmail, password) =>{
    const api = await axios.post(`${url}/register`, {
      name,gmail,password
    },{
      headers:{
        "Content-Type":"application/json"
      },
      withCredentials:true
    })
    return api;
  }

  // Login
  const login = async (gmail, password) =>{
    const api = await axios.post(`${url}/login`, {
      gmail,password
    },{
      headers:{
        "Content-Type":"application/json"
      },
      withCredentials:true
    })

    setToken(api.data.token)
    setisAuthenticate(true)
    return api;
  }


  // addRecipe
  const addRecipe = async(
    
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
  ) =>{
    const api = await axios.post(`${url}/add`, {
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
    },{
      headers:{
        "Content-Type":"application/json",
        Auth: token
      },
      withCredentials:true
    })
    setreload(!reload)
    return api;
  }

  // recipeById
  const getRecipeById = async(id) =>{
    const api = await axios.get(
      `${url}/${id}`,
      {
        headers: {
            "Content-Type":"application/json",
        },
        withCredentials: true,
      }
    );
    return api
  }

  // save Recipe by Id
  const savedRecipeById = async (id) =>{
    const api = await axios.post(`${url}/${id}`,{}, {
      headers: {
        "Content-Type": "application/json",
        Auth: token
      },
      withCredentials: true,
    });
    console.log(api)
    setreload(!reload)
    return api;
  }

  // get saved recipe
  const getSavedRecipeById = async () =>{
    const api = await axios.get(`${url}/saved`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    console.log("getting saved recipe",api.data.recipe);
    setsavedRecipe(api.data.recipe);
    
  }

  // profile

  const profile = async ()=>{
    const api = await axios.get(`${url}/user`, {
      headers: {
        "Content-Type": "application/json",
        Auth:token
      },
      withCredentials: true,
    });
    // console.log("This is user profile",api)
    setuserId(api.data.user._id)
    console.log("setUserId",api.data.user._id)
    setuser(api.data.user)
  }

  // get recipe by useId
  const recipeByUser = async (id)=>{
    const api = await axios.get(`${url}/user/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    // console.log("user specific recipe",api)
    setuserRecipe(api.data.recipe)
  }

  const logOut = () =>{

    localStorage.removeItem("token",token);
    setToken("")

    setisAuthenticate(false)
  }

  return (
    <AppContext.Provider value={{
        login,
        register,
        addRecipe,
        recipe,
        getRecipeById,
        savedRecipeById,
        savedRecipe,
        userRecipe,
        user,
        isAuthenticate,
        setisAuthenticate,
        logOut

        
    }}>
        {props.children}
      
    </AppContext.Provider>
  )
}

export default App_State
