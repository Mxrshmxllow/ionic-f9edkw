import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { CalculatorPage } from '../calculator/calculator';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-about',
  templateUrl: 'tabs.html',
  styleUrls:['tabs.css']
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = CalculatorPage;

  constructor() {

  }
}
