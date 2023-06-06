import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  color: grey;
  padding: 10px;
  font-size: 20px;
  &:hover {
    color: orange;
  }
`;
