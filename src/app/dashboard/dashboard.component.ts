import { Component, OnInit } from '@angular/core';
import { Mharashaheb } from '../mharashaheb';
import { MharashahebService } from '../mharashaheb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  mharashahebs: Mharashaheb[] = [];

  constructor(private mharashahebService: MharashahebService) { }

  ngOnInit() {
    this.getMharashahebs();
  }

  getMharashahebs(): void {
    this.mharashahebService.getMharashahebs()
      .subscribe(mharashahebs => this.mharashahebs = mharashahebs.slice(1, 5));
  }
}
