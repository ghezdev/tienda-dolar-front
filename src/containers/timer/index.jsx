import React from "react";
import { Box } from "@mui/material";
import { AwesomeButton } from "react-awesome-button";
import { didPlayPlayer } from "../../utils/player";
import {
  KEY_PLAYER,
  getLocalStorage,
  setLocalStorage,
} from "../../utils/localStorage";
import { selectColor } from "../../utils/colorUsername";
import * as styles from "./styles";
import "react-awesome-button/dist/styles.css";
import "./awesomeButton.css";

function Timer({ timer, reset, setShowStatistics, setPlayersWhoArePlaying }) {
  const clickButton = () => {
    const timerClicked = Number(timer);
    const player = {
      ...getLocalStorage(KEY_PLAYER),
      timing: timerClicked,
      colorUsername: selectColor(timerClicked),
    };
    setLocalStorage(KEY_PLAYER, player);
    reset();
    setPlayersWhoArePlaying();
    setShowStatistics(true);
  };

  return (
    <Box id="post-content-body" sx={styles.contentBody}>
      <h1 style={styles.timer}>{timer}</h1>
      <AwesomeButton
        onPress={clickButton}
        disabled={
          !getLocalStorage(KEY_PLAYER) ||
          didPlayPlayer(getLocalStorage(KEY_PLAYER))
        }
      >
        CLICK!
      </AwesomeButton>
    </Box>
  );
}

export default Timer;
