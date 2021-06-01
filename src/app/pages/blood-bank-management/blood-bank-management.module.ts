import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { BloodBankManagementRoutingModule } from './blood-bank-management-routing.module';
import { BloodBankManagementComponent } from './blood-bank-management.component';
import { DonorDetailsFormComponent } from './donor-details-form/donor-details-form.component';
import { ApiServerService } from '../../services/api-server.service';
import { DashboardModule } from '../dashboard/dashboard.module';
import { PrintDonorDetailsComponent } from './print-donor-details/print-donor-details.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    BloodBankManagementComponent,
    DonorDetailsFormComponent,
    PrintDonorDetailsComponent
  ],
  imports: [
    CommonModule,
    BloodBankManagementRoutingModule,
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

export class BloodBankManagementModule { }
