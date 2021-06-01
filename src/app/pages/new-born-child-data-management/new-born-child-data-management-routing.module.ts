import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBornChildDataDetailsFormComponent } from './new-born-child-data-form/new-born-child-data-form.component';
import { NewBornChildDataManagementComponent } from './new-born-child-data-management.component';
import { PrintBirthDetailsComponent } from './print-birth-details/print-birth-details.component';

const routes: Routes = [
  {
    path: 'new-born-data',
    component: NewBornChildDataManagementComponent
  },
  {
    path: 'new-born-details',
    component: NewBornChildDataDetailsFormComponent
  },
  {
    path: 'print-birth-details/:childId',
    component: PrintBirthDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewBornChildDataManagementRoutingModule { }
