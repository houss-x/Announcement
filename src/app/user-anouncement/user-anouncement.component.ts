import { Component, OnInit } from '@angular/core';
import { AnouncementSService } from '../anouncement-s.service';

@Component({
  selector: 'app-user-anouncement',
  templateUrl: './user-anouncement.component.html',
  styleUrls: ['./user-anouncement.component.scss'],
})
export class UserAnouncementComponent  implements OnInit {

  constructor(private service:AnouncementSService) { }
  userAnouncement:any;
  ngOnInit() {
    this.userAnouncement=this.service.getAnnouncements().filter((anouncement)=>anouncement.user.id==3);
  }

}
