import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService } from '../../../services/api-server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-adons-entry-details',
  templateUrl: './patient-adons-entry-details.component.html',
  styleUrls: ['./patient-adons-entry-details.component.scss']
})
export class PatientAdonsEntryDetailsComponent implements OnInit {
  getpatientDetailsForm: FormGroup;
  billingForm: FormGroup
  elem;
  admissionLst: any;
  viewMoreDetailsObj = {
    'patientName': '',
    'admissionId': '',
    'admissionDate': '',
    'admissionTime': '',
    'gender': '',
    'age': '',
    'address': '',
    'symptoms': '',
    'pNumber': '',
    'marritalStatus': '',
    'occupation': '',
    'doctor': '',
    'bedNumber': '',
    'status': '',
    'payment': '',
    'dischargeDateTime': '',
    'charges': null,
    'adons': null
  }
  id: any;
  days: any
  finalAmount: any;
  discount: any;
  paidAmount: any
  errMsg: boolean;
  constructor(@Inject(DOCUMENT) private document: any,
    private fb: FormBuilder,
    private apiCall: ApiServerService,
    private route: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.elem = document.documentElement;
    // this.getAdmissionsList();
  }

  createForm() {
    this.getpatientDetailsForm = this.fb.group({
      admissionId: ['', Validators.required],
    });
    this.billingForm = this.fb.group({
      consultant: ['', Validators.required],
      purpose: ['', Validators.required],
      comments: ['', Validators.required],
      amount: ['', Validators.required],
      date: ['', Validators.required],
      flag: ['', Validators.required],
    });
  }

  getAdmissionsList() {
    this.apiCall.getPatientsList().then(res => {
      this.admissionLst = res;
    });
  }

  getAdmissionData() {
    this.apiCall.getPatientsByAdmissionID(this.getpatientDetailsForm.value.admissionId).then(res => {
      if (res.length > 0) {
        if (res[0].payment == 'Pending') {
          this.showDialog(res[0]);
          this.errMsg = false;
        } else {
          this.errMsg = true;
          this.display = false;
        }
      } else {
        this.errMsg = true;
        this.display = false;
      }
    });
    // for (let obj of this.admissionLst) {
    //   if (obj.admissionId == this.getpatientDetailsForm.value.admissionId) {
    //     this.showDialog(obj);
    //   }
    // }
  }

  display: boolean = false;

  todayCalculation() {
    let d = new Date();
    let datestring = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
    return datestring;
    // 16-5-2015 9:50
  }

  showDialog(showData) {
    this.display = true;
    this.viewMoreDetailsObj.patientName = showData.patientName;
    this.viewMoreDetailsObj.admissionId = showData.admissionId;
    this.viewMoreDetailsObj.admissionDate = showData.admissionDate;
    this.viewMoreDetailsObj.admissionTime = showData.admissionTime;
    this.viewMoreDetailsObj.gender = showData.gender;
    this.viewMoreDetailsObj.age = showData.age;
    this.viewMoreDetailsObj.address = showData.address;
    this.viewMoreDetailsObj.symptoms = showData.symptoms;
    this.viewMoreDetailsObj.pNumber = showData.pNumber;
    this.viewMoreDetailsObj.marritalStatus = showData.marritalStatus;
    this.viewMoreDetailsObj.occupation = showData.occupation;
    this.viewMoreDetailsObj.doctor = showData.doctor;
    this.viewMoreDetailsObj.bedNumber = showData.bedNumber;
    this.viewMoreDetailsObj.status = showData.status;
    this.id = showData.id;
    this.viewMoreDetailsObj.adons = showData.adons ? showData.adons : [];
    this.days = this.datediff(this.parseDate(showData.admissionDate), this.parseDate(this.todayCalculation()));
  }

  parseDate(str) {
    // 16/5/2015 
    // var mdy = str.split('/');
    // return new Date(mdy[2], mdy[0]-1, mdy[1]);
    // 2015-5-16
    let mdy = str.split('-');
    return new Date(mdy[0], mdy[1] - 1, mdy[2]);
  }

  datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }

  calculateTotal() {
    let data = {
      "consultant": "",
      "purpose": "",
      "comments": "",
      "amount": "",
      "date": "",
      "flag": "",
    }
    this.viewMoreDetailsObj.payment = 'Pending';
    data.consultant = this.billingForm.value.consultant;
    data.purpose = this.billingForm.value.purpose;
    data.comments = this.billingForm.value.comments;
    data.amount = this.billingForm.value.amount;
    data.date = this.billingForm.value.date;
    data.flag = this.billingForm.value.flag;
    if (this.viewMoreDetailsObj.adons.length < 1) {
      this.viewMoreDetailsObj.adons = [];
    }
    let existingArr = this.viewMoreDetailsObj.adons;
    existingArr.push(data);
    this.viewMoreDetailsObj.adons = existingArr;
    this.apiCall.updatePatientAdmitDetailsAsDischarge(this.id, this.viewMoreDetailsObj).then(res1 => {
      console.log(res1);
      this.route.navigate(['/patient-management/patient-data'])
    });
  }
}



