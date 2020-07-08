import {Component, OnInit} from '@angular/core';
import {DateUtilService} from '../services/date-util.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  output: '';

  constructor(private dateUtilService: DateUtilService,
              private location: Location) {
  }

  ngOnInit(): void {
  }

  onChange(value): void {
    // @ts-ignore
    this.output = this.dateUtilService.getDiffToNow(value);
  }

  goBack(): void {
    this.location.back();
  }
}
