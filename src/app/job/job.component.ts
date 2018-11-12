import { Component, OnInit } from '@angular/core';
import { Job } from './job.model';
import { JobService } from './job.service';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  providers: [JobService]
})
export class JobComponent implements OnInit {
  
  constructor(private JobService: JobService) { }

  ngOnInit() {

  }

}
