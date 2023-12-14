import { Component } from '@angular/core';
import { Announcement } from '../models/anouncement';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ngOnInit() {
     this.filterAnnouncementsByUser('houssam');
  }
  filteredAnnouncements: Announcement[] = [];
  //must add the Id
   cardItems: Announcement[] = [
    new Announcement('houssam', 'Card 1', 'Subtitle 1', 'Content for card 1'),
    new Announcement('houssam', 'Card 2', 'Subtitle 2', 'Content for card 2'),
    new Announcement('otherUser', 'Card 3', 'Subtitle 3', 'Content for card 3'),
    // Add more announcements with 'houssam' or other user as needed
  ];
  deleteAnnouncement(item: Announcement) {
    const index = this.filteredAnnouncements.findIndex(
      (announcement) => announcement.user === item.user && announcement.title === item.title
    );
  
    if (index !== -1) {
      this.filteredAnnouncements.splice(index, 1);
    }
  }
   
  
  filterAnnouncementsByUser(username: string) {
    this.filteredAnnouncements = this.cardItems.filter((announcement) => announcement.user === username);
  }
  constructor() {}

}
