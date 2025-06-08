// src/data/projectsData.jsx
import project1Main from "../projects/project1/main.png";

const projects = [
  {
    id: "1",
    title: "Project 1",
    github: "https://github.com/n-ad/Shopping-Cart",
    liveURL: "https://n-ad.github.io/Shopping-Cart/",
    description: "Project posts coming soon.",
    summary: "Game lookup dummy site I created while learning to use React.",
    image: project1Main,
    moreImages: [], // Remove the undefined variables for now
    moreDetails: [
      "Search terms to generate game cards",
      "Individual game page with more details",
      "Input any game title to search for it",
      "Add games to your cart and view them",
    ],
    slug: "games-up",
  },
  // Add more projects here
];

export default projects; // Changed from "Projects" to "projects"
