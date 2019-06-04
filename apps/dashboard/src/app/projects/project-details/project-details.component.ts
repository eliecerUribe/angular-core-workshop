import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@workshop/core-date';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent {
  currentProject: Project;
  originalTitle;
  @Output() save = new EventEmitter();
  @Output() cancel = new EventEmitter();

  @Input() set project(value) {
    if(value) this.originalTitle = value.title;
    this.currentProject = Object.assign({}, value);
  }
}
