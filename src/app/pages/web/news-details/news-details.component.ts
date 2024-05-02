import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { SectionEntitiesService } from 'src/app/services/section_entities/section-entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css'],
})
export class NewsDetailsComponent {
  imageUrl = environment.imageUrl;
  newsList: any;
  newsId: any;
  newsTitle: any;
  subTitle: any;
  summary: any;
  description: any;
  languageId: any;
  savedEntityId: any;
  attachmentsList: any = [];
  image: any;
  location: any;
  otherNews: any;
  newsDate: any;
  constructor(
    public entitiesService: EntitiesService,
    public sectionEntitiesService: SectionEntitiesService,
    public common: CommonService,
    public router: Router,
    private cdref: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.newsId = this.route.snapshot.queryParams['entityId'];
    this.GetNewsById();
    this.GetOtherNews(22);
  }

  GetNewsById() {
    if (this.newsId != null) {
      this.GetAttachments(this.newsId);
      this.entitiesService.EntityById(this.newsId).subscribe((data) => {
        this.newsList = data;
        console.log('news List', this.newsList);
        this.languageId = this.newsList.LanguageId;
        this.image = this.imageUrl + this.newsList.Image;
        this.newsTitle = this.newsList.Title;
        this.newsDate = this.newsList.CustomDate;
        this.location = this.newsList.Location;
        this.subTitle = this.newsList.Paragraph1;
        this.summary = this.newsList.Paragraph2;
        this.description = this.newsList.Paragraph3;
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

  GetOtherNews(sectionId: any) {
    this.sectionEntitiesService
      .GetSectionEntityBySectionId(sectionId)
      .subscribe((data) => {
        this.otherNews = data;
        console.log('other News', this.otherNews);
      });
  }
}
