import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HoursPage } from '../hours/hours';
import { HomePage } from '../home/home';
import { RegistrationPage } from '../registration/registration';
import { MenuPage } from '../menu/menu';
import { HistoryPage } from '../history/history';
import { MainPage } from '../main/main';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = HoursPage;
  tab4Root = RegistrationPage;
  tab5Root = MenuPage;
  tab6Root = HistoryPage;
  tab7Root = MainPage;
  

  constructor() {

  }
}
