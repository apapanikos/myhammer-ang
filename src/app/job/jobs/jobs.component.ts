import { Component, OnInit,Input } from '@angular/core';
import { JobService } from '../job.service';
import { Job } from '../job.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  public jobs : Job [];


  constructor(
    private JobService : JobService 
  ) { }

  ngOnInit() {
    this.JobService.getJobs().subscribe(
    data => { 
      this.jobs = data as Job []
      console.log(data)
    },
    err => console.error(err),
    () => console.log('done loading jobs'));
  }
  onSelected(selection) {
    console.log(selection)
  }

}
