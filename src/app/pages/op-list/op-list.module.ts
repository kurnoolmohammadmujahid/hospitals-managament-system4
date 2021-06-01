import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { OpListRoutingModule } from './op-list-routing.module';
import { OpListComponent } from './op-list.component';
import { PatientIntakeFormComponent } from './patient-intake-form/patient-intake-form.component';
import { TokenIncrementPipe } from '../../pipes/token-increment.pipe';
import { ApiServerService } from '../../services/api-server.service';
import { DashboardModule } from '../dashboard/dashboard.module';
import { PrintDetailsComponent } from './print-details/print-details.component';
import { InputTextModule } from 'primeng/inputtext';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { customHttpLoader } from '../login/login.module';

@NgModule({
  declarations: [
    PatientIntakeFormComponent,
    OpListComponent,
    TokenIncrementPipe,
    PrintDetailsComponent
  ],
  imports: [
    CommonModule,
    OpListRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RippleModule,
    DialogModule,
    ButtonModule,
    TableModule,
    DashboardModule,
    InputTextModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: customHttpLoader,
        deps: [HttpClient],
      }
    })
  ],
  providers: [
    ApiServerService
  ]
})

export class OpListModule { }
