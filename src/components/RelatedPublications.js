import { Button, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { publicationData } from "../constants/data/publicationData";

export default function RelatedPublications({ pubIds }) {
    const relatedPublication =
    pubIds && pubIds.length > 0
      ? pubIds.map((id) =>
          publicationData.find((item) => item.id === id)
        )
      : [];

  return (
    <Stack>
      {relatedPublication.map((pubItem, index) => (
        <Link
          key={pubItem.id}
          to={`/publication#publication-item-${pubItem.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              textAlign: "left",
              padding: "10px",
              borderRadius: "8px",
              backgroundColor: "#ECF0F1",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              "&:hover": {
                backgroundColor: "#3498DB",
                color: "#FFFFFF",
                transform: "scale(1.02)",
              },
            }}
          >
            {pubItem.title}
          </Button>
        </Link>
      ))}
    </Stack>
  );
}
