import React from "react";
import { Stack, Box, Divider } from "@mui/material";
import * as styles from "./styles";

function PlayersNow({ playersWhoArePlaying }) {
  return (
    <Box id="playersNow" sx={styles.players}>
      <Box id="playersNow-title" sx={styles.playersTitle}>
        <span style={styles.playersTitleFont}>Players who are playing now</span>
      </Box>
      <Box id="playersNow-body" sx={styles.playersBody}>
        <Stack spacing={1} divider={<Divider />}>
          {playersWhoArePlaying.map((player, index) => (
            <Box key={`${player}-${index}`} sx={styles.itemPlayer}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/52/52053.png"
                style={styles.imgProfile}
                alt="Reddit profile"
              />
              <span style={styles.username(player.colorUsername)}>
                {player.username}
              </span>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default PlayersNow;
