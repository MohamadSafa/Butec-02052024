import { Component } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-butec',
  templateUrl: './butec.component.html',
  styleUrls: ['./butec.component.css'],
})
export class ButecComponent {
  constructor(public common: CommonService) {}

  ngOnInit(): void {
    this.common.changeNavColor.next('none');
  }
}
