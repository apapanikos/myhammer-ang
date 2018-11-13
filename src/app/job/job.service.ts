import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from './job.interface';
import { Observable, Subject } from 'rxjs';
import { map,filter } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})

export class JobService {

  jobDetailsSubject: Subject<Job> = new Subject()
  jobDetails$: Observable<Job> = this.jobDetailsSubject.asObservable()

  constructor(private http:HttpClient) {
  }
  public getJobs(): Observable<Job[]> {
    return this.http.get('./assets/jobs.json').pipe(
      map(
        //Filter and get only active jobs
       res => 
         res['body'].filter(active => active.state === "active") as Job[]
       
      )
    );
    
}

//share job details
public shareJobDetails(job: Job){
   this.jobDetailsSubject.next(job)
}

public getJobDetails(): Observable<Job>{
  return this.jobDetails$
}

}
