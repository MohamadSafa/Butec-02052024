import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonService } from './services/common/common.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Butec.Presentation';

  isHeaderFooterIncluded: boolean = false;

  constructor(
    private el: ElementRef,
    public common: CommonService,
    public router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.HeaderFooterIncluded();
    let alldrpdwn = document.querySelectorAll('.dropdown-container');
    console.log(alldrpdwn, 'alldrpdwn#');
    alldrpdwn.forEach((item: any) => {
      const a = item.parentElement?.querySelector('a:first-child');
      console.log(a, 'a#');
      a.addEventListener('click', (e: any) => {
        e.preventDefault();
        this.el.nativeElement.classList.toggle('active');
        item.classList.toggle('show');
      });
    });
  }

  // responsivemenu
  responsiveMenu: any;

  //reponsivemaincontent
  responsiveContent: any;
  defaultStatus = true;
  openNav(status: any) {
    if (status === this.defaultStatus) {
      this.responsiveMenu = {
        display: 'block',
      };
      this.responsiveContent = {
        'margin-left': '150px',
      };
      this.defaultStatus = false;
    } else {
      this.responsiveMenu = {
        display: null,
      };
      this.responsiveContent = {
        'margin-left': null,
      };
      this.defaultStatus = true;
    }
  }

  HeaderFooterIncluded() {
    var page;
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        page = this.router.url.split(/([!,?,.])/);
        console.log('page name', page);
        this.isHeaderFooterIncluded = this.common.ExcludeHeaderFooter(page);
        console.log('Header Footer Included', this.isHeaderFooterIncluded);
      }
    });
  }
}
