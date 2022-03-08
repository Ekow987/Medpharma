import React, { useContext } from 'react';
 
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import ToggleTheme from './ToggleTheme';
import { Theme } from './ThemeProvider';
import Img from '../img/logo.jpg';
import Logout from './Logout'

   const Navigation=()=> {
    const currentTheme = useContext(Theme)[0];
    return (
        <div >
         <Navbar collapseOnSelect expand="lg" bg={currentTheme} variant={currentTheme} className="mowa">
  <Navbar.Brand href="#home" id='med'> <img src={Img} className="img" alt=""></img>MEDPHARMA</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link> <Link to="/consult" id='med'>Consult</Link></Nav.Link>
      <Nav.Link> <Link to="/update" id='med'>Update Record</Link></Nav.Link>
      <Nav.Link> <Link to="/view" id='med'>View Record</Link></Nav.Link>
       
      {/* <Nav.Link> <Link to="/Pest" id='med'>Pest</Link></Nav.Link>  */}
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
      <Logout/>
    </Nav>
  </Navbar.Collapse>
  <ul>
  <li className="nav-item">
              <ToggleTheme />
            </li>
  </ul>
</Navbar>  
        </div>
    );
}

export default Navigation;
