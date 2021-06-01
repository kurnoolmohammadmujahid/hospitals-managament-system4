import { Component, OnInit } from '@angular/core';
import { ApiServerService } from 'src/app/services/api-server.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-blood-bank-management',
  templateUrl: './blood-bank-management.component.html',
  styleUrls: ['./blood-bank-management.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class BloodBankManagementComponent implements OnInit {
  products = [];
  bloodGroups: any[];

  constructor(private primengConfig: PrimeNGConfig,
    private apiCall: ApiServerService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getExpensesList();
    this.bloodGroups = [
      { label: "A RhD positive (A+)", value: "A RhD positive (A+)" },
      { label: "A RhD negative (A-)", value: "A RhD negative (A-)" },
      { label: "B RhD positive (B+)", value: "B RhD positive (B+)" },
      { label: "B RhD negative (B-)", value: "B RhD negative (B-)" },
      { label: "O RhD positive (O+)", value: "O RhD positive (O+)" },
      { label: "O RhD negative (O-)", value: "O RhD negative (O-)" },
      { label: "AB RhD positive (AB+)", value: "AB RhD positive (AB+)" },
      { label: "AB RhD negative (AB-)", value: "AB RhD negative (AB-)" }
    ];
  }

  getExpensesList() {
    this.apiCall.getBloodDonationDetails().then(res => {
      this.products = res;
      this.products.reverse();
    });
  }
}
