import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  language: FormGroup;
  elem;

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  constructor(public translate: TranslateService,
    private fb: FormBuilder,
    @Inject(DOCUMENT) private document: any) {
  }

  ngOnInit(): void {
    this.elem = document.documentElement;

    this.language = this.fb.group({
      lang: [this.translate.currentLang]
    });
    // this.language.patchValue({ 'lang': this.translate.currentLang })
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
  }

}
