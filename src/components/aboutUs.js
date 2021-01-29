import {Navbar,Nav} from 'react-bootstrap'
import about from '../assets/images/about.jpg';

export default function AboutUs(){
    return(   
        <div>
            <div className="nav-bar" style={{opacity:0.5}}>
                <Navbar bg="light" expand='xl'>
                <Navbar.Brand href="/">Motorry</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/main-page"style={{color:'black'}}>Home</Nav.Link>
                    <Nav.Link href="/about"style={{color:'black'}}>About Us</Nav.Link>
                    <Nav.Link href="/forums"style={{color:'black'}}>Forums</Nav.Link>
                    <Nav.Link href="/login"style={{color:'black'}}>Sell a vehicle</Nav.Link>
                </Nav>
                </Navbar>
            </div>
            <div id="about">
                <img src={about} id="seller-bg" alt="" />
            </div>
        

            
           </div>                  
    )
}