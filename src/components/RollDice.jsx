import React from 'react'
import styled from 'styled-components'

function RollDice({ roleDice, setDiceNumber, diceNumber }) {
  
  return (
    <DiceContainer>
      <div className='image' onClick={roleDice}>
        <img src={`public/images/dice_${diceNumber}.png`} />
      </div>
      <p>Click on Dice to roll</p>

    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -50px;
  flex-direction: column;
  align-items: center;
  img{
    width: 150px;
    height: 150px;
    cursor: pointer;
  }
  p{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;