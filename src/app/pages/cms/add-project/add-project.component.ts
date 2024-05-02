import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  imageUrl = environment.imageUrl;
  // ngModel Variables //
  projectTitle: any;
  typeOfContract: any;
  roleOfButec: any;
  contractorForProcess: any;
  executionPeriod: any;
  financing: any;
  employer: any;
  description: any;
  delegatedEmployer: any;
  languageId: any;
  businessLineId: any;
  savedEntityId: any;
  // ngModel Variables //

  //Add-Edit Variables//
  projectList: any = [];
  selectedBusinessLineId: any;
  projectTitleInput: any;
  descriptionTxtArea: any;
  selectedLanguageId: any;
  sectorId: any;
  locationId: any;
  cardImageBase64: any;
  projectId: any;
  projects: any = [];
  isImageSaved: any;
  image: any;
  buttonName: any;
  config: any;
  postMultimedias: any = [];
  files: File[] = [];
  attachmentsList: any = [];
  edittedAttachmentsList: any = [];
  fullImageUrl: any;
  //Add-Edit Variables//

  constructor(
    private common: CommonService,
    public router: Router,
    public entitiesService: EntitiesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.queryParams['projectId'];
    //this.businessLineId = this.route.snapshot.queryParams['businessLineId'];
    this.AddOrEdit();
    this.GetProjectById();
  }

  AddOrEdit() {
    this.buttonName = 'Add';
    if (this.projectId != null) {
      this.buttonName = 'Edit';
    }
  }

  GetProjectById() {
    if (this.projectId != null) {
      this.GetAttachments(this.projectId);
      this.entitiesService.EntityById(this.projectId).subscribe((data) => {
        this.projects = data;
        console.log('projects', this.projects);
        this.businessLineId = this.projects.CategoryId;
        this.languageId = this.projects.LanguageId;
        this.image = this.imageUrl + this.projects.Image;
        this.projectTitle = this.projects.Title;
        this.typeOfContract = this.projects.TypeofContract;
        this.roleOfButec = this.projects.RoleofBUTEC;
        this.contractorForProcess = this.projects.Contractorforprocess;
        this.executionPeriod = this.projects.ExecutionPeriod;
        this.financing = this.projects.Financing;
        this.employer = this.projects.Employer;
        this.delegatedEmployer = this.projects.DelagatedEmployer;
        this.locationId = this.projects.Location;
        this.description = this.projects.Paragraph1;
      });
      this.EditImageUrl();
    }
  }

  GetAddProjectList(): any {
    this.GetHTMLValuesById();
    this.projectList = {
      Name: 'Projects',
      CategoryId: this.selectedBusinessLineId,
      LanguageId: this.selectedLanguageId,
      Image: this.cardImageBase64,
      Title: this.projectTitleInput.toString(),
      TypeofContract: this.typeOfContract,
      RoleofButec: this.roleOfButec,
      Contractorforprocess: this.contractorForProcess,
      ExecutionPeriod: this.executionPeriod,
      Financing: this.financing,
      Employer: this.employer,
      DelagatedEmployer: this.delegatedEmployer,
      Location: this.locationId,
      Paragraph1: this.descriptionTxtArea.toString(),
    };
    console.log('project List', this.projectList);
    return this.projectList;
  }

  GetEditProjectList(): any {
    this.GetHTMLValuesById();
    this.projectList = {
      Name: 'Projects',
      EntityId: this.projectId,
      CategoryId: this.selectedBusinessLineId,
      LanguageId: this.selectedLanguageId,
      Image: this.cardImageBase64,
      Title: this.projectTitleInput.toString(),
      TypeofContract: this.typeOfContract,
      RoleofButec: this.roleOfButec,
      Contractorforprocess: this.contractorForProcess,
      ExecutionPeriod: this.executionPeriod,
      Financing: this.financing,
      Employer: this.employer,
      DelagatedEmployer: this.delegatedEmployer,
      Location: this.locationId,
      Paragraph1: this.descriptionTxtArea.toString(),
    };
    console.log('Edit Project List', this.projectList);
    return this.projectList;
  }

  LanguageSelectionChange(event: any) {
    this.selectedLanguageId = this.common.InputSelectionChange(event);
  }

  BusinessLineSelectionChange(event: any) {
    this.selectedBusinessLineId = this.common.InputSelectionChange(event);
  }

  SectorSelectionChange(event: any) {
    this.sectorId = this.common.InputSelectionChange(event);
  }

  LocationSelectionChange(event: any) {
    this.locationId = this.common.InputSelectionChange(event);
  }

  GetHTMLValuesById() {
    this.projectTitleInput = this.common.GetHTMLValueById('projectTitleInput');
    this.typeOfContract = this.common.GetHTMLValueById('typeOfContractInput');
    this.roleOfButec = this.common.GetHTMLValueById('roleOfButecInput');
    this.contractorForProcess = this.common.GetHTMLValueById(
      'contractorForProcessInput'
    );
    this.executionPeriod = this.common.GetHTMLValueById('executionPeriodInput');
    this.financing = this.common.GetHTMLValueById('financingInput');
    this.employer = this.common.GetHTMLValueById('employerInput');
    this.delegatedEmployer = this.common.GetHTMLValueById(
      'delegatedEmployerInput'
    );
    this.descriptionTxtArea =
      this.common.GetHTMLValueById('descriptionTxtArea');
  }

  OnFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.cardImageBase64 = reader.result as string;
      this.isImageSaved = true;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  EditProject() {
    // if (this.projectId != null) {
    //   this.postMultimedias = this.postMultimedias.filter((val: any) => {
    //     return !this.edittedAttachmentsList.find((val2: any) => {
    //       //  console.log({valueID:val.id+":"+val2.id});
    //       return val.image === val2.imge;
    //     });
    //   });
    // }
    // console.log('edit MOHAMMAD', this.edittedAttachmentsList);
    // console.log('post Mohammad', this.postMultimedias);
    // if (this.projectId != null) {
    //   this.RemoveElement(this.imageUrl);
    // }
    //console.log('Final attachement', this.postMultimedias);
    this.entitiesService
      .EditEntity(this.GetEditProjectList())
      .subscribe((data) => {});
    // this.AddAttachements(this.postMultimedias);
  }

  AddProject() {
    this.entitiesService
      .AddEntity(this.GetAddProjectList())
      .subscribe((data) => {
        setTimeout(() => {
          this.savedEntityId = data;
          this.postMultimedias.forEach(
            (x1: any) => (x1.entityId = this.savedEntityId)
          );

          this.AddAttachements(this.postMultimedias);
        }, 300);
      });
  }

  AddAttachements(attachmentList: any) {
    this.entitiesService.AddAttachments(attachmentList).subscribe((data) => {});
  }

  GetAttachments(entityId: any) {
    this.entitiesService.GetAttachments(entityId).subscribe((data) => {
      this.attachmentsList = data;
      console.log('attachmentList2', this.attachmentsList);
    });
    console.log('attachmentList1', this.attachmentsList);
  }

  AddEditProject() {
    if (this.projectId != null) {
      this.EditProject();
    } else {
      this.AddProject();
    }
    this.GoToProjectsPage();
  }

  GoToProjectsPage() {
    setTimeout(() => {
      this.router.navigate(['/Dashboard/Projects']);
    }, 300);
  }

  onSelect(event: any) {
    console.log(event);
    //this.postMultimedias = [];
    // this.files.push(...event.addedFiles);
    this.files.push(...event.addedFiles);
    console.log('Files', this.files);
    if (this.files && this.files[0]) {
      for (let i = 0; i < this.files.length; i++) {
        this.fileToBase64(this.files[i]).then((result) => {
          const base64String = result.replace('data:', '').replace(/^.+,/, ''); // To remove data url part
          this.postMultimedias.push({ entityId: 0, image: base64String }); //postMultimedias is a array which holds image name and bas64String
        });
      }
    }
    // console.log('post to multimedia', this.postMultimedias);
    // for (var i = 0; i < this.files.length; i++) {
    //   var base64 = this.OnFileChange(this.files[i]);
    //   this.postMultimedias.push(base64);
    // }
    console.log('postMultimedias', this.postMultimedias);
  }

  onRemove(event: any) {
    console.log(event);
    let position = this.files.indexOf(event);
    this.files.splice(position, 1);
    this.postMultimedias.splice(position, 1);
    if (this.projectId != null) {
      this.RemoveAttachment(this.projectId);
    }
  }

  fileToBase64 = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  EditImageUrl() {
    // this.postMultimedias = this.attachmentsList;
    setTimeout(() => {
      for (var i = 0; i < this.attachmentsList.length; i++) {
        this.fullImageUrl = this.imageUrl + this.attachmentsList[i].Name;
        // this.postMultimedias.push({
        //   attachmentId: this.attachmentsList[i].AttachmentId,
        //   entityId: this.attachmentsList[i].EntityId,
        //   name: this.attachmentsList[i].Name,
        //   url: this.imageUrl,
        // });
        if (this.files && this.files[0]) {
          for (let i = 0; i < this.files.length; i++) {
            this.fileToBase64(this.files[i]).then((result) => {
              const base64String = result
                .replace('data:', '')
                .replace(/^.+,/, ''); // To remove data url part
              this.edittedAttachmentsList.push({
                entityId: this.projectId,
                image: base64String,
              }); //postMultimedias is a array which holds image name and bas64String
            });
          }
        }
        this.ConvertImage(this.fullImageUrl);
      }
      console.log(
        'my file edittedAttachmentsList',
        this.edittedAttachmentsList
      );
      console.log('my Post Multi Media', this.postMultimedias);
    }, 500);
  }

  ConvertImage(fullImageUrl: any) {
    this.entitiesService.LoadImage(fullImageUrl).subscribe((i) => {
      const myFile = new File([i], fullImageUrl, {
        type: i.type,
      });
      this.files.push(myFile);
    });
  }

  // RemoveElement(element: any) {
  //   if (this.edittedAttachmentsList.length > 0) {
  //     this.edittedAttachmentsList.forEach((item: any, index: any) => {
  //       if (item === element) {
  //         this.edittedAttachmentsList.splice(index, 1);
  //       }
  //     });
  //   }
  //   console.log('Remove editted Attachments List', this.edittedAttachmentsList);
  // }

  RemoveAttachment(entityId: any) {
    this.entitiesService.RemoveAttachment(entityId).subscribe((data) => {});
  }
}
