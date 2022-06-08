import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sty="red"
  public msg=""
  title = 'Welcome';
  public greet='';
  public show='';
  two:string='';

  public display1=false;
  public display2=true;

  public color="blue";
  onClick(event:any){
     this.msg="Hello buddy, You've just clicked the button - "+event.type
  }
  fnameValidate(value:any){
     value.length<=10? this.show="Valid" : this.show="Invalid"
  }
}

