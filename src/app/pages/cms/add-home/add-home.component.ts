import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-add-home',
  templateUrl: './add-home.component.html',
  styleUrls: ['./add-home.component.css'],
})
export class AddHomeComponent implements OnInit {
  imageUrl = environment.imageUrl;

  // ngModel Variables //
  homeTitle: any;
  homeSubTitle: any;
  description: any;
  languageId: any;
  notes: any;
  // ngModel Variables //

  //Add-Edit Variables//
  homeList: any = [];
  homeTitleInput: any;
  homeSubTitleInput: any;
  descriptionTxtArea: any;
  cardImageBase64: any;
  homeId: any;
  homeItems: any = [];
  homeImage: any;
  isImageSaved: any;
  image: any;
  buttonName: any;
  //Add-Edit Variables//

  constructor(
    private common: CommonService,
    public router: Router,
    public entitiesService: EntitiesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.homeId = this.route.snapshot.queryParams['homeId'];
    this.AddOrEdit();
    console.log('home Id edit page', this.homeId);
    //this.EditSection();
    this.GetHomeItemsById();
  }

  AddOrEdit() {
    this.buttonName = 'Add';
    if (this.homeId != null) {
      this.buttonName = 'Edit';
    }
  }

  GetHomeItemsById() {
    if (this.homeId != null) {
      this.entitiesService.EntityById(this.homeId).subscribe((data) => {
        this.homeItems = data;
        console.log('home Items', this.homeItems);
        this.homeTitle = this.homeItems.Title;
        this.homeSubTitle = this.homeItems.SubTitle;
        this.description = this.homeItems.Paragraph1;
        this.languageId = this.homeItems.LanguageId;
        this.image = this.imageUrl + this.homeItems.Image;
        console.log('image', this.image);
      });
    }
  }
  GetAddHomeList(): any {
    this.GetHTMLValuesById();

    this.homeList = {
      CategoryId: 7,
      Name: 'Home - Image',
      Title: this.homeTitleInput.toString(),
      SubTitle: this.homeSubTitleInput.toString(),
      Paragraph1: this.descriptionTxtArea.toString(),
      LanguageId: this.languageId,
      Image: this.cardImageBase64,
    };

    console.log('Home Items List', this.homeList);
    return this.homeList;
  }

  GetEditHomeList(): any {
    this.GetHTMLValuesById();

    this.homeList = {
      CategoryId: 7,
      Name: 'Home Image',
      EntityId: this.homeId,
      Title: this.homeTitleInput,
      SubTitle: this.homeSubTitleInput,
      Paragraph1: this.descriptionTxtArea,
      LanguageId: this.languageId,
      Image: this.cardImageBase64,
    };

    console.log('Edit Home List', this.homeList);
    return this.homeList;
  }

  LanguageSelectionChange(event: any) {
    this.languageId = this.common.InputSelectionChange(event);
  }

  GetHTMLValuesById() {
    this.homeTitleInput = this.common.GetHTMLValueById('homeTitleInput');
    this.homeSubTitleInput = this.common.GetHTMLValueById('homeSubTitleInput');
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

  EditHome() {
    this.entitiesService
      .EditEntity(this.GetEditHomeList())
      .subscribe((data: any) => {});
  }

  AddHome() {
    this.entitiesService
      .AddEntity(this.GetAddHomeList())
      .subscribe((data: any) => {});
  }

  AddEditHome() {
    if (this.homeId != null) {
      this.EditHome();
    } else {
      this.AddHome();
    }
    this.GoToHomePage();
  }

  GoToHomePage() {
    setTimeout(() => {
      this.router.navigate(['/Dashboard/Home']);
    }, 300);
  }
}
