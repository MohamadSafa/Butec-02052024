import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-expertises',
  templateUrl: './expertises.component.html',
  styleUrls: ['./expertises.component.css'],
})
export class ExpertisesComponent {
  Id: any;
  expertise: any;
  selectedExpertiseId: any;
  imageUrl = environment.imageUrl;
  modalDescription: any;
  modalTitle: any;
  constructor(
    private common: CommonService,
    public router: Router,
    public entitiesService: EntitiesService
  ) {}

  ngOnInit(): void {}

  ExpertiseSelectionChange(event: any) {
    this.selectedExpertiseId = this.common.InputSelectionChange(event);
    this.GetExpertiseList(this.selectedExpertiseId);
  }

  GetExpertiseList(categoryId: any) {
    this.entitiesService.EntitiesByCategoryId(categoryId).subscribe((data) => {
      this.expertise = data;
      console.log('expertise', this.expertise);
    });
  }

  AddExpertise() {
    this.router.navigateByUrl('/Dashboard/Add-Expertise');
  }

  EditExpertise(expertiseId: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(
        '/Dashboard/Edit-Expertise?expertiseId=' + expertiseId
      );
    });
  }
  RemoveExpertise(expertiseId: any) {
    this.entitiesService.RemoveEntity(expertiseId).subscribe((data) => {});
  }

  DescriptionDialog(title: any, description: any) {
    this.modalTitle = title;
    this.modalDescription = description;
  }
}
