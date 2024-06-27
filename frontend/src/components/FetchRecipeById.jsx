import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/App_Context';
import { Link, useLocation } from 'react-router-dom';


const FetchRecipeById = ({ id }) => {
    const location = useLocation()
    const { getRecipeById } = useContext(AppContext);
    const [recipe, setrecipe] = useState('')
    console.log(id)

    useEffect(() => {
        const fetchRecipe = async (id) => {
            const result = await getRecipeById(id);
            // console.log("recipe by id", result);
            setrecipe(result.data.recipe)
        };

        fetchRecipe(id);
    }, [id]);

    return (
        <div className='text-center m-3'>
            <div className="text-center d-flex justify-content-center align-items-center flex-direction-column " style={{ flexDirection: "column" }}>
                <div className=" d-flex justify-content-center align-items-center p-3">

                    <img src={recipe.imgurl} className="card-img-top" alt="recipe image" style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '10px',
                    }} />
                </div>
                <h3>{recipe.title}</h3>
            </div>
            {location.pathname !== '/saved' &&(
                <>
                
            <div className="container"
            style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                gap:'1rem',
                flexDirection:"column"
            }}>
                    <h2 className='text-warning'>Ingredients and Quantity</h2>
                <div className="left">
                    <h4>{recipe.ing1} - {recipe.qty1}</h4>
                    <h4>{recipe.ing2} - {recipe.qty2}</h4>
                    <h4>{recipe.ing3} - {recipe.qty3}</h4>
                    <h4>{recipe.ing4} - {recipe.qty4}</h4>
                </div>
                <h2 className='text-warning'>Instructions</h2>
                <div className="right" style={{width:'full'}}>
                    {recipe.ist}
                    
                </div>
            </div>
            <Link to={"/"} className='btn btn-warning my-5'>Back to Home</Link>
                </>
            )}
        </div>
    )
}

export default FetchRecipeById;
