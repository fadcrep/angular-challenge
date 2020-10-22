import { Component } from '@angular/core'
import { GameConsole } from './game-console.interface'
import { GameConsoleService } from './services/game-console.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'Angular Challenge'
  timesMoreFun = 2 + 2

  gameConsoles: GameConsole[] = this.gameConsoleService.list()
  mostSoldGameConsole: GameConsole  = this.gameConsoles.reduce((mostSold, gameConsole) => gameConsole.sales2017 + gameConsole.sales2018 > mostSold.sales2017 + mostSold.sales2018 ? gameConsole: mostSold, this.gameConsoles[0])
  lessSoldGameConsole: GameConsole = this.gameConsoles.reduce((lessSold, gameConsole) => gameConsole.sales2017 + gameConsole.sales2018 < lessSold.sales2017 + lessSold.sales2018 ? gameConsole : lessSold, this.gameConsoles[0])


  constructor(private gameConsoleService: GameConsoleService) {}

  
}
