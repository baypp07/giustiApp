import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contacts = [
    {name:'Directrice', phone:' 06.00.66.00.66'}
    ,{name:'Assistante', phone:' 06.00.66.00.66'}
    ,{name:'Designeur', phone:' 06.00.66.00.66'}

  ]

  constructor(private router:Router) {}
  showDetail(contact){
    this.router.navigate(['detail'],contact);

  }

}
