import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { DiarioPage } from '../diario/diario';
import { MensagensPage } from '../mensagens/mensagens';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DiarioPage;
  tab3Root = MensagensPage;

  constructor() {

  }
}
