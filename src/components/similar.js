import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Silder2 from './slider2';
import Loader from './loader';
const Similar = (params) => {
    const [similar, setSimilar]=useState([])
    const [loading,setLoading]=useState(false);

    const Fetch=async()=>{
        
        const options = {
            method: 'GET',
            url: 'https://tasty.p.rapidapi.com/recipes/list-similarities',
            params: {recipe_id: params.id},
            headers: {
              'X-RapidAPI-Key': '0fb3574a43msh1599ef89a74c382p135cbfjsn5c4e0195b16d',
              'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
            }
          };
          
          try {
            setLoading(true);
              const response = await axios.request(options);
              console.log(response.data);
              setSimilar(response.data.results);
              setLoading(false);
          } catch (error) {
            setLoading(false);
              console.error(error);
          }
    }
    useEffect(()=>{
        Fetch()
;},[params]);
return (
    <>
      {loading ? (
        <><br /><br /><br /><Loader /></>
      ) : (
        similar.length > 0 &&<><h1 className='dishHeading'>Similar Recipies..!</h1><br /><br /> <Silder2 data={similar} /></>
      )}
    </>
  );
}

export default Similar