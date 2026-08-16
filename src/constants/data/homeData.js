export const homeLead = {
  eyebrow: "Autonomous Intelligent Robotics Laboratory",
  headline:
    "How can robots act intelligently and safely in the messy real world?",
  body: "Information is incomplete, resources are limited, and mistakes are costly. We build robots that learn from limited data, know what they do not know, and decide what to do next.",
};

export const homeStats = [
  { value: "$1.3M+", label: "Federal funding as PI" },
  { value: "37", label: "Peer-reviewed papers" },
  { value: "3", label: "Federal sponsors" },
  { value: "2", label: "ICRA 2025 award finalists" },
];

export const homeThrusts = [
  {
    title: "Environmental Monitoring",
    body: "Drone and boat teams that survey Louisiana's vanishing wetlands and waterways on their own.",
    researchId: 6,
  },
  {
    title: "Laboratory Automation",
    body: "Self-driving laboratories where robots turn a scientist's goal into verified, safe plans.",
    researchId: 8,
  },
  {
    title: "Assistive Robotics",
    body: "Social robots that play adaptive games delivering ABA therapy to children with autism.",
    researchId: 4,
  },
  {
    title: "Digital Forensics",
    body: "Robots that reconstruct scenes as interactive digital twins investigators can walk through.",
    researchId: 9,
  },
];

export const homeData = [
  {
    content:
      "Our work spans Louisiana's vanishing wetlands, automated scientific laboratories, therapy rooms where robots play games with children with autism, and scenes where robots and digital twins aid investigators. The lab has secured more than $1.3 million in competitive federal funding from the NSF, EPA, and NIH, and publishes in IEEE RA-L, ICRA, IROS, T-ITS, and T-ASE.",
  },
];

export const homeCardData = [
  {
    title: "UAV (Drone) Research",
    subtitle:
      "How can multiple drones work together to monitor changes in wetlands, farmlands, or areas affected by nuclear incidents?",
    image: "flying_robots.png",
    primaryContent:
      "Louisiana loses a football field of wetlands every hundred minutes, and monitoring these fragile landscapes on foot is slow, expensive, and sometimes dangerous. Our drone teams survey them autonomously, deciding where to take the next measurement and sharing what they learn over weak communication links.",
    secondaryContent: [
      {
        header: "How it works",
        content:
          "Each UAV maintains an honest estimate of its own uncertainty, so it spends limited flight time and battery exactly where new data matters most. Decentralized coordination lets the team keep mapping even when the network is unreliable.",
      },
      {
        header: "Applications",
        content:
          "Wetland loss monitoring under our EPA Lake Pontchartrain Basin Restoration Program award, agricultural farmland coverage, radiation and disaster mapping, and defense needs in collaborative autonomy.",
      },
    ],
    links: [
      {
        label: "Github",
        href: "https://github.com/",
      },
      {
        label: "Website",
        href: "https://arxiv.org/abs/2409.02334",
      },
    ],
    relatedResearch: [6, 5, 1],
    relatedPublication: [3, 8, 11, 12, 30, 33, 35, 34],
  },
  {
    title: "UGV (Autonomous Car) Research",
    subtitle:
      "How to design robust perception and decision-making systems that can handle complex and unpredictable real-world scenarios?",
    image: "ugv_fleet.png",
    primaryContent:
      "One of the most critical open research questions revolves around ensuring the safety and reliability of autonomous ground vehicles. While UGVs have the potential to reduce accidents caused by human error, they still face significant challenges.",
    secondaryContent: [
      {
        header: "How it works",
        content:
          "UGVs use robotic technology to operate autonomously, allowing for safe and efficient delivery of goods, services, and information.",
      },
      {
        header: "Applications",
        content:
          "UGVs have the potential to revolutionize various industries, such as agriculture, construction, and transportation, by enabling safe and efficient delivery of goods, services, and information.",
      },
    ],

    relatedResearch: [3, 2],
    relatedPublication: [15, 17, 25, 26, 29, 13],

  },
  {
    title: "Robotic Manupulator (Arm) Research",
    subtitle:
      "How can we optimize the Manipulator robot's design and algorithms to improve its performance in object handling, navigation, and complex tasks?",
    image: "manipulator.png",
    primaryContent:
      "Robotic arms are moving into two very different rooms: the self-driving laboratory, where they run experiments around the clock, and the therapy room, where they play games with children with autism. Both demand manipulation that is flexible enough to adapt and disciplined enough to be safe.",
    secondaryContent: [
      {
        header: "How it works",
        content:
          "We pair flexible robot manipulation with formal, mathematically checkable guarantees on what a robot will and will not do, and let people state goals in plain language that the system converts into verified plans.",
      },
      {
        header: "Applications",
        content:
          "Trustworthy multi-robot laboratory assistants for materials and catalyst discovery, and Applied Behavior Analysis therapy games supported by our NIH/LBRN award for children with Autism Spectrum Disorder.",
      },
    ],
    relatedResearch: [8, 4],
    relatedPublication: [6, 27, 31, 19, 18],
  },
  {
    title: "ASV (Autonomous Boats) Research",
    subtitle:
      "How can a team of ASVs work together to create maps of changing water quality conditions in unexplored areas?",
    image: "asvs.png",
    primaryContent:
      "Water quality changes in space and time, and a boat can only be in one place at once. Our NSF ERI project AQUABOT puts uncertainty-aware learning and decision-making on an intelligent robotic boat so it can choose its own sampling route and build accurate maps from far fewer measurements.",
    secondaryContent: [
      {
        header: "How it works",
        content:
          "Autonomous Surface Vehicles (ASVs), also known as autonomous boats, are unmanned vessels capable of operating independently on the water's surface. ASVs utilize various propulsion methods such as Petrol engines, Electric outboard motors, Water jets, Renewable energy sources (for long-endurance missions).",
      },
      {
        header: "Applications",
        content:
          " ASVs can collect various types of data, including oceanographic measurements, water quality information, and imagery for reef mapping or environmental monitoring",
      },
    ],
    relatedResearch: [1, 6],
    relatedPublication: [9, 11, 16, 5, 22, 24, 28],
  },
];
