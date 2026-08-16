// Funding portfolio of the AiR Lab. Logos live in src/assets/logos.
export const fundingSummary = {
  headline: "Over $1.3 million in competitive federal funding as Principal Investigator",
  text: "The AiR Lab's research is supported by the National Science Foundation, the U.S. Environmental Protection Agency, and the National Institutes of Health (through the Louisiana Biomedical Research Network), complemented by equipment grants that outfit an 800 sq. ft. motion-capture laboratory with drone, boat, and manipulator fleets.",
};

export const fundedProjects = [
  {
    id: 1,
    title:
      "Intelligent MultiUAV Surveillance System for Spatiotemporal Monitoring and Prediction of Wetland Loss",
    sponsor: "U.S. Environmental Protection Agency",
    program: "Lake Pontchartrain Basin Restoration Program",
    logo: "epa.svg",
    amount: "$596,017",
    period: "March 2025 - February 2028",
    status: "Funded",
    role: "PI",
    team: [
      "Abdullah Al Redwan Newaz (PI)",
      "Md Tamjidul Hoque (Co-PI)",
      "Mark Kulp (Co-PI)",
    ],
    desc: "Teams of aerial drones survey Louisiana's disappearing wetlands on their own, deciding where to sample next and building fine-grained maps of land loss from far fewer measurements than exhaustive surveys require.",
  },
  {
    id: 2,
    title:
      "Next Generation Multirobot Applied Behavior Analysis Therapy for Children with Autism Spectrum Disorder",
    sponsor: "National Institutes of Health",
    program: "Louisiana Biomedical Research Network (LBRN)",
    logo: "nih.png",
    amount: "$517,909",
    period: "August 2026 - August 2028",
    status: "Funded",
    role: "PI",
    team: [
      "Abdullah Al Redwan Newaz (PI)",
      "Md Tamjidul Hoque (Co-PI)",
      "James Wagner (Co-PI)",
      "Ben Samuel (Co-PI)",
      "Elliott Beaton (Co-PI)",
    ],
    desc: "Social robots engage children aged 3-12 in interactive games -- turn-taking, joint attention, storytelling -- that deliver the core ingredients of Applied Behavior Analysis therapy, adapting in real time to each child's progress.",
  },
  {
    id: 3,
    title:
      "ERI: AQUABOT: Advancing Water Quality Monitoring with an Intelligent Bot via Integrated Learning and Decision-Making",
    sponsor: "National Science Foundation",
    program: "Engineering Research Initiation (ERI)",
    logo: "nsf.svg",
    amount: "$197,022",
    period: "August 2026 - August 2028",
    status: "Funded",
    role: "PI",
    team: ["Abdullah Al Redwan Newaz (PI)"],
    desc: "An intelligent robotic boat that learns where water quality matters most, integrating uncertainty-aware learning with onboard decision-making for autonomous monitoring of lakes and coastal waters.",
  },
];

export const equipmentGrants = [
  {
    id: 1,
    title: "Computation Hardware for Data Science and AI Research",
    sponsor: "National Institutes of Health",
    program: "Louisiana Biomedical Research Network (LBRN), with departmental match",
    logo: "lbrn.png",
    amount: "$30,000 (+ $35,000 departmental)",
    period: "March 2025 - April 2025",
    status: "Funded",
    team: ["Md Tamjidul Hoque", "Abdullah Al Redwan Newaz", "Shreya Banerjee"],
    desc: "GPU and compute infrastructure supporting data science and AI research across the department.",
  },
  {
    id: 2,
    title: "Robotic Manipulators for the Autism-Focused Robotics Initiative",
    sponsor: "National Institutes of Health",
    program: "Louisiana Biomedical Research Network (LBRN) - Grant GRT000975",
    logo: "lbrn.png",
    amount: "$16,055",
    period: "2025",
    status: "Funded",
    team: ["Abdullah Al Redwan Newaz (PI)"],
    desc: "Replaces the lab's robotic arms and supports undergraduate students developing AI-based interaction algorithms for the autism therapy initiative.",
  },
];

export const collaborations = [
  {
    id: 1,
    title:
      "REU Site: NOvel interdisciplinary training in Life and Applied coastal science prepares Next Generation workforce (NOLA-Next Gen)",
    sponsor: "National Science Foundation",
    logo: "nsf.svg",
    role: "Research Mentor",
    desc: "Providing multi-UAV wetland monitoring projects for undergraduate researchers. Wendy Schluchter (PI), T. Erin Cox (Co-PI).",
  },
  {
    id: 2,
    title: "Physical AI and Interactive Digital Twins in Complex Environments",
    sponsor: "Vinnova (Sweden)",
    logo: "vinnova.svg",
    role: "LSU New Orleans Senior Personnel",
    desc: "Contributing robotics, autonomous systems, and multi-modal sensing expertise (~$100,000 LSU New Orleans in-kind), with AI Sweden, Chalmers, Linkoping, Dakota State, and LSU.",
  },
];
