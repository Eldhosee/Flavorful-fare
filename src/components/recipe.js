import React, { useEffect, useState } from 'react';
import Topnavbar from './nav';
import './styles/recipe.css';
import { Button, Col, Row } from 'react-bootstrap';
import Loader from './loader';
import axios from 'axios'
import Footer from './footer';
import { useNavigate } from 'react-router-dom';


function Recipe() {
  const [loading,setLoading]=useState(false);
  const [recipe,setRecipe]=useState([]);
  const [search,setSearch]=useState("");
  const [searchresult,setSearchresult]=useState([]);
  const navigate=useNavigate();
  const Fetch=async(setLoading)=> {
    
    
    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/list',
      params: {
        from: '0',
        size: '30',
        tags: 'under_30_minutes'
      },
      headers: {
        'X-RapidAPI-Key': '0fb3574a43msh1599ef89a74c382p135cbfjsn5c4e0195b16d',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
    };
    
    try {
      setLoading(true);
      const response = await axios.request(options);
      console.log(response.data.results)
      setRecipe(response.data.results);
      console.log(recipe);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }
  const handleClick=(id)=>{
  
    navigate('/recipe/details',{state:id});
  }
  const searchResult=async()=>{
    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
      params: {
        prefix: search
      },
      headers: {
        'X-RapidAPI-Key': '0fb3574a43msh1599ef89a74c382p135cbfjsn5c4e0195b16d',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setSearchresult(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await Fetch(setLoading);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className='top'>
        <Topnavbar recipe={true} />

        <div className='heading'>
          <h1>Welcome To Recipe World!</h1>
          <br />

        </div>

      </div>

      <div className='body'>
        <div className='bodyHeading'>
        <h1>Top Recipes</h1>
        </div>
        {loading?<Loader/>:
        
        <Row className='recipeRow'>
        {recipe.length > 0 ? (
          recipe.map(item => item.thumbnail_url && (
            <Col sm={4} lg={2} xs={6} key={item.id}>
             <div onClick={() => handleClick(item.id)}  className='recipieColumn'>
              <img src={item.thumbnail_url} alt={item.title} />
              <div className='recipieName'>
                <p>{item.name}</p>
              </div>

              </div>
            </Col>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </Row>
}
      </div>
      <Footer/>
    </>
  );
}

export default Recipe;
