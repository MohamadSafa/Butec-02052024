import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { EntitiesService } from 'src/app/services/entities/entities.service';
import { SectionEntitiesService } from 'src/app/services/section_entities/section-entities.service';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css'],
})
export class ListProjectsComponent {
  constructor(
    public entitiesService: EntitiesService,
    public sectionEntitiesService: SectionEntitiesService,
    public common: CommonService,
    public router: Router,
    private cdref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  GoToProjectDetailsPage() {
    this.router.navigateByUrl('/Project-Details1');
  }

  ngAfterContentChecked() {
    this.common.navPosition.next('fixed');
    setTimeout(() => {
      this.common.changeNavColor.next('black');
    }, 50);
    this.cdref.detectChanges();
  }
}
