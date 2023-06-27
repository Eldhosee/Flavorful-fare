import React, { useEffect, useState } from 'react';
import './styles/detail.css';
import Topnavbar from './nav';
import { useLocation, useNavigate } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Loader from './loader';
import Footer from './footer';
import Slider from './slider';
import Silder2 from './slider2';
import Similar from './similar';

const Details = () => {
  const location = useLocation();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const recipeid = location.state;
  const navigate=useNavigate();
  const Fetch = async () => {
    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
      params: { id: recipeid },
      headers: {
        'X-RapidAPI-Key': '0fb3574a43msh1599ef89a74c382p135cbfjsn5c4e0195b16d',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
      },
    };

    try {
      setLoading(true);
      const response = await axios.request(options);
      setDetails(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
      navigate('/recipe');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Fetch();
    };
    fetchData();
   
  }, [location.state]);

  return (
    <>
     
      <div className="detailTop">
        <Topnavbar />
        <div className="heading">
          <h1>Discover the Recipe!</h1>
          <br />
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="detailBody">
          <br /> <br /> <br />
          <Row>
            {details != null ? (
              <>
                <Col lg={6} sm={6} className="dishImages">

                  <Slider img={details.thumbnail_url} videos={details.original_video_url}/>
                  <br/><br/>
                  <div><h1 >Ingredients</h1>
                <br />
                {details != null &&
                details.sections &&
                details.sections.length > 0 ? (
                  <ol>
                    {details.sections[0].components.map(
                      (component, index) => (
                        <li key={index}><p>
                          {component.measurements[0].quantity}{' '}
                          {component.measurements[0].unit.display_singular}{' '}
                          {component.ingredient.display_singular}
                        </p></li>
                      )
                    )}
                  </ol>
                ) : null}</div>
                </Col>
                <Col lg={6} sm={6} className="dishDetails">
                  <div className="dishHeading">
                    <h1>{details.name}</h1>
                  </div>
                  <br />
                  <div>
                    <p>{details.description}</p>
                    
                  </div>
                  <br/><br/>
                  <div>
                  
                    <h1 className="dishHeading">Instructions</h1>
                    <br/><br/>
                    <ol>
                    {details.instructions.map((text,index)=>(
                        <li key={index}><p>{text.display_text}</p></li>
                    )

                    )}
                    </ol>
                  </div>
                  <br/>
                  <div>
                <h1 >Nutritions</h1>
                <br/><br/>
              {details != null && details.nutrition && (
  <div>
    <ol>
    {(() => {console.log(details.nutrition)
      const nutritionEntries = Object.entries(details.nutrition);
      
      const listItems = [];

      for (let i = 0; i < nutritionEntries.length; i++) {
        const [key, value] = nutritionEntries[i];

        if (key !== 'updated_at') {
          listItems.push(
            <li key={key}>
              <p>{key} : {value}</p> 
            </li>
          );
        }
      }

      return listItems;
    })()}
    </ol>
  </div>
)}
</div>
                  
                </Col>
              </>
            ) : (
              <h1>Sorry Not found!</h1>
            )}
          </Row>
         
        </div>
      )}

      <div>
        
        {details!=null&&<><Similar id={recipeid} /></>}
      </div>
   
      <Footer />
    </>
  );
};

export default Details;
