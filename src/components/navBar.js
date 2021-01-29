import {Navbar,Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo-bg.png'
import Slide from 'react-reveal/Slide';

export default function NavBar(){
    return(
        
      <Navbar collapseOnSelect expand="lg"  variant="dark">
        <Slide top>
        <Navbar.Brand >
          <NavLink to="/" style={{ textDecoration: 'none' }} className="link"  >
            <img src={Logo} style={{display:'inline-block'}} className="img-fluid" style={{maxWidth:"35%"}} />
          </NavLink>
        </Navbar.Brand>
        </Slide>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">

        </Nav>
          
        </Navbar.Collapse>
      </Navbar>
                    
    )
}