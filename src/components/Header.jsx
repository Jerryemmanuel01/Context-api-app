import React from "react";
import { Navbar, Container, FormControl, Dropdown, DropdownHeader, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" varient="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand className="text-white">
          <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 300 }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>

        <Dropdown>
            <Dropdown.Toggle variant="success">
                <FaShoppingCart color="white" fontSize="20px" />
                <Badge className="bg-success">{10}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370}}>
                <span style={{padding: 10}}>Cart is Empty!</span>
            </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
