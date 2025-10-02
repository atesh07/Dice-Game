import styled from "styled-components"
import { Button } from "../style/Button"
const StartGame = ({toggle}) => {
  return (
    <Wrapper>
      <Container>
        <Image>
          <img src="/images/dice.png" alt="Dice" />
        </Image>
        <Name>
          <h1>DICE GAME</h1>
          <Button onClick={toggle}
          >Play Now</Button>
        </Name>
      </Container>
    </Wrapper>
  )
}

export default StartGame

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`

const Container = styled.div`
  width: 1182px;
  height: 522px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.div`
  width: 649px;
  height: 522px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Name = styled.div`
  width: 649px;
  height: 522px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 20px;

  h1 {
    font-size: 105px;
    font-weight: bold;
  }
`

