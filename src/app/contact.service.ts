import { Injectable } from '@angular/core';
interface Contact {
  name?:string;
  phone?:string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts:Contact[];

  constructor() { }
  getContacts(){
    this.contacts = [
      {name:'Directrice', phone:' 06.00.66.00.66'}
      ,{name:'Assistante', phone:' 06.00.66.00.66'}
      ,{name:'Designeur', phone:' 06.00.66.00.66'}
  
    ]
    return this.contacts
  }
}
