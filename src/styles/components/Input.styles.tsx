import { styled } from "styled-components";

export const Input = styled.input`
  width: auto;
  padding: 10px;
  border: 1px solid #d1d5db;
  font-size: 1rem;

  &:focus {
    border-color: #3b82f6;
    outline: none;
  }
`;