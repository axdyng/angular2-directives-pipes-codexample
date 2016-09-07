import { Component } from '@angular/core';

@Component({
    selector: 'dd-pipes',
    templateUrl: 'app/html/pipes.html',
    styles: [`
      .pipes {
        margin: 30px;
      }
      .customPipes {
        background-color: black;
        color: white;
      }
      div {
        margin: 20px;
        padding: 20px;
      }
    `]
})
export class PipesComponent {
  myString: string = 'hello wdi4';
  myDate = new Date();

  // THESE ARE FOR CUSTOM PIPES SECTION
  team: any[] = [
    {name: 'Prima', grayhair: true},
    {name: 'Angeline', grayhair: false},
    {name: 'Curian', grayhair: false},
    {name: 'Junius', grayhair: false},
  ];

  isGray(): void {
    for (let obj of this.team) {
      obj.grayhair = !obj.grayhair
    }
  }
}
