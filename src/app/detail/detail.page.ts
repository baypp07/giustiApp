import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  name:string;
  phone:string;

  // constructor(public navParams: NavParams) {
  // let data = this.navParams.data;
  // console.log(data);
  
  constructor(private route: ActivatedRoute){


    }
  

  ngOnInit() {
    this.phone = this.route.snapshot.paramMap.get('phone');
    this.name = this.route.snapshot.paramMap.get('name');
    console.log(this.phone);
   

  }

}
