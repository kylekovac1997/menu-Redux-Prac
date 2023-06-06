import styled from "styled-components";
import { Header } from "../StyledComponets/Header";
import { StyledNavLink } from "../StyledComponets/NavLink";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const StyledContainer = styled.nav`
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  display: flex;
  align-items: center;
`;

export const NavBar = () => {
  const cartInventory = useSelector((state: any) => state.cartItem.cart);
  return (
    <>
      <StyledContainer>
        <Header>Foo</Header>
        <StyledNavLink to="/Home">Home</StyledNavLink>
        <StyledNavLink to="/Menu">Menu</StyledNavLink>
        <Link to="/Cart">Cart ({cartInventory.length})</Link>
      </StyledContainer>
    </>
  );
};
