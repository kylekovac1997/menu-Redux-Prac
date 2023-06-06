import React, { ReactNode } from "react";
import styled from "styled-components";

export const StyledHeader = styled.h1`
  font-size: 50px;
  margin-right: 100px;
`;

interface HeaderProps {
  children: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};
