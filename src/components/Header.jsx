import React from "react";
import {
  Navbar,
  Container,
  FormControl,
  Dropdown,
  DropdownHeader,
  Badge,
  Button,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
import './styles.css'

const Header = () => {
  const {
    state: { cart },
    dispatch
  } = CartState();
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

        <Dropdown align={"end"}>
          <Dropdown.Toggle variant="success">
            <FaShoppingCart color="white" fontSize="20px" />
            <Badge className="bg-success">{cart.length}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: 370 }}>
            {cart.length > 0 ? (
              <>
                {cart.map((product) => (
                  <span className="cartitem" key={product.id}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="cartItemImg"
                    />
                    <div className="cartItemDetail">
                      <span>{product.name}</span>
                      <span>{product.price.split(".")[0]}</span>
                    </div>
                    <AiFillDelete
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product,
                        })
                      }
                    />
                  </span>
                ))}
                <Link to="/cart" > 
                  <Button style={{width: "95%", margin: "0 10px"}}>Go To Cart</Button>
                </Link>
              </>
            ) : (
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
