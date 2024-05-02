import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { SectionEntitiesService } from 'src/app/services/section_entities/section-entities.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navColor: any = 'black';
  navPosition: any = 'absolute';
  isOpen: any = false;
  // @ViewChild('blue') blue: ElementRef;

  constructor(
    public entitiesService: EntitiesService,
    public sectionEntitiesService: SectionEntitiesService,
    public common: CommonService,
    public router: Router,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.getPageColor();
    this.GetNavPosition();
    console.log('navColor', this.navColor);
  }

  getPageColor(): any {
    this.common.changeNavColor.subscribe((color) => {
      this.navColor = color;
    });
    return this.navColor;
  }

  GetNavPosition(): any {
    this.common.navPosition.subscribe((position) => {
      this.navPosition = position;
    });
    return this.navPosition;
  }

  openMenu() {
    console.log('is Open 1', this.isOpen);
    if (this.isOpen == false) {
      var hamb = document.getElementById('nav') as HTMLElement;
      hamb?.style.setProperty('display', 'block');
      this.isOpen = true;
    } else {
      var hamb = document.getElementById('nav') as HTMLElement;
      hamb?.style.setProperty('display', 'none');
      this.isOpen = false;
    }
    console.log('is Open 2', this.isOpen);
  }

  GoToHomePage() {
    this.router.navigateByUrl('/HomePage');
  }

  GoToPage(pageName: any) {
    this.common.GoToPage(pageName);
  }

  // switch() {
  //   this.renderer.setStyle(
  //     this.blue.nativeElement,
  //     'background-color',
  //     this.navColor
  //   );
  // }
}
