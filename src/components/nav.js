import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/home.css';

function Topnavbar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-transparent" >
      <Container>
        <Navbar.Brand  id='navitem' href="/">Flavorful Fare</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Topnavbar;