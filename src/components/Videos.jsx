import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";

function Videos({ videos }) {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.items &&
        videos.items.map((video, idx) => (
          <Box key={idx}>
            {video.id.videoId && <VideoCard video={video} />}
            {video.snippet.channelId && <ChannelCard channelDetail={video} />}
          </Box>
        ))}
    </Stack>
  );
}

export default Videos;
