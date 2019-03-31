
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {

  currentLang: string;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {

    this.currentLang = this.translate.getDefaultLang();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event);
      this.currentLang = event.lang;
    });
  }

  ngOnDestroy() {
    this.translate.onLangChange.unsubscribe();
  }

  switchLang() {
    this.translate.use(this.currentLang);
  }
}
