import React, { useEffect, useState } from "react";
import { Box, Chip, Stack } from "@mui/material";
import { useCountUp } from "use-count-up";
import useComputer from "../../hooks/computer";
import { getPlayersCanPlay, didPlayPlayer } from "../../utils/player";
import { KEY_PLAYER, getLocalStorage } from "../../utils/localStorage";
import { configCountUp } from "../../utils/countUp";
import PlayersNow from "../../containers/playersNow";
import Timer from "../../containers/timer";
import Statistics from "../../containers/statistics";
import Post from "../../components/organisms/post";
import * as styles from "./styles";

function Game() {
  const { timingComputer, computerClick } = useComputer();

  // hook temporizador
  const { value, reset } = useCountUp(configCountUp);

  const [playersWhoArePlaying, setPlayersWhoArePlaying] = useState(
    getPlayersCanPlay()
  );
  const [showStatistics, setShowStatistics] = useState(didPlayPlayer());

  const updatePlayersWhoArePlaying = () =>
    setPlayersWhoArePlaying(getPlayersCanPlay());

  useEffect(() => {
    // temporizador === click de la computadora
    if (Number(value) === timingComputer) {
      computerClick();
      reset();
      updatePlayersWhoArePlaying();
    }
  }, [value]);

  return (
    <Box id="timer-app" sx={styles.app}>
      <Stack spacing={2} sx={styles.stack}>
        <Post
          posted="Posted by u/ghernandez 13 minutes ago"
          chip={<Chip label="Games 🎮" size="small" style={styles.chip} />}
          title="April Fools Day: You will get a color for your username depends on
          the interval you clicked!"
          leftBar
        >
          <Timer
            timer={value}
            reset={reset}
            setShowStatistics={setShowStatistics}
            setPlayersWhoArePlaying={updatePlayersWhoArePlaying}
          />
        </Post>
        {showStatistics && (
          <Post
            posted="Posted by u/ghernandez now"
            chip={
              <Chip label="Statistics 📈" size="small" style={styles.chip} />
            }
            title="Statistics of April Fools Day!"
          >
            <Statistics playersWhoArePlaying={playersWhoArePlaying} />
          </Post>
        )}
      </Stack>
      <PlayersNow
        timingComputer={timingComputer}
        playersWhoArePlaying={playersWhoArePlaying}
      />
    </Box>
  );
}

export default Game;
