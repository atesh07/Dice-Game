import React, { useState } from 'react'
import styled from 'styled-components';
function NumberSelector({ setError,error, selected, setSelected }) {
  const arrNum = [1, 2, 3, 4, 5, 6];
  const numberSelected = (value) => {
    setSelected(value);
    setError("");
  }

  return (
    <Maincontaine>
      <p className='error'>{error}</p>
      <div className='flex'>
        {
          arrNum.map((value, i) => (
            <Box key={i} $isSelected={value === selected} onClick={() => numberSelected(value)}>{value}</Box>
          ))
        }
      </div>
      <div className='text'>
        <p>Select Number</p>
      </div>
    </Maincontaine>
  )
}
export default NumberSelector;
const Maincontaine = styled.div`
 display: flex;
 flex-direction: column;
 align-items: end;
 .flex{
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
 }
 .text{
    font-weight: 700;
 }
  .error{
    color: red;
    font-weight: 600;
    margin-bottom: 10px;
  }
 
`

const Box = styled.div`
width: 72px;
height: 72px;
border: 1px  solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props) => props.$isSelected ? "black" : "white"};
color: ${(props) => props.$isSelected ? "white" : "black"};  
&:hover{
    
    background-color: ${(props) => props.$isSelected ? "black" : "#f4f0f0"};
}

`