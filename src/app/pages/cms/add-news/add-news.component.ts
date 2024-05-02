import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timeStamp } from 'console';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],
})
export class AddNewsComponent implements OnInit {
  imageUrl = environment.imageUrl;
  // ngModel Variables //
  newsTitle: any;
  client: any;
  interviewDate: any;
  summary: any;
  imageSubTitle: any;
  description: any;
  notes: any;
  buttonName: any;
  // ngModel Variables //

  //Add-Edit Variables//
  savedEntityId: any;
  newsList: any = [];
  newsItems: any;
  newsTitleInput: any;
  interviewDateInput: any;
  imageSubTitleTxtArea: any;
  summaryTxtArea: any;
  descriptionTxtArea: any;
  languageId: any;
  sectorId: any;
  locationId: any;
  cardImageBase64: any;
  newsId: any;
  news: any = [];
  isImageSaved: any;
  image: any;
  postMultimedias: any = [];
  files: File[] = [];
  attachmentsList: any = [];
  //Add-Edit Variables//

  constructor(
    private common: CommonService,
    public router: Router,
    public entitiesService: EntitiesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.newsId = this.route.snapshot.queryParams['newsId'];
    this.AddOrEdit();
    this.GetNewsItemsById();
  }

  AddOrEdit() {
    this.buttonName = 'Add';
    if (this.newsId != null) {
      this.buttonName = 'Edit';
    }
  }

  GetNewsItemsById() {
    if (this.newsId != null) {
      this.GetAttachments(this.newsId);
      this.entitiesService.EntityById(this.newsId).subscribe((data) => {
        this.newsItems = data;
        console.log('news Items', this.newsItems);
        this.newsTitle = this.newsItems.Title;
        this.languageId = this.newsItems.LanguageId;
        this.interviewDate = this.newsItems.CustomDate;
        this.locationId = this.newsItems.Location;
        this.image = this.imageUrl + this.newsItems.Image;
        this.imageSubTitle = this.newsItems.Paragraph1;
        this.summary = this.newsItems.Paragraph2;
        this.description = this.newsItems.Paragraph3;
        console.log('image', this.image);
        console.log('languageId', this.languageId);
      });
    }
  }

  GetAddNewsList(): any {
    this.GetHTMLValuesById();
    this.newsList = {
      categoryId: 5,
      Name: 'News',
      Title: this.newsTitleInput.toString(),
      LanguageId: this.languageId,
      CustomDate: this.interviewDateInput.toString(),
      Location: this.locationId,
      image: this.cardImageBase64,
      Paragraph1: this.imageSubTitle.toString(),
      Paragraph2: this.summary.toString(),
      Paragraph3: this.descriptionTxtArea.toString(),
    };
    console.log('add news List', this.newsList);
    return this.newsList;
  }

  GetEditNewsList(): any {
    this.GetHTMLValuesById();
    this.newsList = {
      EntityId: this.newsId,
      CategoryId: '5',
      Name: 'News',
      Title: this.newsTitleInput.toString(),
      LanguageId: this.languageId,
      CustomDate: this.interviewDateInput.toString(),
      Location: this.locationId,
      Image: this.cardImageBase64,
      Paragraph1: this.imageSubTitle.toString(),
      Paragraph2: this.summary.toString(),
      Paragraph3: this.descriptionTxtArea.toString(),
    };
    console.log('edit news List', this.newsList);
    return this.newsList;
  }

  LanguageSelectionChange(event: any) {
    this.languageId = this.common.InputSelectionChange(event);
  }

  LocationSelectionChange(event: any) {
    this.locationId = this.common.InputSelectionChange(event);
  }

  GetHTMLValuesById() {
    this.newsTitleInput = this.common.GetHTMLValueById('newsTitleInput');
    this.imageSubTitleTxtArea = this.common.GetHTMLValueById(
      'imageSubTitleTxtArea'
    );
    this.interviewDateInput =
      this.common.GetHTMLValueById('interviewDateInput');
    this.summaryTxtArea = this.common.GetHTMLValueById('summaryTxtArea');
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

  EditNews() {
    this.entitiesService
      .EditEntity(this.GetEditNewsList())
      .subscribe((data: any) => {});
  }

  AddNews() {
    this.entitiesService.AddEntity(this.GetAddNewsList()).subscribe((data) => {
      setTimeout(() => {
        this.savedEntityId = data;
        this.postMultimedias.forEach(
          (x1: any) => (x1.entityId = this.savedEntityId)
        );

        this.AddAttachements(this.postMultimedias);
      }, 500);
    });
  }

  GetAttachments(entityId: any) {
    this.entitiesService.GetAttachments(entityId).subscribe((data) => {
      this.attachmentsList = data;
      console.log('attachmentList2', this.attachmentsList);
    });
    console.log('attachmentList1', this.attachmentsList);
  }

  AddAttachements(attachmentList: any) {
    this.entitiesService.AddAttachments(attachmentList).subscribe((data) => {});
  }

  AddEditNews() {
    if (this.newsId != null) {
      this.EditNews();
    } else {
      this.AddNews();
    }
    this.GoToNewsListPage();
  }

  GoToNewsListPage() {
    setTimeout(() => {
      this.router.navigate(['/Dashboard/News']);
    }, 300);
  }

  onSelect(event: any) {
    console.log(event);
    this.postMultimedias = [];
    // this.files.push(...event.addedFiles);
    this.files.push(...event.addedFiles);
    console.log('Files', this.files);
    if (this.files && this.files[0]) {
      for (let i = 0; i < this.files.length; i++) {
        this.fileToBase64(this.files[i]).then((result) => {
          const base64String = result.replace('data:', '').replace(/^.+,/, ''); // To remove data url part
          this.postMultimedias.push(base64String); //postMultimedias is a array which holds image name and bas64String
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
  }

  fileToBase64 = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };
}
