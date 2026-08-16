import React from "react";
import { Stack, Tooltip, IconButton, Button, SvgIcon } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BadgeIcon from "@mui/icons-material/Badge";
import GitHubIcon from "@mui/icons-material/GitHub";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import LinkIcon from "@mui/icons-material/Link";
import { profileLinks } from "../constants/data/linkData";

// ORCID has no Material icon, so draw the official iD mark.
function OrcidIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 256 256">
      <circle cx="128" cy="128" r="128" fill="#A6CE39" />
      <path
        fill="#FFFFFF"
        d="M86.3 186.2H70.9V79.1h15.4v107.1zM78.6 66.9a9.6 9.6 0 1 1 0-19.2 9.6 9.6 0 0 1 0 19.2zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7 0-21.5-13.7-39.7-43.7-39.7h-23.7v79.4z"
      />
    </SvgIcon>
  );
}

const ICONS = {
  scholar: SchoolIcon,
  orcid: OrcidIcon,
  linkedin: LinkedInIcon,
  faculty: BadgeIcon,
  github: GitHubIcon,
  dashboard: DashboardIcon,
  email: EmailIcon,
};

export function ProfileLinkIcon({ icon, fontSize = "large" }) {
  const Icon = ICONS[icon] || LinkIcon;
  return <Icon fontSize={fontSize} />;
}

/**
 * Row of icon-only links (used in the Footer).
 */
export default function ProfileLinks({ color = "inherit", fontSize = "large" }) {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      useFlexGap
      spacing={1}
    >
      {profileLinks.map((link) => (
        <Tooltip key={link.id} title={link.label}>
          <IconButton
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            color={color}
            aria-label={link.label}
          >
            <ProfileLinkIcon icon={link.icon} fontSize={fontSize} />
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  );
}

/**
 * Labelled buttons (used on the Contact page).
 */
export function ProfileLinkButtons() {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      useFlexGap
      spacing={2}
    >
      {profileLinks.map((link) => (
        <Button
          key={link.id}
          variant="outlined"
          startIcon={<ProfileLinkIcon icon={link.icon} fontSize="small" />}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          sx={{ textTransform: "none" }}
        >
          {link.label}
        </Button>
      ))}
    </Stack>
  );
}
