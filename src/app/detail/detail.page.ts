import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
contact: [];
  constructor(private activatedRoute: ActivatedRoute) {
    let data = this.activatedRoute.params.subscribe((contact) => {
      console.log('Contact: ', contact)
    })
   }

  ngOnInit() {
   

  }

}
