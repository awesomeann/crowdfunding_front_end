import { allProjects } from "../data";
import ProjectCard from '../components/ProjectCard';
import "./HomePage.css";

function HomePage() {
    
    return (
    <div>
        <h1>This is the home page.</h1>
        <div id="project-list">
            {allProjects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    </div>
   );
}
    export default HomePage;