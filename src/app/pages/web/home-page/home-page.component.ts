import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { SectionEntitiesService } from 'src/app/services/section_entities/section-entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  homeItems: any;
  selectedProjects: any;
  image: any;
  title: any;
  subTitle: any;
  paragraph1: any;
  imageUrl = environment.imageUrl;

  projectTitle: any;
  projectLocation: any;
  projectImage: any;
  constructor(
    public entitiesService: EntitiesService,
    public sectionEntitiesService: SectionEntitiesService,
    public common: CommonService,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.GetSelectedHomeProjects();
    this.GetSubSectionEntityById();

    console.log('projectTitle', this.projectTitle);
    console.log('projectLocation', this.projectLocation);
    console.log('projectImage', this.projectImage);
  }

  ngAfterContentChecked() {
    this.common.navPosition.next('absolute');
    setTimeout(() => {
      this.common.changeNavColor.next('');
    }, 50);
    this.cdref.detectChanges();
  }

  GetSubSectionEntityById() {
    this.sectionEntitiesService
      .GetSectionEntityBySectionId(4)
      .subscribe((data) => {
        this.homeItems = data;
        console.log('homeItems', this.homeItems);
        this.image = this.homeItems[0].Image;
        this.title = this.homeItems[0].Title;
        this.subTitle = this.homeItems[0].SubTitle;
        this.paragraph1 = this.homeItems[0].Paragraph1;
        console.log('Image', this.image);
      });
  }

  GetSelectedHomeProjects() {
    this.sectionEntitiesService
      .GetSectionEntityBySectionId(5)
      .subscribe((data) => {
        this.selectedProjects = data;
        this.FirstSelectedProject();
        console.log('selectedProject', this.selectedProjects);
      });
  }
  FirstSelectedProject() {
    this.projectTitle = this.selectedProjects[0].Title;
    this.projectLocation = this.selectedProjects[0].Location;
    this.projectImage = this.imageUrl + this.selectedProjects[0].Image;
  }

  SelectImage(projectImage: any) {
    if (projectImage == this.imageUrl + this.selectedProjects[0].Image) {
      this.projectTitle = this.selectedProjects[1].Title;
      this.projectLocation = this.selectedProjects[1].Location;
      this.projectImage = this.imageUrl + this.selectedProjects[1].Image;
    } else {
      this.projectTitle = this.selectedProjects[0].Title;
      this.projectLocation = this.selectedProjects[0].Location;
      this.projectImage = this.imageUrl + this.selectedProjects[0].Image;
    }
  }
}
