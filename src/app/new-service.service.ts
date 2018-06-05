import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  name : string;
  name2 : string;

  constructor() { }

  printSomething() {
    this.name = "louis";
    return this.name; 
     }

  printSomethingElse() {
    this.name = "notlouis";
    return this.name2;
  }


}
