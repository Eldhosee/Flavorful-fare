import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import desert from "./assets/desert.jpg";
import breakfast from "./assets/breakfast.jpg";
import lunch from "./assets/lunch.jpg";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
function Homebody() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/recipe');
  };
  return (
    <Container id='container'>
      <div >
      <Button id="next" onClick={handleButtonClick}  variant="light">Click to explore the Recipe world!</Button>{' '}
      
      </div><h1>Breakfast</h1>
      <br /><br />
      <Row id='row1'>
        <Col lg={6} id='col'>


          <Col >
            <div className='col ' >

              <p >Welcome to our breakfast recipe website, where mornings come alive with a delightful array of dishes to start your day off right! Our site is dedicated to providing you with a diverse selection of breakfast recipes, from quick and easy options to more elaborate creations. Whether you prefer a hearty and filling breakfast or a lighter, energizing meal, we've got you covered.
              </p>
            </div>
          </Col>

        </Col>
        <Col lg={6}  id='col2' >
      <div  >
          <img src={breakfast} rounded />
          </div>
        </Col>
      </Row>
      <br /><br /><br />
      <h1>Lunch</h1>
      <Row>
        <Col lg={6}  >
          <div >
          <img src={lunch} className='image2' rounded />
          </div>
        </Col>
        <Col lg={6}>

          <br /><br />
          <Row>
            <Col >
              <p>
                Welcome to our recipe website, where midday meals become a delightful experience filled with flavor and variety! Whether you're looking for a quick and simple lunch or a more elaborate dish to impress your guests, we have a wide range of recipes to satisfy every palate and dietary preference.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <br /><br /><br />
      <h1>Desert</h1>
      <Row>
        <Col lg={6}>

          <br /><br />

          <Col >
            <div className='col'>
              <p>
                Indulge your sweet tooth with a vast collection of mouthwatering desserts that will satisfy any craving.
                From classic favorites to innovative creations, our recipes are carefully curated to ensure a delightful experience in every bite.
                Whether you're a novice baker or a seasoned pro, our step-by-step instructions, accompanied by vivid images, make it easy to create delectable treats in your own kitchen.

              </p>
            </div>
          </Col>

        </Col>
        <Col lg={6}>
          <div >
          <img src={desert} rounded />
          </div>
        </Col>
      </Row>

    </Container>
  );
}

export default Homebody;
