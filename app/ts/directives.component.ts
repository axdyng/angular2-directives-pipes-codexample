import { Component } from '@angular/core';

@Component({
    selector: 'dd-child-dir',
    templateUrl: 'app/html/directives.html',
    styleUrls: ['app/css/directives.css']
})
export class ChildDirComponent {
  private switch: boolean = false;
  public team: string[] = ['Prima Aulia Gusta', 'Angeline Tan', 'Curian Lee', 'Junius Sim' ];

  checkLogout(): boolean {
    return false;
  }

  onSwitch(): void {
    this.switch = !this.switch;
  }
}
