import { Component, OnInit,Input } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../job.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  job$: Observable<Job>


  constructor(
    private JobService : JobService
  ) { }

  ngOnInit() {

    //Call Job Service function to fetch Job Details for a job item
    this.job$ = this.JobService.getJobDetails()
  }

}
