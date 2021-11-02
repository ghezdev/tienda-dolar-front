import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { buildPlayer } from "../../utils/player";
import { KEY_PLAYER, setLocalStorage } from "../../utils/localStorage";
import * as styles from "./styles";

const useStyles = makeStyles(() => ({
  centerAdornment: {
    marginLeft: "50%",
  },
  centerText: {
    textAlign: "center",
  },
}));

function Player({ setShowGame }) {
  const classes = useStyles();

  const [error, setError] = useState(false);
  const [playerName, setPlayerName] = useState("");

  const registerPlayer = () => {
    if (playerName !== "") {
      const player = buildPlayer(playerName);
      setLocalStorage(KEY_PLAYER, player);

      setShowGame();
    } else setError(true);
  };

  const handleOnChange = (e) => setPlayerName(e.target.value);

  return (
    <Box sx={styles.registerForm}>
      <img
        src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_full_1.png"
        alt="Reddit logo"
        style={styles.img}
      />
      <h1 style={styles.title}>Sign up!</h1>
      <TextField
        variant="standard"
        placeholder="Nickname"
        value={playerName}
        onChange={handleOnChange}
        inputProps={{
          style: { textAlign: "center" },
        }}
        fullWidth
        autoComplete="off"
        style={styles.textField}
        error={error}
        helperText={
          error && (
            <Typography
              variant="caption"
              className={classes.centerText}
              display="block"
            >
              It can't be empty!
            </Typography>
          )
        }
      />
      <Button
        variant="contained"
        onClick={registerPlayer}
        style={styles.button}
      >
        SIGN UP
      </Button>
    </Box>
  );
}

export default Player;
