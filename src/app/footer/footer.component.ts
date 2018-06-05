import { Component, OnInit } from '@angular/core';
import { NewServiceService} from '../new-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  name : string;

  constructor(private newservice : NewServiceService) {
}

  ngOnInit() {
    this.name = this.newservice.printBest();
  }

}
