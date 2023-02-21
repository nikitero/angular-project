import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public show:boolean = false;

  showMenu(newState:boolean): void {
    this.show = newState;
  }

}
