import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SellerPageImage from "../assets/images/sellerPageImg.jpg";
import SelectCar from "./selectCar";
import { carType, carMake, carCondition } from "../for_popup/selectData";

export default function MainPage() {
  const [visibleMake, setVisibleMake] = useState(false);
  const [visibleType, setVisibleType] = useState(false);
  const [visibleCondition, setVisibleCondition] = useState(false);
  const [make, setMake] = useState(null);
  const [type, setType] = useState(null);
  const [condition, setCondition] = useState(null);

  const handleOpenSelectMake = () => {
    setVisibleMake(true);
  };

  const handleCloseSelectMake = () => {
    setVisibleMake(false);
  };

  const handleOpenSelectType = () => {
    setVisibleType(true);
  };

  const handleCloseSelectType = () => {
    setVisibleType(false);
  };

  const handleOpenSelectCondition = () => {
    setVisibleCondition(true);
  };

  const handleCloseSelectCondition = () => {
    setVisibleCondition(false);
  };

  const handleSelectMake = (m) => {
    setMake(m);
    setVisibleMake(false);
  };

  const handleSelectType = (m) => {
    setType(m);
    setVisibleType(false);
  };

  const handleSelectCondition = (m) => {
    setCondition(m);
    setVisibleCondition(false);
  };

  const SelectMakeButton = () => {
    return (
      <button
        type="button"
        className="btn btn-light"
        onClick={handleOpenSelectMake}
      >
        {make ? make : "Select Make"}
      </button>
    );
  };

  const SelectTypeButton = () => {
    return (
      <button
        type="button"
        className="btn btn-light"
        onClick={handleOpenSelectType}
        
      >
        {type ? type : "Select Type"}
      </button>
    );
  };

  const SelectConditionButton = () => {
    return (
      <button
        type="button"
        className="btn btn-light"
        onClick={handleOpenSelectCondition}
        style={{ width: "100%" }}
      >
        {condition ? condition : "Select Condition"}
      </button>
    );
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <div className="nav-bar" style={{ opacity: 0.5 }}>
        <Navbar bg="light" expand="xl">
          <Navbar.Brand href="/">Motorry</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav>
            <Nav.Link style={{ color: "black" }}>Home</Nav.Link>
            <Nav.Link href="/about" style={{ color: "black" }}>
              About Us
            </Nav.Link>
            <Nav.Link href="/forums" style={{ color: "black" }}>
              Forums
            </Nav.Link>
            <Nav.Link href="/login" style={{ color: "black" }}>
              Sell a vehicle
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>

      <div id="main-page-img-div">
        <img src={SellerPageImage} id="main-page-img" alt="Responsive image" />{" "}
      </div>

      {/* <img src={mainPagePic} id="main-page-img" alt="Responsive image" height="500px" width="100%"/>   */}
      <div id="buyer-form">
        <Container>
          <Card style={{ backgroundColor: "	#C0C0C0" }}>
            {/* <Card.Img src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?cs=srgb&dl=pexels-kelson-downes-1149137.jpg&fm=jpg"></Card.Img> */}
            <Card.Body>
              <Container>
                <Form>
                  <Row className="buyer-btn">
                    <Col className="buyer-select-container">
                      <SelectTypeButton />
                      <SelectMakeButton />
                    </Col>
                    <Col>
                      <Form.Group controlId="model">
                        <Form.Control type="Text" placeholder="Enter Model" />
                      </Form.Group>
                    </Col>
                    <Col>
                      {/* <input type="range" /> */}
                      <Form.Group controlId="location">
                        <Form.Control type="Text" placeholder="Location" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="buyer-btn">
                    <Col>
                      <SelectConditionButton />
                    </Col>
                    <Col>
                      <Form.Group controlId="min-price">
                        <Form.Control
                          type="number"
                          placeholder=" Enter Min Price"
                        />
                      </Form.Group>
                      {/* <button  variant="secondary">Enter Min Price</button> */}
                    </Col>
                    <Col>
                      <Form.Group controlId="max-price">
                        <Form.Control
                          type="number"
                          placeholder=" Enter Max Price"
                        />
                      </Form.Group>
                      {/* <button  variant="danger">Enter Max Price</button> */}
                    </Col>
                  </Row>
                  <Row className="buyer-btn">
                    <Col>
                      <Form.Group controlId="key-word-search">
                        <Form.Control
                          type="text"
                          placeholder="KeyWord Search"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Button variant="secondary">Search</Button>
                    </Col>
                  </Row>
                </Form>
              </Container>
            </Card.Body>
          </Card>
        </Container>
      </div>
      <SelectCar
        visible={visibleMake}
        close={handleCloseSelectMake}
        make={handleSelectMake}
        data={carMake}
        title="Choose Make"
      />
      <SelectCar
        visible={visibleType}
        close={handleCloseSelectType}
        make={handleSelectType}
        data={carType}
        title="Choose Type"
      />
      <SelectCar
        visible={visibleCondition}
        close={handleCloseSelectCondition}
        make={handleSelectCondition}
        data={carCondition}
        title="Choose Condition"
      />
    </div>
  );
}
