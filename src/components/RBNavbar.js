import React from "react";
import {Navbar, Nav,NavDropdown,Form,FormControl,Button, Row, Col} from 'react-bootstrap'
import { NavLink } from "react-router-dom";

function RBNavbar({onSearch}){
    function getSearchTerm(event){
        event.preventDefault()
        console.log(event.target.value)
        onSearch(event.target.value)
    }
    const navStyle={
        width:"100%"
    }
    return (
        <Row>
          <Navbar style={navStyle} bg="" expand="lg">
  {/* <Container fluid> */}
    <Navbar.Brand href="/">JokaJoke</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Col md={9}>
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link exact="true" href="/savedJokes">Saved Jokes</Nav.Link>
        <Nav.Link exact="true" href="/punmasters">Pun Masters</Nav.Link>
      </Nav>
        </Col>
        <Col>
            <Form onChange={getSearchTerm} className="d-flex ">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          name="searchWord"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
        </Col>
      
      
    </Navbar.Collapse>
  {/* </Container> */}
</Navbar>   
        </Row>
       
    )
}

export default RBNavbar