import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']
})
export class AppComponent {
  // Your TypeScript logic goes here
  constructor(){
    console.dump({
      hola:'amigos'
    });
  }
  onPageLoaded(){
    console.dump({
      hola:'amigos'
    });
  }
}
