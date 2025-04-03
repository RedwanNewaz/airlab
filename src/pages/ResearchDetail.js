import { Grid2, Stack, Box, Typography, Divider } from "@mui/material";
import { React, useEffect } from "react";
import RelatedPublications from "../components/RelatedPublications";

export default function ResearchDetail({ researchDetail }) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when this component mounts
  }, []);
  return (
    <div
      className="full-height-width flex-column-no-gap"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "inherit",
        paddingBottom: "2rem",
        paddingTop: "2rem", // Padding at the top for better spacing
      }}
    >
      <Stack spacing={10} alignItems="center" width="100%">
        {/* Image and Related Publications Grid2 */}
        {researchDetail.relatedPublication && (
          <Grid2
            container
            spacing={2}
            sx={{
              width: "90%",
              height: "100%", // Subtracting 40px for the padding at the top
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)", // Slightly stronger shadow
              backgroundColor: "#ffffff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Image Section */}
            <Grid2
              size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={require(`../assets/images/${researchDetail.image}`)}
                alt={researchDetail.title}
                style={{
                  width: "95%",
                  height: "calc(60vh)",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
            </Grid2>

            <Grid2
              size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              {researchDetail.relatedPublication && (
                <Box
                  sx={{
                    backgroundColor: "#ffffff",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    height: "80%", // Ensure Box fills the height of Grid2
                    border: "1px solid #e0e0e0",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    m: 5,
                    maxHeight: "calc(50vh)", // Maximum height based on the height of the parent
                  }}
                >
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      py: "0.5rem",
                      fontWeight: "bold",
                      color: "#2C3E50",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    Related Publications
                  </Typography>

                  {researchDetail.relatedPublication &&
                    researchDetail.relatedPublication.length > 0 && (
                      <div
                        style={{
                          flexGrow: 1, // Allows this div to grow and take available space
                          overflowY: "auto", // Enable vertical scrolling when content overflows
                          padding: "0 1rem",
                        }}
                      >
                        <RelatedPublications
                          pubIds={researchDetail.relatedPublication}
                        />
                      </div>
                    )}
                </Box>
              )}
            </Grid2>
          </Grid2>
        )}

        {!researchDetail.relatedPublication && (
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              overflow: "hidden",
              borderRadius: "16px",
              marginTop: "2rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src={require(`../assets/images/${researchDetail.image}`)}
              alt={researchDetail.title}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </div>
        )}

        {/* Research Details Section */}
        <Stack width={{ xs: "90%", md: "70%" }} spacing={4}>
          <Stack spacing={2}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "2rem" },
                color: "#2c3e50",
                textAlign: "center",
                marginBottom: "1rem",
              }}
            >
              {researchDetail.title}
            </Typography>
            {researchDetail.longDesc &&
              researchDetail.longDesc.length > 0 &&
              researchDetail.longDesc.map((desc, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{ color: "rgb(60, 60, 60)", lineHeight: 1.8, textAlign: "left" }} // Improved line height for readability
                >
                  {desc}
                </Typography>
              ))}
          </Stack>

          {researchDetail.details && (
            <Stack
              spacing={4}
              sx={{
                padding: 4,
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s", // Smooth transitions
                "&:hover": {
                  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)", // Elevate box-shadow on hover
                },
              }}
            >
              {researchDetail.details &&
                researchDetail.details.length > 0 &&
                researchDetail.details.map((detail, index) => {
                  const { header, content } = detail;
                  const { bulletPoint, paragraph } = content;

                  return (
                    <Box
                      key={index}
                      sx={{
                        padding: 3,
                        backgroundColor: "#f7f9fc",
                        borderRadius: "8px",
                        boxShadow: 1,
                        marginBottom: "16px",
                      }}
                    >
                      {/* Section Header */}
                      <Typography
                        gutterBottom
                        sx={{
                          fontWeight: "bold",
                          fontSize: { xs: "1.5rem", md: "2rem" },
                          color: "#2980b9",
                          marginBottom: "16px",
                        }}
                      >
                        {header}
                      </Typography>

                      <Divider sx={{ marginBottom: "20px" }} />

                      {/* Bullet Points Section */}
                      {bulletPoint &&
                        bulletPoint.length > 0 &&
                        bulletPoint.map((points, bulletIndex) => (
                          <Box
                            key={bulletIndex}
                            sx={{ marginBottom: "20px", textAlign: "left" }}
                          >
                            {/* Optional paragraph before bullet points */}
                            {points.beforePointsParagraph &&
                              points.beforePointsParagraph.length > 0 &&
                              points.beforePointsParagraph.map(
                                (para, paraIndex) => (
                                  <Typography
                                    key={paraIndex}
                                    variant="body1"
                                    sx={{ color: "rgb(60, 60, 60)" }}
                                  >
                                    {para}
                                  </Typography>
                                )
                              )}

                            {/* Bullet points list */}
                            {points.points && points.points.length > 0 && (
                              <Box
                                component="ul"
                                sx={{
                                  paddingLeft: 3,
                                  listStyleType: "disc", // Bullet points styled as discs
                                }}
                              >
                                {points.points.map((point, pointIndex) => (
                                  <Box
                                    component="li"
                                    key={pointIndex}
                                    sx={{
                                      marginBottom: "10px",
                                      listStyleType: "disc",
                                    }}
                                  >
                                    <Typography
                                      variant="subtitle1"
                                      sx={{
                                        fontWeight: "600",
                                        color: "#2c3e50",
                                      }}
                                    >
                                      {point.header}
                                    </Typography>
                                    <Stack columnGap={0.5}>
                                      {point.description &&
                                        point.description.length > 0 &&
                                        point.description.map(
                                          (desc, index) => (
                                            <Typography
                                              key={index}
                                              variant="body2"
                                              sx={{ color: "#586262" }}
                                            >
                                              {desc}
                                            </Typography>
                                          )
                                        )}
                                    </Stack>
                                  </Box>
                                ))}
                              </Box>
                            )}
                          </Box>
                        ))}

                      {/* Paragraph Section */}
                      {paragraph && paragraph.length > 0 && (
                        <Box sx={{ marginTop: "16px", textAlign: "left" }}>
                          {paragraph.map((para, paraIndex) => (
                            <Typography
                              key={paraIndex}
                              variant="body1"
                              sx={{ color: "rgb(60, 60, 60)" }}
                            >
                              {para}
                            </Typography>
                          ))}
                        </Box>
                      )}
                    </Box>
                  );
                })}
            </Stack>
          )}

          {/* Concluding Paragraph */}
          <Stack spacing={2}>
            {researchDetail.concludingParagraph &&
              researchDetail.concludingParagraph.length > 0 &&
              researchDetail.concludingParagraph.map((para, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{ color: "rgb(60, 60, 60)" }}
                >
                  {para}
                </Typography>
              ))}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}
