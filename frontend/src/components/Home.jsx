import React, { useContext } from 'react';
import { AppContext } from '../context/App_Context';
import { useNavigate } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ searchQuery }) => {
  const navigate = useNavigate();
  const { recipe, savedRecipeById } = useContext(AppContext);

  const saved = async (id) => {
    const result = await savedRecipeById(id);
    toast.success(result.data.message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      transition: Bounce,
    });
  };

  // Filter recipes based on the search query
  const filteredRecipes = recipe.filter(data =>
    data.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <ToastContainer />
      <div className="text-center mx-auto" style={{ width: '1200px' }}>
        <div className="row d-flex justify-content-center align-items-center">
          {filteredRecipes.map((data) => (
            <div key={data._id} className="col-md-3 my-3 gap-1">
              <div className="card bg-dark text-light" style={{ width: '18rem' }}>
                <div className="d-flex justify-content-center p-3 align-items-center">
                  <img
                    src={data.imgurl}
                    className="card-img-top module-border-wrap"
                    alt="recipe image"
                    style={{
                      width: '200px',
                      height: '200px',
                      borderRadius: '10px',
                      // border: '2px solid yellow',
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <div className="my-3">
                    <div 
                    style={{
                      border:'1px rgb(57, 225, 247) solid',
                      color:'black',
                      background: 'rgb(57, 225, 247)',

                    }}
                    className="mx-3 save-btn btn" onClick={() => saved(data._id)}>Save</div>
                    <div className="btn view-btn" 
                    style={{
                      border:'1px yellow solid',
                      color:'black',
                      background: 'yellow',

                    }}
                    onClick={() => navigate(`/${data._id}`)}>View More</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
