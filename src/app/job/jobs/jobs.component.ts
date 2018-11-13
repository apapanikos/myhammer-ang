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

    this.jobs$ = this.JobService.getJobs()

  }

  onSelected(job: Job) {

    this.JobService.shareJobDetails(job)

  }

}
