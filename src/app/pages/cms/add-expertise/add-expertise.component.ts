import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-add-expertise',
  templateUrl: './add-expertise.component.html',
  styleUrls: ['./add-expertise.component.css'],
})
export class AddExpertiseComponent {
  imageUrl = environment.imageUrl;
  // ngModel Variables //
  expertiseTitle: any;
  selectedExpertiseText: any;
  paragraph1: any;
  paragraph2: any;
  paragraph3: any;
  languageId: any;
  // ngModel Variables //

  //Add-Edit Variables//
  selectedExpertiseId: any;
  expertiseList: any = [];
  expertiseTitleInput: any;
  paragraph1TxtArea: any;
  paragraph2TxtArea: any;
  paragraph3TxtArea: any;
  selectedLanguageId: any;
  locationId: any;
  cardImageBase64: any;
  expertiseId: any;
  expertise: any = [];
  isImageSaved: any;
  image: any;
  buttonName: any;
  config: any;
  postMultimedias: any = [];
  files: File[] = [];

  //Add-Edit Variables//

  constructor(
    private common: CommonService,
    public router: Router,
    public entitiesService: EntitiesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.expertiseId = this.route.snapshot.queryParams['expertiseId'];
    console.log('expertiseId', this.expertiseId);
    //this.businessLineId = this.route.snapshot.queryParams['businessLineId'];
    this.AddOrEdit();
    this.GetExpertiseById();
  }

  AddOrEdit() {
    this.buttonName = 'Add';
    if (this.expertiseId != null) {
      this.buttonName = 'Edit';
    }
  }

  GetExpertiseById() {
    if (this.expertiseId != null) {
      this.entitiesService.EntityById(this.expertiseId).subscribe((data) => {
        this.expertise = data;
        console.log('expertise', this.expertise);
        this.selectedExpertiseText = this.expertise.CategoryId;
        this.selectedLanguageId = this.expertise.LanguageId;
        this.image = this.imageUrl + this.expertise.Image;
        this.expertiseTitle = this.expertise.Title;
        this.paragraph1 = this.expertise.Paragraph1;
        this.paragraph2 = this.expertise.Paragraph2;
        this.paragraph3 = this.expertise.Paragraph3;
      });
    }
  }

  GetAddExpertiseList(): any {
    this.GetHTMLValuesById();
    this.expertiseList = {
      CategoryId: this.selectedExpertiseText,
      Name: this.expertiseTitleInput.toString(),
      LanguageId: this.selectedLanguageId,
      Image: this.cardImageBase64,
      Title: this.expertiseTitleInput.toString(),
      Paragraph1: this.paragraph1TxtArea.toString(),
      Paragraph2: this.paragraph2TxtArea.toString(),
      Paragraph3: this.paragraph3TxtArea.toString(),
    };
    console.log('expertise List', this.expertiseList);
    return this.expertiseList;
  }

  GetEditExpertiseList(): any {
    this.GetHTMLValuesById();
    this.expertiseList = {
      CategoryId: this.selectedExpertiseText,
      Name: this.expertiseTitleInput.toString(),
      EntityId: this.expertiseId,
      LanguageId: this.selectedLanguageId,
      Image: this.cardImageBase64,
      Title: this.expertiseTitleInput.toString(),
      Paragraph1: this.paragraph1TxtArea.toString(),
      Paragraph2: this.paragraph2TxtArea.toString(),
      Paragraph3: this.paragraph3TxtArea.toString(),
    };
    console.log('Edit Expertise List', this.expertiseList);
    return this.expertiseList;
  }

  LanguageSelectionChange(event: any) {
    console.log('event', event);
    this.selectedLanguageId = this.common.InputSelectionChange(event);
    console.log('Language Id', this.selectedLanguageId);
  }

  ExpertiseSelectionChange(event: any) {
    this.selectedExpertiseText = this.common.InputSelectionChangeByText(event);
  }

  GetHTMLValuesById() {
    this.expertiseTitleInput = this.common.GetHTMLValueById(
      'expertiseTitleInput'
    );

    this.paragraph1TxtArea = this.common.GetHTMLValueById('paragraph1TxtArea');
    this.paragraph2TxtArea = this.common.GetHTMLValueById('paragraph2TxtArea');
    this.paragraph3TxtArea = this.common.GetHTMLValueById('paragraph3TxtArea');
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

  EditExpertise() {
    this.entitiesService
      .EditEntity(this.GetEditExpertiseList())
      .subscribe((data) => {
        console.log('data', data);
      });
  }

  AddExpertise() {
    this.entitiesService
      .AddEntity(this.GetAddExpertiseList())
      .subscribe((data) => {});
  }

  AddEditExpertise() {
    if (this.expertiseId != null) {
      this.EditExpertise();
    } else {
      this.AddExpertise();
    }
    this.GoToExpertisePage();
  }

  GoToExpertisePage() {
    setTimeout(() => {
      this.router.navigate(['/Dashboard/Expertises']);
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
