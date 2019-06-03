import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-date'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  primaryColor = 'red';
  projects: Project[];
  selectedProject: Project;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects() {
    this.projectsService.all()
      .subscribe((result: Project[]) => this.projects = result);
  }

  selectProject(project) {
    this.selectedProject = project;
  }

  handleCancel() {
    this.selectedProject = null;
  }
}
