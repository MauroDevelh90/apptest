import { Component, OnInit } from '@angular/core';
import { LogService } from '@app/shared/log.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "NGApp";

  constructor(private logService: LogService) {
    this.logService.log('Costruttore del Prj Cmp');
   }

  ngOnInit(): void {
  }

}
