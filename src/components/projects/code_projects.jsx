import ProjectIndex from "./project_index";
import { codeData } from "../../data/coding_projects";

const CodeProjects = () => {
  return <ProjectIndex projectData={codeData} section="#code" />;
};

export default CodeProjects;
