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
  mostSoldGameConsole: GameConsole  = this.getMaxY() 
  lessSoldGameConsole: GameConsole = this.getMinY()

  

  constructor(private gameConsoleService: GameConsoleService) {}


  mostSell(){
    let v:number = 0
    let t:GameConsole
    for(let game of this.gameConsoles){
      let y:number = game.sales2017 + game.sales2018

      if(y>v){
        v=y
        t = game
      }
    }
    return t
  }


  lessSell(){
    let v:number = this.gameConsoles[0].sales2017 + this.gameConsoles[0].sales2018
    let t:GameConsole
    for(let game of this.gameConsoles){
      let y:number = game.sales2017 + game.sales2018

      if(y<v){
        v=y
        t = game
      }
    }
    return t
  }

   getMinY() {
    return this.gameConsoles.reduce((lessSold, gameConsole) => gameConsole.sales2017 + gameConsole.sales2018 < lessSold.sales2017 + lessSold.sales2018 ? gameConsole : lessSold, this.gameConsoles[0]);
  }
   getMaxY() {
    return this.gameConsoles.reduce((mostSold, gameConsole) => gameConsole.sales2017 + gameConsole.sales2018 > mostSold.sales2017 + mostSold.sales2018 ? gameConsole: mostSold, this.gameConsoles[0]);
  }
  
  
}
