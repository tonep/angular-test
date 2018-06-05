import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  name : string;
  name2 : string;
  name3 : string;

  constructor() { }

  printSomething() {
    this.name = "louis";
    return this.name; 
     }

  printSomethingElse() {
    this.name = "notlouis";
    return this.name2;
  }

  printBest() {
    this.name = "NgWA";
    return this.name3;
  }


}
