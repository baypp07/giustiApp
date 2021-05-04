import { ContactService } from './../contact.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  contacts:any;

  constructor(private router:Router, private contactService:ContactService) {}
  showDetail(contact){
    this.router.navigate(['detail'],{state: contact});

  }

  ngOnInit(){
    this.contacts = this.contactService.getContacts();
  }

}
