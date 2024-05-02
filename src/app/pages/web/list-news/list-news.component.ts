import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { SectionEntitiesService } from 'src/app/services/section_entities/section-entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css'],
})
export class ListNewsComponent {
  newsList: any;
  imageUrl = environment.imageUrl;
  constructor(
    public entitiesService: EntitiesService,
    public sectionEntitiesService: SectionEntitiesService,
    public common: CommonService,
    public router: Router,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.GetNewsList(5);
  }

  GetNewsList(categoryId: any) {
    this.entitiesService.EntitiesByCategoryId(categoryId).subscribe((data) => {
      this.newsList = data;
      console.log('news List', this.newsList);
    });
  }

  ngAfterContentChecked() {
    this.common.navPosition.next('fixed');
    setTimeout(() => {
      this.common.changeNavColor.next('black');
    }, 50);
    this.cdref.detectChanges();
  }

  GoToNewsDetails(entityId: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/News-Details?entityId=' + entityId);
    });
  }
}
