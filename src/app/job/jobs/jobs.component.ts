import { Component, OnInit,Input } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../job.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  public jobs$ : Observable<Job []>;
  

  constructor(
    private JobService : JobService 
  ) { }

  ngOnInit() {
    
    //Call Job Service function to fetch active job data
    this.jobs$ = this.JobService.getJobs()

  }

  onSelected(job: Job) {

    //On select a job item, call Job Service to share job details for an item
    this.JobService.shareJobDetails(job)

  }

}
