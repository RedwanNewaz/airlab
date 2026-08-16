import { React, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import HeroContainer from "../components/HeroContainer";
import {
  fundingSummary,
  fundedProjects,
  equipmentGrants,
  collaborations,
} from "../constants/data/fundingData";
import { heroFunding } from "../constants/data/heroImageData";

const STATUS_COLOR = {
  Funded: "success",
  "Under Review": "warning",
};

function AgencyLogo({ logo, sponsor, height = 72 }) {
  if (!logo) return null;
  return (
    <Box
      component="img"
      src={require(`../assets/logos/${logo}`)}
      alt={sponsor}
      sx={{
        height,
        width: "auto",
        maxWidth: "100%",
        objectFit: "contain",
        display: "block",
      }}
    />
  );
}

function GrantCard({ grant, showLogo = true }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: 3,
        borderTop: "6px solid #1976d2",
      }}
    >
      <CardContent sx={{ textAlign: "left", flexGrow: 1 }}>
        <Stack spacing={1.5}>
          {showLogo && (
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <AgencyLogo logo={grant.logo} sponsor={grant.sponsor} />
            </Box>
          )}

          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {grant.status && (
              <Chip
                label={grant.status}
                size="small"
                color={STATUS_COLOR[grant.status] || "default"}
              />
            )}
            {grant.role && (
              <Chip
                label={`Role: ${grant.role}`}
                size="small"
                variant="outlined"
              />
            )}
          </Stack>

          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#2C3E50" }}>
            {grant.title}
          </Typography>

          <Typography variant="body2" sx={{ color: "#1565c0", fontWeight: 600 }}>
            {grant.sponsor}
            {grant.program ? ` - ${grant.program}` : ""}
          </Typography>

          {(grant.amount || grant.period) && (
            <Typography variant="body2" sx={{ color: "#546E7A" }}>
              {[grant.amount, grant.period].filter(Boolean).join("  •  ")}
            </Typography>
          )}

          <Typography variant="body2" sx={{ color: "#34495E" }}>
            {grant.desc}
          </Typography>

          {grant.team && (
            <Typography
              variant="caption"
              sx={{ color: "#78909C", display: "block" }}
            >
              {grant.team.join(", ")}
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}

function Section({ title, subtitle, items, columns = 4 }) {
  return (
    <Stack spacing={3}>
      <Stack spacing={1} sx={{ textAlign: "left", width: "100%" }}>
        <Typography variant="h4" sx={{ color: "#2C3E50", fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: "#607D8B" }}>
          {subtitle}
        </Typography>
        <Divider sx={{ pt: 1 }} />
      </Stack>

      <Grid2 container spacing={3}>
        {items.map((grant) => (
          <Grid2 key={grant.id} size={{ xs: 12, md: columns }}>
            <GrantCard grant={grant} />
          </Grid2>
        ))}
      </Grid2>
    </Stack>
  );
}

export default function Funding() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sponsorLogos = [
    { file: "nsf.svg", name: "National Science Foundation" },
    { file: "epa.svg", name: "U.S. Environmental Protection Agency" },
    { file: "nih.png", name: "National Institutes of Health" },
    { file: "lbrn.png", name: "Louisiana Biomedical Research Network" },
  ];

  return (
    <div className="full-height-width flex-column-no-gap">
      <HeroContainer title={heroFunding.title} subtitle={heroFunding.subtitle} />

      <Box sx={{ px: { xs: "5%", sm: "8%" }, py: { xs: "6%", sm: "4%" } }}>
        <Stack spacing={6}>
          {/* Summary + sponsor wall */}
          <Stack spacing={3}>
            <Typography variant="h4" sx={{ color: "#2C3E50", fontWeight: "bold", textAlign: "left" }}>
              {fundingSummary.headline}
            </Typography>
            <Typography variant="body1" sx={{ color: "#34495E", textAlign: "left" }}>
              {fundingSummary.text}
            </Typography>
            <Stack
              direction="row"
              spacing={{ xs: 3, sm: 6 }}
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              useFlexGap
              sx={{ py: 2 }}
            >
              {sponsorLogos.map((logo) => (
                <Box
                  key={logo.file}
                  component="img"
                  src={require(`../assets/logos/${logo.file}`)}
                  alt={logo.name}
                  title={logo.name}
                  sx={{
                    height: { xs: 72, sm: 104 },
                    width: "auto",
                    objectFit: "contain",
                  }}
                />
              ))}
            </Stack>
          </Stack>

          <Section
            title="Funded Research Projects"
            subtitle="Federal awards led by the AiR Lab as Principal Investigator."
            items={fundedProjects}
          />

          <Section
            title="Equipment Grants"
            subtitle="Infrastructure that keeps the drone, boat, and manipulator fleets running."
            items={equipmentGrants}
            columns={6}
          />

          <Section
            title="Supported Collaborative Proposals"
            subtitle="Projects where the AiR Lab contributes expertise, mentoring, or in-kind support."
            items={collaborations}
            columns={6}
          />
        </Stack>
      </Box>
    </div>
  );
}
