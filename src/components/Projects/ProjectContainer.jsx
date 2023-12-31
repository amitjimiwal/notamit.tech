import Project from "./Project";
import {projects} from '../../amit.json'
import { useThemeContext } from "../../hooks/useThemeContext";
const ProjectContainer = () => {
  const {theme}=useThemeContext();
  return (
    <div className="md:max-w-4xl md:mx-auto p-3 md:p-5" id="project">
      <div className="mb-3">
        <h1 className={"text-heading font-bold "+`${theme==='dark' ? 'text-white':'text-secondary'}`}>Featured Projects</h1>
      </div>
      <div className="ml-3 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
            {projects.map((project,index)=>(
                  <Project projectname={project.name}  description={project.description} preview={project.previewimage} github={project.github_repo} live={project.live_link} techstack={project.techstack} key={index}/>
            ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
