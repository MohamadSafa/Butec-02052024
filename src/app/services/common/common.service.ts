import { AnimationStyleMetadata } from '@angular/animations';
import { Identifiers } from '@angular/compiler/src/render3/r3_identifiers';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(public router: Router) {}

  excludeHeaderFooterList = [
    '/LoginPage',
    '/Dashboard',
    '/Dashboard/Sections',
    '/Dashboard/Home',
    '/Dashboard/Projects',
    '/Dashboard/News',
    '/Dashboard/Vacancies',
    '/Dashboard/Add-Home',
    '/Dashboard/Add-Project',
    '/Dashboard/Edit-Project',
    '/Dashboard/Add-Vacancy',
    '/Dashboard/Add-News',
    '/Dashboard/Edit-Home',
    '/Dashboard/Edit-News',
    '/Dashboard/Add-Section',
    '/Dashboard/Edit-Section',
    '/Dashboard/Sub-Section',
    '/Dashboard/Edit-Expertise',
    '/Dashboard/Add-Expertise',
    '/Dashboard/Expertises',
  ];

  expertiseName = [
    'Electro-Mechanical Solutions',
    'Engineering and Contracting',
    'Facility Services',
    'Utility Services',
  ];

  expertiseId = ['6', '7', '9', '12'];

  expertiseProjectsId = ['11', '8', '10', '13'];

  public GoToPage(pageName: any) {
    for (var i = 0; i < this.expertiseName.length; i++) {
      if (pageName == this.expertiseName[i]) {
        var id = this.expertiseId[i];
        var projectId = this.expertiseProjectsId[i];
        this.router
          .navigateByUrl('/', { skipLocationChange: true })
          .then(() => {
            this.router.navigateByUrl(
              '/Expertise?expertiseId=' + id + '&sectionProjectId=' + projectId
            );
          });
      }
    }
  }

  public ExcludeHeaderFooter(pageName: any): any {
    console.log('exclude Page Name', pageName);
    var isIncluded = false;
    for (var i = 0; i < this.excludeHeaderFooterList.length; i++) {
      if (this.excludeHeaderFooterList[i] == pageName[0]) {
        isIncluded = true;
        break;
      }
    }
    console.log('isIncluded', isIncluded);
    return isIncluded;
  }

  public changeNavColor: Subject<Object> = new Subject<Object>();
  public navPosition: Subject<Object> = new Subject<Object>();
  //State Management
  SetSession(key: string, value: any): void {
    //sessionStorage.setItem(key, JSON.stringify(value));
    localStorage.setItem(key, JSON.stringify(value));
  }

  GetSession(key: string): any {
    if (typeof window !== 'undefined') {
      //let retrievedObject = sessionStorage.getItem(key) as string;
      let retrievedObject = localStorage.getItem(key) as string;
      return retrievedObject;
    }
  }

  RemoveFromSession(key: string): any {
    localStorage.removeItem(key);
  }

  clearSession(): void {
    localStorage.clear();
  }

  EscapeJson(list: any) {
    var json = list.replace(/\\/g, '');
    var convertedList = JSON.parse(json);
    return convertedList;
  }

  GetHTMLElementById(elementId: any): any {
    var HTMLId = document.getElementById(elementId) as HTMLInputElement;
    return HTMLId;
  }

  GetHTMLValueById(elementId: any): any {
    var HTMLId = document.getElementById(elementId) as HTMLInputElement;
    return HTMLId.value;
  }

  InputSelectionChange(event: any): any {
    var value = event.target.value;
    return value;
  }

  InputSelectionChangeByText(event: any): any {
    var value = event.target.value;
    return value;
  }
}
