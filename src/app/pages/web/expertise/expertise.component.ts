import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { SectionEntitiesService } from 'src/app/services/section_entities/section-entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css'],
})
export class ExpertiseComponent implements OnInit {
  expertiseId: any;
  sectionProjectId: any;
  expertiseItems: any;
  expertiseProjects: any;
  image: any;
  title: any;
  categoryId: any;
  paragraph1: any;
  paragraph2: any;
  paragraph3: any;
  imageUrl = environment.imageUrl;
  constructor(
    public entitiesService: EntitiesService,
    public sectionEntitiesService: SectionEntitiesService,
    private route: ActivatedRoute,
    public router: Router,
    private cdref: ChangeDetectorRef,
    public common: CommonService
  ) {}

  ngOnInit(): void {
    this.expertiseId = this.route.snapshot.queryParams['expertiseId'];
    this.sectionProjectId = this.route.snapshot.queryParams['sectionProjectId'];
    this.GetExpertiseById(this.expertiseId);
    this.GetOtherProjects(this.sectionProjectId);
  }

  GetExpertiseById(sectionId: any) {
    this.sectionEntitiesService
      .GetSectionEntityBySectionId(sectionId)
      .subscribe((data) => {
        this.expertiseItems = data;
        console.log('expertise Items', this.expertiseItems);
        this.image = this.expertiseItems[0].Image;
        this.title = this.expertiseItems[0].Title;
        this.categoryId = this.expertiseItems[0].CategoryId;
        this.paragraph1 = this.expertiseItems[0].Paragraph1;
        this.paragraph2 = this.expertiseItems[0].Paragraph2;
        this.paragraph3 = this.expertiseItems[0].Paragraph3;
        console.log('Image', this.image);
      });
  }
  GetOtherProjects(sectionId: any) {
    this.sectionEntitiesService
      .GetSectionEntityBySectionId(sectionId)
      .subscribe((data) => {
        this.expertiseProjects = data;
        console.log('expertise Projects', this.expertiseProjects);
        // this.image = this.expertiseItems[0].Image;
        // this.title = this.expertiseItems[0].Title;
        // this.categoryId = this.expertiseItems[0].CategoryId;
        // this.paragraph1 = this.expertiseItems[0].Paragraph1;
        // this.paragraph2 = this.expertiseItems[0].Paragraph2;
        // this.paragraph3 = this.expertiseItems[0].Paragraph3;
      });
  }

  GoToPage(entityId: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl(
        '/Project-Details?entityId=' +
          entityId +
          '&expertiseId=' +
          this.expertiseId
      );
    });
  }

  ngAfterContentChecked() {
    this.common.navPosition.next('fixed');
    setTimeout(() => {
      this.common.changeNavColor.next('black');
    }, 50);
    this.cdref.detectChanges();
  }
}
