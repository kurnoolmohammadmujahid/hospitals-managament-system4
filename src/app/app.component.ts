import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hospital-management';
  onActivate(event: Event) {
    window.scroll(0, 0);
    // or document.body.scrollTop = 0;
    // or document.querySelector('body').scrollTo(0,0)
  }


  constructor(private primengConfig: PrimeNGConfig,
    public translate: TranslateService,
    ) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
