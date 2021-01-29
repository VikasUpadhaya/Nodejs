import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,Navbar,Form,Button,Col,Row,type} from 'react-bootstrap';
import SellerPageImage from '../assets/images/sellerPageImg.jpg';
import { NavLink } from 'react-router-dom';

function Sell() {
  return (
    <div className="register">
      <div className="nav-bar" style={{opacity:0.5}}>
        <Navbar bg="light" expand='xl'>
        <Navbar.Brand href="/">Motorry</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav>
            <Nav.Link href="/main-page" style={{color:'black'}}>Home</Nav.Link>
            <Nav.Link href="/about"style={{color:'black'}}>About Us</Nav.Link>
            <Nav.Link href="/forums"style={{color:'black'}}>Forums</Nav.Link>
         </Nav>
        </Navbar>
      </div>
    <div id="seller-bg-div">
        <img src={SellerPageImage} id="seller-bg" alt="" />
    </div>

        <Form id="formController">
        <Form.Row>
        <Form.Group as={Col} controlId="formGridMake">
            <Form.Label>Make<label id="star">*</label></Form.Label>
            <Form.Control type="name" placeholder="Make" />
        </Form.Group>
       
        <Form.Group as={Col} controlId="formGridModel">
            <Form.Label>Model<label id="star">*</label></Form.Label>
            <Form.Control type="name" placeholder="Model" />
        </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} controlId="formGridTransmission">
            <Form.Label>Transmission<label id="star">*</label></Form.Label>
            <Form.Control type="name" placeholder="Transmission" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCondition">
            <Form.Label>Engine Capacity(cc)<label id="star">*</label></Form.Label>
            <Form.Control type="name" placeholder="Condition" />
        </Form.Group>
        </Form.Row>

        <Form.Row><Form.Group as={Col} controlId="formGridMilage">
            <Form.Label>Mileage(km)<label id="star">*</label></Form.Label>
            <Form.Control type="number" placeholder="Mileage" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridYear">
            <Form.Label>Year of Manufacture<label id="star">*</label></Form.Label>
            <Form.Control type="number" placeholder="Year of manufacture" />
        </Form.Group>
        </Form.Row>

      <label>Fuel Type<label id="star">*</label></label>
        <fieldset>
        {['radio'].map((type) => (
        <div key={`custom-inline-${type}`} className="mb-3">
        <Form.Group as={Row}>
            <Form.Check
            type="radio"
            label="Petrol"
            name="formHorizontalRadios"
            id={`custom-inline-${type}-1`}
            />
            <Form.Check
            type="radio"
            label="Diesel"
            name="formHorizontalRadios"
            id={`custom-inline-${type}-2`}
            />
            <Form.Check
            type="radio"
            label="Hybrid"
            name="formHorizontalRadios"
            id={`custom-inline-${type}-3`}
            />
            <Form.Check
            type="radio"
            label="Electric"
            name="formHorizontalRadios"
            id={`custom-inline-${type}-4`}
            />
        </Form.Group>
        </div>
      ))}
  </fieldset>
    </Form>
    <NavLink to="/main-page" style={{ textDecoration: 'none' }} className="link"><div id="predictionButton"><Button variant="success" >Predict the price</Button>{' '}</div></NavLink>
  </div>
  
  );
}

export default Sell;