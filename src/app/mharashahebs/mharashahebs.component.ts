import { Component, OnInit } from '@angular/core';

import { Mharashaheb } from '../mharashaheb';
import { MharashahebService } from '../mharashaheb.service';

@Component({
  selector: 'app-mharashahebs',
  templateUrl: './mharashahebs.component.html',
  styleUrls: ['./mharashahebs.component.css']
})
export class MharashahebsComponent implements OnInit {
  mharashahebs: Mharashaheb[];

  constructor(private mharashahebService: MharashahebService) { }

  ngOnInit() {
    this.getMharashahebs();
  }

  getMharashahebs(): void {
    this.mharashahebService.getMharashahebs()
    .subscribe(mharashahebs => this.mharashahebs = mharashahebs);
  }
}
