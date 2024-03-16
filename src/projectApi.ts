import Project from './project.ts' 

class ProjectApi{
  
  private static projectsKey = 'projects';

  public static getAllProjects(): Project[] {
    const projectsData = localStorage.getItem(this.projectsKey);
    if (projectsData){
      return JSON.parse(projectsData);
    }
    return [];
  }

  public static createProject(project: Project): void {
    const projects = this.getAllProjects();
    projects.push(project);
    localStorage.setItem(this.projectsKey, JSON.stringify(projects));
  }

  public static updateProject(projectId: string, name: string, description: string): void {
    const projects = this.getAllProjects();
    localStorage.setItem(this.projectsKey, JSON.stringify(projects.map(project => project.uuid === projectId ? ({...project, name, description}) : project)));
  }

  public static deleteProject(projectId: string): void{
    const projects = this.getAllProjects();
    localStorage.setItem(this.projectsKey, JSON.stringify(projects.filter(project => project.uuid !== projectId)));
  }
}

export default ProjectApi;