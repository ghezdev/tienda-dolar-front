import React, { useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { KEY_LIKES, getLocalStorage, setLocalStorage } from "../../utils/localStorage";
import {
  START_LIKES,
  didItLike,
  didItDislike,
} from "../../utils/like";
import * as styles from "./styles";

function Feedback() {
  const [countLikes, setCountLikes] = useState(
    START_LIKES + getLocalStorage(KEY_LIKES)
  );
  const [like, setLike] = useState(didItLike());
  const [dislike, setDislike] = useState(didItDislike());

  const handleLike = () => {
    setLike(!like);
    let count = START_LIKES;

    if (like) {
      count = countLikes - 1;
    } else if (dislike) {
      setDislike(false);
      count = START_LIKES + 1;
    } else {
      count = countLikes + 1;
    }

    setCountLikes(count);
  };

  const handleDislike = () => {
    setDislike(!dislike);
    let count = START_LIKES;

    if (dislike) {
      count = countLikes + 1;
    } else if (like) {
      setLike(false);
      count = START_LIKES - 1;
    } else {
      count = countLikes - 1;
    }

    setCountLikes(count);
  };

  useEffect(() => {
    if (like) setLocalStorage(KEY_LIKES, 1);
    else if (dislike) setLocalStorage(KEY_LIKES, -1);
    else setLocalStorage(KEY_LIKES, 0);
  }, [like, dislike]);

  return (
    <Box id="post-feedback" sx={styles.feedback}>
      <IconButton onClick={handleLike} style={styles.colorLike(like)}>
        <ThumbUpIcon />
      </IconButton>
      <p style={styles.countLikes}>{countLikes}</p>
      <IconButton onClick={handleDislike} style={styles.colorDislike(dislike)}>
        <ThumbDownIcon />
      </IconButton>
    </Box>
  );
}

export default Feedback;
