import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { SectionEntitiesService } from 'src/app/services/section_entities/section-entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent {
  imageUrl = environment.imageUrl;
  expertiseId: any;
  project: any;
  projectId: any;
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
  attachmentsList: any = [];
  image: any;
  location: any;
  otherProjects: any;
  constructor(
    public entitiesService: EntitiesService,
    public sectionEntitiesService: SectionEntitiesService,
    public common: CommonService,
    private route: ActivatedRoute,
    public router: Router,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.queryParams['entityId'];
    this.expertiseId = this.route.snapshot.queryParams['expertiseId'];
    console.log('project Id', this.projectId);
    this.GetProjectById();
    this.OtherProjectsList();
  }

  GetProjectById() {
    if (this.projectId != null) {
      this.GetAttachments(this.projectId);
      this.entitiesService.EntityById(this.projectId).subscribe((data) => {
        this.project = data;
        console.log('project', this.project);
        this.businessLineId = this.project.CategoryId;
        this.languageId = this.project.LanguageId;
        this.image = this.imageUrl + this.project.Image;
        this.projectTitle = this.project.Title;
        this.typeOfContract = this.project.TypeofContract;
        this.roleOfButec = this.project.RoleofBUTEC;
        this.contractorForProcess = this.project.Contractorforprocess;
        this.executionPeriod = this.project.ExecutionPeriod;
        this.financing = this.project.Financing;
        this.employer = this.project.Employer;
        this.delegatedEmployer = this.project.DelagatedEmployer;
        this.location = this.project.Location;
        this.description = this.project.Paragraph1;
      });
    }
  }

  GetAttachments(entityId: any) {
    this.entitiesService.GetAttachments(entityId).subscribe((data) => {
      this.attachmentsList = data;
      console.log('attachmentList2', this.attachmentsList);
    });
    console.log('attachmentList1', this.attachmentsList);
  }

  ngAfterContentChecked() {
    this.common.navPosition.next('fixed');
    setTimeout(() => {
      this.common.changeNavColor.next('black');
    }, 50);
    this.cdref.detectChanges();
  }

  GetOtherProjects(sectionId: any) {
    this.sectionEntitiesService
      .GetSectionEntityBySectionId(sectionId)
      .subscribe((data) => {
        this.otherProjects = data;
        console.log('other Projects', this.otherProjects);
      });
  }

  OtherProjectsList() {
    if (this.expertiseId == 7) {
      this.GetOtherProjects(18);
    }
    if (this.expertiseId == 6) {
      this.GetOtherProjects(19);
    }
    if (this.expertiseId == 9) {
      this.GetOtherProjects(20);
    }
    if (this.expertiseId == 12) {
      this.GetOtherProjects(21);
    }
  }
}
