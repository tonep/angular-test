import { Component, OnInit } from '@angular/core';
import { NewServiceService} from '../new-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent implements OnInit {

  name : string;
  name2 : string;

  constructor(private newservice : NewServiceService) {
    this.name2 = this.newservice.printSomethingElse();
   }

  ngOnInit() {
    this.name = this.newservice.printSomething();
  }

}
