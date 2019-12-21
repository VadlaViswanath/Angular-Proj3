import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularNew';
  name:string='Visu Chari';
  hide:boolean=false;

  hide2(){
    this.hide=true;
  }
}
