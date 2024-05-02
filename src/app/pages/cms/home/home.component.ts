import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeItems: any;
  imageUrl = environment.imageUrl;
  modalDescription: any;
  constructor(
    private common: CommonService,
    public router: Router,
    public entitiesService: EntitiesService
  ) {}

  ngOnInit(): void {
    this.GetHomeItemsList(7);
  }

  AddHome() {
    this.router.navigateByUrl('/Dashboard/Add-Home');
  }

  GetHomeItemsList(categoryId: any) {
    this.entitiesService.EntitiesByCategoryId(categoryId).subscribe((data) => {
      this.homeItems = data;
      console.log('home Items', this.homeItems);
    });
  }

  EditHomeItems(entityId: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/Dashboard/Edit-Home?homeId=' + entityId);
    });
  }

  RemoveHomeItems(entityId: any) {
    this.entitiesService.RemoveEntity(entityId).subscribe((data) => {
      this.GetHomeItemsList(7);
    });
  }

  DescriptionDialog(description: any) {
    this.modalDescription = description;
  }
}
