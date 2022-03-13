import React from "react";
import {Navbar, Nav,NavDropdown,Form,FormControl,Button, Row, Col} from 'react-bootstrap'

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
          <Navbar style={navStyle} bg="light" expand="lg">
  {/* <Container fluid> */}
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        <Col md={9}>
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
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