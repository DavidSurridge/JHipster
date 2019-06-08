import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#BugTrackerJHipsterRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#BugTrackerJHipsterCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#BugTrackerJHipsterLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#BugTrackerJHipsterDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#BugTrackerJHipsterTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#BugTrackerJHipsterEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#BugTrackerJHipsterJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#BugTrackerJHipsterJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BugTrackerJHipsterEntityModule {}
