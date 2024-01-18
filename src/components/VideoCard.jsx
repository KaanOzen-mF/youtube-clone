import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

function VideoCard({
  video: {
    id: { videoId },
    snippet: { thumbnails },
    snippet: { title },
    snippet: { channelId },
    snippet: { channelTitle },
  },
  snippet,
}) {
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/vidoe/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>

        <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
