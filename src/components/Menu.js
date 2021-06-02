import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";
import { Container, Form,Button } from "react-bootstrap";
import './Menu.css'
function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );
  return (
    <div className="Menu">
      <Container>
      <br/>
      <h4 style={{color:"white"}}>Time is 20 second from starting</h4>
 
  
     <br/>
      <Button variant="success" size="lg"
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </Button>
      </Container>
      
    </div>
  );
}

export default Menu;
