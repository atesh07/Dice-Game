import React from 'react'
import styled from 'styled-components'
const Rule = () => {
  return (
    <RuleContainer>
        <h2>Game Rules</h2>
        <ul>
            <li>Select a number between 1 to 6 using the number selector.</li>
            <li>Click on the dice image to roll the dice.</li>
            <li>If the rolled number matches your selected number, you earn points equal to that number.</li>
            <li>If the rolled number does not match, you lose 2 points.</li>
            <li>You can reset your score at any time by clicking the "Reset" button.</li>
            <li>Make sure to select a number before rolling the dice to avoid errors.</li>
        </ul>
    </RuleContainer>
  )
}

export default Rule

const RuleContainer = styled.div`
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;

    h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    ul {
        list-style-type: disc;
        padding-left: 20px;
    }

    li {
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 1.5;
    }
`
