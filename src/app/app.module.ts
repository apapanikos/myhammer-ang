import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JobComponent} from './job/job.component';
import { JobsComponent } from './job/jobs/jobs.component';
import { JobDetailsComponent } from './job/job-details/job-details.component';
import { JobService } from './job/job.service';

@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    JobsComponent,
    JobDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
