import { Component, OnInit } from '@angular/core';
import { AnouncementSService } from '../anouncement-s.service';
import { User } from '../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent  implements OnInit {
  selectedTab: string = 'Users';
  constructor(private service:AnouncementSService) { }

  ngOnInit() {}
  Users :User[] =this.service.getUsers().filter((user) =>user.userName != "Houssam");
  getUserAnouncementCount(id:any){
    return this.service.getAnnouncements().filter((anoun)=>anoun.user.id==id).length;
  }
}
