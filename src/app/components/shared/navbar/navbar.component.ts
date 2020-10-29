import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( public translate: TranslateService ) { }

  ngOnInit() {
  }

  switchLang(lang) {
    document.querySelector('span.active').classList.remove('active');
    document.querySelector(`[data-lang="${lang}"`).classList.add('active');
    this.translate.use(lang);
  }

}
