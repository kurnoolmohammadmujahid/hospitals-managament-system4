import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiServerService } from '../../services/api-server.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DashboardModule } from '../dashboard/dashboard.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function customHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "../../../../assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
    DashboardModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: customHttpLoader,
        deps: [HttpClient],
      }
    })

  ],
  providers: [
    ApiServerService,
    MessageService
  ]
})

export class LoginModule { }
