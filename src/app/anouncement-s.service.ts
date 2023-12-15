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
    new User(1, 'Mohamed'),
    new User(1, 'Ahmed'),
    new User(1, 'Hichem')
  ];
  private Anouncement: Announcement[] = [
    new Announcement(this.Users[0], 'Exploring TypeScript Features', 'TypeScript Deep Dive', 'In this blog post, we will explore some advanced features of TypeScript.',1,new Date(),AnnouncementStatus.Published),
    new Announcement(this.Users[0], 'Building a RESTful API with Node.js', 'Node.js Backend Development', 'Learn how to build a robust RESTful API using Node.js and Express.',3,new Date(2023, 4, 12),AnnouncementStatus.Draft),
    new Announcement(this.Users[1], 'Introduction to React Hooks', 'React.js Frontend Development', 'Discover the power of React Hooks and how they can simplify your React component logic.',2,new Date(2023, 1, 12),AnnouncementStatus.Published),
    new Announcement(this.Users[2], 'Introduction to Django', 'Django Frontend Development', 'Discover the power of Python and how they can simplify your django app.',4,new Date(2023, 4, 12),AnnouncementStatus.Archived),
  ];
  private UserItems : User[]=[new User(1, 'Houssam'),new User(1, 'Ahmed'),new User(1, 'Hichem')]

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

    const newAnnouncement = new Announcement(user, title, subtitle, content, category);
    this.Anouncement.push(newAnnouncement);
    console.log(this.Anouncement);

  }
  constructor() { }
}
