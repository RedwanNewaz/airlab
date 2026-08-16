import React, { useState } from "react";
import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

export default function VideoCard({ video }) {
  const [failed, setFailed] = useState(false);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.12)",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0px 10px 24px rgba(0, 0, 0, 0.2)",
        },
      }}
    >
      {/* 16:9 media area */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          pt: "56.25%",
          backgroundColor: "#111",
        }}
      >
        {video.type === "youtube" && (
          <Box
            component="iframe"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title={video.title || "AiR Lab video"}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        )}

        {video.type === "file" && !failed && (
          <Box
            component="video"
            src={video.src}
            controls
            playsInline
            muted
            loop
            preload="none"
            onError={() => setFailed(true)}
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "#111",
            }}
          />
        )}

        {/* Graceful fallback if a project-hosted file cannot be loaded */}
        {video.type === "file" && failed && (
          <Stack
            spacing={1}
            justifyContent="center"
            alignItems="center"
            sx={{
              position: "absolute",
              inset: 0,
              px: 2,
              textAlign: "center",
              color: "#ECEFF1",
            }}
          >
            <Typography variant="body2">
              This clip could not be loaded here.
            </Typography>
            {video.projectUrl && (
              <Chip
                label="Watch on the project site"
                color="primary"
                size="small"
                icon={<LaunchIcon />}
                onClick={() =>
                  window.open(video.projectUrl, "_blank", "noopener,noreferrer")
                }
                sx={{ cursor: "pointer" }}
              />
            )}
          </Stack>
        )}
      </Box>

      {(video.title || video.caption || video.project) && (
        <CardContent sx={{ textAlign: "left", flexGrow: 1 }}>
          <Stack spacing={1}>
            {video.title && (
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, color: "#2C3E50", lineHeight: 1.3 }}
              >
                {video.title}
              </Typography>
            )}
            {video.caption && (
              <Typography variant="body2" sx={{ color: "#546E7A" }}>
                {video.caption}
              </Typography>
            )}
            {video.project && video.projectUrl && (
              <Box>
                <Chip
                  label={video.project}
                  size="small"
                  variant="outlined"
                  icon={<LaunchIcon />}
                  onClick={() =>
                    window.open(
                      video.projectUrl,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  sx={{ cursor: "pointer" }}
                />
              </Box>
            )}
          </Stack>
        </CardContent>
      )}
    </Card>
  );
}
