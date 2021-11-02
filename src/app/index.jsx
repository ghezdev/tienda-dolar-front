import React, { useState } from "react";
import { Container } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import { getLocalStorage } from "../utils/localStorage";
import Player from "../views/register";
import Game from "../views/game";
import "./css-transition.css";
import * as styles from "./styles";

function App() {
  const [showLogin, setShowLogin] = useState(
    getLocalStorage("player") ? false : true
  );
  const [showGame, setShowGame] = useState(
    getLocalStorage("player") ? true : false
  );

  return (
    <div className="App">
      <Container maxWidth="lg" style={styles.container}>
        <CSSTransition
          in={showGame}
          timeout={400}
          classNames="slide1"
          unmountOnExit
        >
          <Game />
        </CSSTransition>
        <CSSTransition
          in={showLogin}
          timeout={100}
          classNames="slide2"
          unmountOnExit
        >
          <Player
            setShowGame={() => {
              setShowGame(true);
              setShowLogin(false);
            }}
          />
        </CSSTransition>
      </Container>
    </div>
  );
}

export default App;
