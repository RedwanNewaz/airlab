// Two kinds of entries:
//   type: "youtube" -> videoId is the YouTube id (query string optional)
//   type: "file"    -> src is a direct video URL (project websites host their own mp4s)
export const videoData = [
  // ---------------- Lab highlights (YouTube) ----------------
  {
    id: 1,
    type: "youtube",
    group: "Lab Highlights",
    videoId: "cMlFKEKsPFQ",
  },
  {
    id: 2,
    type: "youtube",
    group: "Lab Highlights",
    videoId: "GICmRczUEis",
  },
  {
    id: 3,
    type: "youtube",
    group: "Lab Highlights",
    videoId: "veAn3cPlluQ",
  },
  {
    id: 4,
    type: "youtube",
    group: "Lab Highlights",
    title: "Fusion of Camera and LiDAR Data for Pedestrian Detection and Tracking",
    videoId: "bXWyC0TpOSM",
  },
  {
    id: 5,
    type: "youtube",
    group: "Lab Highlights",
    videoId: "cFBSGvqrWKY",
  },
  {
    id: 6,
    type: "youtube",
    group: "Lab Highlights",
    videoId: "CajkI87aEW8",
  },

  // ---------------- LCD-RIG ----------------
  {
    id: 10,
    type: "youtube",
    group: "LCD-RIG",
    project: "LCD-RIG",
    projectUrl: "https://lcd-rig.github.io/",
    title: "Real-world temperature mapping with ASVs",
    caption:
      "LCD-RIG demonstrates robust performance in real-world temperature mapping via ASVs at the FIU MMC Campus Lake, and in simulated multi-ASV lake environments.",
    videoId: "WNDXamTPiTw",
  },

  // ---------------- BOW ----------------
  {
    id: 20,
    type: "file",
    group: "BOW",
    project: "BOW",
    projectUrl: "https://bow-web.github.io/",
    title: "UGV simulation with static obstacles",
    src: "https://bow-web.github.io/videos/sim_gv.mp4",
  },
  {
    id: 21,
    type: "file",
    group: "BOW",
    project: "BOW",
    projectUrl: "https://bow-web.github.io/",
    title: "Real-world UGV navigation",
    src: "https://bow-web.github.io/videos/exp_gv.mp4",
  },
  {
    id: 22,
    type: "file",
    group: "BOW",
    project: "BOW",
    projectUrl: "https://bow-web.github.io/",
    title: "Real-world UGV with LiDAR",
    src: "https://bow-web.github.io/videos/bow-ral-lidar-demo-2025_conv.mp4",
  },
  {
    id: 23,
    type: "file",
    group: "BOW",
    project: "BOW",
    projectUrl: "https://bow-web.github.io/",
    title: "UAV simulation in a 3D environment",
    src: "https://bow-web.github.io/videos/sim_quad.mp4",
  },
  {
    id: 24,
    type: "file",
    group: "BOW",
    project: "BOW",
    projectUrl: "https://bow-web.github.io/",
    title: "Real-world UAV navigation",
    src: "https://bow-web.github.io/videos/exp_quad.mp4",
  },

  // ---------------- BOWConnect ----------------
  {
    id: 30,
    type: "file",
    group: "BOWConnect",
    project: "BOWConnect",
    projectUrl: "https://bow-connect.github.io/",
    title: "UGV exploration",
    src: "https://bow-connect.github.io/static/videos/Bowconnect%20Ugv.mp4",
  },
  {
    id: 31,
    type: "file",
    group: "BOWConnect",
    project: "BOWConnect",
    projectUrl: "https://bow-connect.github.io/",
    title: "UAV exploration",
    src: "https://bow-connect.github.io/static/videos/Bowconnect%20Uav%20Final%20W%20Text.mp4",
  },

  // ---------------- STLcBOT ----------------
  {
    id: 40,
    type: "file",
    group: "STLcBOT",
    project: "STLcBOT",
    projectUrl: "https://stlbot.github.io/",
    title: "Ground robot experiments",
    src: "https://stlbot.github.io/assets/videos/ground_exp.mp4",
  },
  {
    id: 41,
    type: "file",
    group: "STLcBOT",
    project: "STLcBOT",
    projectUrl: "https://stlbot.github.io/",
    title: "Outdoor experiments with two ASVs",
    src: "https://stlbot.github.io/assets/videos/ASV_2.mp4",
  },
  {
    id: 42,
    type: "file",
    group: "STLcBOT",
    project: "STLcBOT",
    projectUrl: "https://stlbot.github.io/",
    title: "Outdoor experiments with three ASVs",
    src: "https://stlbot.github.io/assets/videos/ASV_3.mp4",
  },

  // ---------------- MRCPP ----------------
  {
    id: 50,
    type: "file",
    group: "MRCPP",
    project: "MRCPP",
    projectUrl: "https://mrc-pp.github.io/",
    title: "Two AAVs covering a polygonal region of interest",
    caption:
      "Two DJI Mavic Air AAVs execute MRCPP-generated coverage paths over a polygonal Region of Interest.",
    src: "https://mrc-pp.github.io/assets/videos/coverage_exp.mp4",
  },
  {
    id: 51,
    type: "file",
    group: "MRCPP",
    project: "MRCPP",
    projectUrl: "https://mrc-pp.github.io/",
    title: "Two ASVs covering a coastal aquatic environment",
    caption:
      "Two autonomous surface vehicles, each equipped with YSI EXO2 sondes, execute MRCPP-planned coverage paths.",
    src: "https://mrc-pp.github.io/assets/videos/asv_cover_f.mp4",
  },

  // ---------------- DyConRIG ----------------
  {
    id: 60,
    type: "file",
    group: "DyConRIG",
    project: "DyConRIG",
    projectUrl: "https://dyconrig.github.io/",
    title: "Simulated elevation mapping with three robots",
    caption:
      "Robots map elevation in a 20 x 20 m workspace across eight SRTM-based environments with collision-free navigation.",
    src: "https://dyconrig.github.io/videos/Simulation_rig_web.mp4",
  },
  {
    id: 61,
    type: "file",
    group: "DyConRIG",
    project: "DyConRIG",
    projectUrl: "https://dyconrig.github.io/",
    title: "Three ASVs mapping water temperature",
    caption:
      "Real-world deployment in a 28 x 28 m lake at FIU's MMC Campus, with collision-free navigation.",
    src: "https://dyconrig.github.io/videos/dyconrig_physical_web.mp4",
  },

  // ---------------- Localization via Environmental PDEs ----------------
  {
    id: 70,
    type: "file",
    group: "Localization via Environmental PDEs",
    project: "Localization via PDEs",
    projectUrl: "https://localization-environmental-pdes.github.io/",
    title: "Coastal wave propagation (shallow water equations)",
    caption:
      "Vehicle navigation in a 2D domain driven by shallow-water-equation fields.",
    src: "https://localization-environmental-pdes.github.io/static/videos/swe_ani.mp4",
  },
  {
    id: 71,
    type: "file",
    group: "Localization via Environmental PDEs",
    project: "Localization via PDEs",
    projectUrl: "https://localization-environmental-pdes.github.io/",
    title: "Water quality modeling (advection-diffusion)",
    caption:
      "Navigation through coupled scalar fields including temperature, salinity, and dissolved oxygen.",
    src: "https://localization-environmental-pdes.github.io/static/videos/adv_diff_ani_sim.mp4",
  },
  {
    id: 72,
    type: "file",
    group: "Localization via Environmental PDEs",
    project: "Localization via PDEs",
    projectUrl: "https://localization-environmental-pdes.github.io/",
    title: "Field experiments",
    caption:
      "An autonomous surface vehicle localizes using PDE-predicted multimodal field data, with the estimated trajectory converging to GPS ground truth.",
    src: "https://localization-environmental-pdes.github.io/static/videos/adv_diff_ani.mp4",
  },
];

// Section order for the Videos page.
export const videoGroups = [
  "Lab Highlights",
  "BOW",
  "BOWConnect",
  "STLcBOT",
  "MRCPP",
  "LCD-RIG",
  "DyConRIG",
  "Localization via Environmental PDEs",
];
