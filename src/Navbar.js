import React from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import {
  Nav,
  NavLink,
  NavIcon,
  Bars,
  Header1,
  Header2,
} from "./NavbarElements";
import { Link } from "react-router-dom";
import { ShoppingBasket } from "@material-ui/icons";

function Navbar({ toggle }) {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signout();
    }
  };
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavLink to={!user && "/login"}>
          <Header1>Hello {!user ? "Guest" : user.email}</Header1>
          <Header2>{user ? "Sign Out" : "Sign In"}</Header2>
        </NavLink>
        <NavLink to="/checkout">
          <ShoppingBasket />
          <span>{basket?.length}</span>
        </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
}

export default Navbar;
