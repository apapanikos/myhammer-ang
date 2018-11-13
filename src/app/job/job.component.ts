import { Component, OnInit } from '@angular/core';
import { Job } from './job.interface';
import { JobService } from './job.service';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  providers: [JobService]
})
export class JobComponent implements OnInit {

  //Change grid orientation
  breakpoint: number;
  
  constructor(private JobService: JobService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 2;
  }

   
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 2;
  }
}
