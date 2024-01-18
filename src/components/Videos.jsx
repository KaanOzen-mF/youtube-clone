import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard } from "./";

function Videos({ videos }) {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos &&
        videos.map((video, idx) => (
          <Box key={idx}>{video.id.videoId && <VideoCard video={video} />}</Box>
        ))}
    </Stack>
  );
}

export default Videos;
