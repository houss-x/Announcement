import { Injectable } from '@angular/core';
import { Announcement } from './models/anouncement';
import { User } from './models/User';
import { AnnouncementStatus } from './enum/status';

@Injectable({
  providedIn: 'root'
})
export class AnouncementSService {
  private Users: User[] = [
    new User(1, 'Houssam'),
    new User(2, 'Mohamed'),
    new User(3, 'Ahmed'),
    new User(4, 'Hichem')
  ];
  private Anouncement: Announcement[] = [
    new Announcement(
      1,
      this.Users[0],
      'Exciting Developments in Technology!','Technology',
      'Stay tuned for the latest advancements in technology. We have some exciting news to share with you!',
      2,
      new Date(),
      AnnouncementStatus.Published
    ),
    new Announcement(
      2,
      this.Users[0],
      'Upcoming Real Estate Opportunities','market',
      'Explore new opportunities in the real estate market. Join us for an exclusive preview of upcoming projects.',
      3,
      new Date(),
      AnnouncementStatus.Draft
    ),
    new Announcement(
      3,
      this.Users[0],
      'Exclusive Automotive Deals Await You','luxury',
      'Discover exclusive deals on luxury automobiles. Don\'t miss out on these limited-time offers!',
      4,
      new Date(),
      AnnouncementStatus.Archived
    ),
    new Announcement(4,this.Users[1], 'Introduction to React Hooks', 'React.js Frontend Development', 'Discover the power of React Hooks and how they can simplify your React component logic.',2,new Date(2023, 1, 12),AnnouncementStatus.Draft),
    new Announcement(5,this.Users[1], 'Car Sale', 'Salling a car', 'Marcedes AMG',2,new Date(2023, 1, 12),AnnouncementStatus.Published),
    new Announcement(6,this.Users[2], 'Introduction to Django', 'Django Frontend Development', 'Discover the power of Python and how they can simplify your django app.',4,new Date(2023, 4, 12),AnnouncementStatus.Archived),
  ];

  getAnnouncements(userName?: string): Announcement[] {
    if (userName) {
      // Filter the announcements based on the userName
      return this.Anouncement.filter((announcement) => announcement.user.userName === userName);
    } else {
      // Return all announcements when userName is not provided
      return this.Anouncement;
    }
  }
  getUsers(): User[] {
      return this.Users;
  }
  
  addAnnouncement(user: User, title: string, subtitle: string, content: string, category: number): void {
    const newAnnouncement = new Announcement(this.Anouncement.length++,user, title, subtitle, content, category);
    this.Anouncement.push(newAnnouncement);
  }
  constructor() { }
}
