import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import { NavLink } from "react-router-dom"

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/api/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
      <NavLink activeStyle={{
                fontWeight: "bolder",
                color: "white"
            }}
                exact
                style={style}
                to="/"
            >Schedule</NavLink>
      <NavLink activeStyle={{
                fontWeight: "bolder",
                color: "white"
            }}
                exact
                style={style}
                to="/new"
            >Sign Up to Read</NavLink>
      <NavLink activeStyle={{
                fontWeight: "bolder",
                color: "white"
            }}
                exact
                style={style}
                to="/profile"
            >Profile</NavLink>
      <Nav>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const style = {
  width: "60%",
  margin: "5% 0 1%",
  padding: "1em",
  textDecoration: "none",
  color: "purple",
  backgroundColor: "orange",
  fontWeight: "bold",
  verticleAlign: "center"
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Arial";
  font-size: 2rem;
  color: Orange;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
