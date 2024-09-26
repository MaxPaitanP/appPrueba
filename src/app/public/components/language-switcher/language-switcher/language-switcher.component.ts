import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatSidenavContent} from "@angular/material/sidenav";

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [
    MatButtonToggleGroup,
    MatSidenavContent,
    MatButtonToggle
  ],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.css'
})
export class LanguageSwitcherComponent {

  protected currentLang: string = 'en';
  protected languages: string[] = ['en', 'es'];

  constructor(private translateService: TranslateService) {
    this.currentLang = this.translateService.currentLang;
  }

  useLanguage(language: string){
    this.translateService.use(language);
    this.currentLang = language;
  }

}
