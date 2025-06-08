import styles from "../styles/pageStyles/projectsPage.module.css";
import projects from "../assets/data/projects.jsx";
import ProjectCards from "../components/ProjectCards.jsx";

const ProjectsPage = () => {
  return (
    <div className={styles.projectsPageContainer}>
      {projects.map((project) => (
        <ProjectCards key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
