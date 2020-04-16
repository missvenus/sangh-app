import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Mharashaheb }         from '../mharashaheb';
import { MharashahebService }  from '../mharashaheb.service';

@Component({
  selector: 'app-mharashaheb-detail',
  templateUrl: './mharashaheb-detail.component.html',
  styleUrls: [ './mharashaheb-detail.component.css' ]
})
export class MharashahebDetailComponent implements OnInit {
  mharashaheb: Mharashaheb;

  constructor(
    private route: ActivatedRoute,
    private mharashahebService: MharashahebService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMharashaheb();
  }

  getMharashaheb(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mharashahebService.getMharashaheb(id)
      .subscribe(mharashaheb => this.mharashaheb = mharashaheb);
  }

  goBack(): void {
    this.location.back();
  }
}
