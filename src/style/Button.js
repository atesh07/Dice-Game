import styled from "styled-components"

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  width: 220px;
  height: 44px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid black;
  transition: 0.4s background ease-in;

  &:hover {
    background-color:white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`

export const OutlineButton = styled(Button)`
 
   background-color: white;
    color: black;
  &:hover {
    background-color:black;
    border: 1px solid black;
    color: white;
    transition: 0.3s background ease-in;
  }
`
