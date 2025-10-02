import React from 'react'
import { Totalscore } from './Totalscore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../style/Button'
import Rule from './Rule'

function GamePlay() {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState();
  const [diceNumber, setDiceNumber] = useState(1);
  const [error, setError] = useState("");
  const [showRule, setShowRule] = useState(false);
 
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  }
  const roleDice = () => {
    if(!selected){
      setError("Please select a number before rolling the dice");
      return;
    } 
    setError("");
    const randomNumber = generateRandomNumber();
    setDiceNumber((prev) => randomNumber);

    if(selected===randomNumber){
      setScore((prev)=>prev+randomNumber)
    }
    else{
      setScore((prev)=>prev-2)
    }
    setSelected(undefined)

  }
  const resetScore=()=>{
    setScore(0);
  }

  return (
    <Main_Component>
      <Main>
        <Totalscore score={score} />
        <NumberSelector setError={setError} error={error} selected={selected} setSelected={setSelected} />
      </Main>
      <RollDice diceNumber={diceNumber} roleDice={roleDice} />
      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=>setShowRule((prev)=>!prev)} >{showRule ? "Hide" : "Show"} Rule</Button>
      </div>
     { showRule && <Rule/>}
    </Main_Component>
  )
}

export default GamePlay
const Main = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 70px;
 
`
const Main_Component = styled.div`
.btn{
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
  flex-direction: column;
  align-items: center;
}
`