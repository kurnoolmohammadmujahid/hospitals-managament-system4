import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ApiServerService } from '../../services/api-server.service';
import { DashboardModule } from '../dashboard/dashboard.module';
import { NewBornChildDataDetailsFormComponent } from './new-born-child-data-form/new-born-child-data-form.component';
import { NewBornChildDataManagementRoutingModule } from './new-born-child-data-management-routing.module';
import { NewBornChildDataManagementComponent } from './new-born-child-data-management.component';
import { PrintBirthDetailsComponent } from './print-birth-details/print-birth-details.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    NewBornChildDataManagementComponent,
    NewBornChildDataDetailsFormComponent,
    PrintBirthDetailsComponent
  ],
  imports: [
    CommonModule,
    NewBornChildDataManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RippleModule,
    DialogModule,
    ButtonModule,
    TableModule,
    DashboardModule,
    InputTextModule
  ],
  providers: [
    ApiServerService
  ]
})

export class NewBornChildDataManagementModule { }
