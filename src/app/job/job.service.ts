import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from './job.model';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class JobService {

  jobDetailsSubject: Subject<Job> = new Subject()
  jobDetails$: Observable<Job> = this.jobDetailsSubject.asObservable()

  constructor(private http:HttpClient) {
  }
  public getJobs(): Observable<Job[]> {
    return this.http.get('./assets/jobs.json').pipe(map(
       res => {
         console.log(res)
         return res.body as Job[]
       }
    ));
}

//share job details
public shareJobDetails(job: Job){
   this.jobDetailsSubject.next(job)
}

public getJobDetails(): Observable<Job>{
  return this.jobDetails$
}
}
