import {Navbar,Nav,Container,Row,Col,Form,Button} from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import facebook from "../assets/logo/facebook.png";
import twitter from "../assets/logo/twitter.png";
import instagram from "../assets/logo/instagram.png";

export default function Forums() {
  return (
    <div
      className= "forum-bg"
      style={{ overflow: "hidden" }}
    >
      <div className="nav-bar" style={{ opacity: 0.6 }}>
        <Navbar bg="light" expand="xl" fixed="top">
          <Navbar.Brand href="/">Motorry</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <Nav>
            <Nav.Link href="/main-page" style={{ color: "black" }}>
              Home
            </Nav.Link>
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
      <Container fluid className="wrapper">
        <div className="forum-form">
          <h4
            style={{
              textAlign: "center",
              fontFamily: "Roboto",
              fontSize: 30,
              marginTop: 10,
              marginBottom: 20,
              color: "black",
            }}
          >
            Forum
          </h4>
          <Form>
            <Row>
              <Col md="6">
                <Form.Group>
                  <Form.Label htmlFor="fname" >
                    FIRST NAME:
                    <span style={{ color: "#e50000", fontSize: "20px" }}>
                      *
                    </span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="form-rounded forum-input"
                    id="fname"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="lname" >
                    LAST NAME:
                    <span style={{ color: "#e50000", fontSize: "20px" }}>
                      *
                    </span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="form-rounded forum-input"
                    id="lname"
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="email" >
                    EMAIL:
                    <span style={{ color: "#e50000", fontSize: "20px" }}>
                      *
                    </span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    className="form-rounded forum-input"
                    id="email"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md="6">
                <Form.Group>
                  <Form.Label htmlFor="comment">
                    COMMENTS:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="form-rounded forum-textarea"
                    id="email"
                    as="textarea"
                    required
                  />
                </Form.Group>
                <h5>
                  RATE US
                  <span style={{ color: "#cc0000", fontSize: "20px" }}>
                      *
                  </span>
                </h5>
                <ReactStars
                  count={5}
                  size={24}
                  activeColor="#ffd700"
                  color="white"
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                />
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
            <Row>
              <Col md="4" />
              <Col md="4">
                <Button
                  variant="secondary"
                  rounded
                  size="lg"
                  className=" btn-block btn-outline form-rounded"
                  type="submit"
                >
                  Submit
                </Button>
              </Col>
              <Col md="4" />
            </Row>
          </Form>
        </div>
        <div className="social-nav">
          <a href="https://facebook.com/motorry">
            <img src={facebook} className="nav-item" alt="facebook-icon" />
          </a>
          <a href="https://instagram.com/motorry">
            <img src={instagram} className="nav-item" alt="instagram-icon" />
          </a>
          <a href="https://twitter.com/motorry">
            <img src={twitter} className="nav-item" alt="twitter-icon" />
          </a>
        </div>
      </Container>
    </div>
  );
}
