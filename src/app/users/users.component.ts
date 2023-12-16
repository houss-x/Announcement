import { Component, OnInit } from '@angular/core';
import { AnouncementSService } from '../anouncement-s.service';
import { User } from '../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent  implements OnInit {
  // the selected tab of user
  selectedTab: string = 'Users';
  constructor(private service:AnouncementSService) { }

  ngOnInit() {}
  // getting the other Users except the logging one
  Users :User[] =this.service.getUsers().filter((user) =>user.userName != "Houssam");
  // getting the count of anouncements by user by User Id
  getUserAnouncementCount(id:any){
    return this.service.getAnnouncements().filter((anoun)=>anoun.user.id==id).length;
  }
}
