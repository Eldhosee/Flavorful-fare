import React from 'react'
import './styles/footer.css'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
function Footer() {
  return (
    <div className='footer'>
        <h2 className='footerHeading'>
        Flavorful Fare
        </h2>
        <h5 className='details'>The Flavorful Fare footer is the perfect finishing touch to our recipe website. It is thoughtfully crafted to provide a seamless and enjoyable user experience. In our footer, you'll find quick access to essential links, including about us, contact information, and frequently asked questions. We also showcase our social media handles, allowing you to stay connected and discover even more culinary inspiration. With a clean and elegant design, our footer adds a touch of sophistication while ensuring easy navigation throughout the site. It's the perfect way to complete your flavorful journey wit
        h us.</h5>
        <br/>
        <Row className='row1'>
            <Col><h6>Contact</h6></Col>
            <Col><h6>Instagram</h6></Col>
            <Col><h6>Facebook</h6></Col>
            <Col><h6>LinkedIn</h6></Col>
        </Row>
    </div>
  )
}

export default Footer