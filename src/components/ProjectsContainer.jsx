import { useState } from "react";
import styles from "../styles/componentStyles/projectsContainer.module.css";
import ProjectCards from "./ProjectCards";
import projects from "../assets/data/projects.jsx";

const ProjectsContainer = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Get unique categories from projects
  const categories = [
    "all",
    ...new Set(projects.map((project) => project.category).filter(Boolean)),
  ];

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main>
      <div className={styles.mainHeader}>
        <h3>Featured Projects</h3>
        <p>
          A showcase of my development work, technical writing, and creative
          projects
        </p>
      </div>

      {/* Category Filter */}
      {categories.length > 1 && (
        <div className={styles.categoryFilter}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                activeCategory === category ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category === "all" ? "All Projects" : category}
            </button>
          ))}
        </div>
      )}

      <div className={styles.projectsContainer}>
        {filteredProjects.map((project, index) => (
          <ProjectCards
            key={project.id || index}
            project={project}
            index={index}
          />
        ))}
      </div>
    </main>
  );
};

export default ProjectsContainer;
