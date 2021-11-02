import React from "react";
import { Box } from "@mui/material";
import Feedback from "../../../containers/feedback";
import * as styles from "./styles";

function Post({ posted, leftBar, title, chip, children }) {
  return (
    <Box id="post" sx={styles.post}>
      {leftBar && <Feedback />}
      <Box id="post-content" sx={styles.content}>
        <p id="post-posted" style={styles.posted}>
          {posted}
        </p>
        <h1 id="post-content-title" style={styles.contentTitle}>
          {chip}
          {title}
        </h1>
        {children}
      </Box>
    </Box>
  );
}

export default Post;
