import { ReactNode } from "react";
import styled from "styled-components";

const LoadingSpinStyle = styled.p`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: #000;
  border-radius: 50%;
  animation: spin 1s infinite linear;
`;

interface LoadingSpinProps {
  children: ReactNode;
}

export const LoadingSpin: React.FC<LoadingSpinProps> = ({ children }) => {
  return <LoadingSpinStyle>{children}</LoadingSpinStyle>;
};
