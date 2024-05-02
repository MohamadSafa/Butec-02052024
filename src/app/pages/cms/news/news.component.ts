import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news: any;
  imageUrl = environment.imageUrl;
  constructor(
    private common: CommonService,
    public router: Router,
    public entitiesService: EntitiesService
  ) {}

  ngOnInit(): void {
    this.GetNewsList(5);
  }

  GetNewsList(categoryId: any) {
    this.entitiesService.EntitiesByCategoryId(categoryId).subscribe((data) => {
      this.news = data;
      console.log('news', this.news);
    });
  }

  AddNews() {
    this.router.navigateByUrl('/Dashboard/Add-News');
  }
  EditNews(newsId: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/Dashboard/Edit-News?newsId=' + newsId);
    });
  }
  RemoveNews(newsId: any) {
    this.entitiesService.RemoveEntity(newsId).subscribe((data) => {
      this.GetNewsList(5);
    });
  }
}
