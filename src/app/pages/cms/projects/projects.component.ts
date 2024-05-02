import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  businessLineId: any;
  projects: any;
  imageUrl = environment.imageUrl;
  modalDescription: any;
  modalTitle: any;
  constructor(
    private common: CommonService,
    public router: Router,
    public entitiesService: EntitiesService
  ) {}

  ngOnInit(): void {}

  BusinessLineSelectionChange(event: any) {
    this.businessLineId = this.common.InputSelectionChange(event);
    this.GetProjectsList(this.businessLineId);
  }

  GetProjectsList(categoryId: any) {
    this.entitiesService.EntitiesByCategoryId(categoryId).subscribe((data) => {
      this.projects = data;
      console.log('projects', this.projects);
    });
  }

  AddProject() {
    this.router.navigateByUrl('/Dashboard/Add-Project');
  }

  EditProject(projectId: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(
        '/Dashboard/Edit-Project?projectId=' +
          projectId +
          '&BusinessLineId=' +
          this.businessLineId
      );
    });
  }
  RemoveProject(projectId: any) {
    this.entitiesService.RemoveEntity(projectId).subscribe((data) => {
      this.GetProjectsList(this.businessLineId);
    });
  }

  DescriptionDialog(title: any, description: any) {
    this.modalTitle = title;
    this.modalDescription = description;
  }
}
