import { AnnouncementCategory } from "../enum/category";
import { AnnouncementStatus } from "../enum/status";
import { User } from "./User";

export class Announcement {
    Id:number;
    user: User;
    title: string;
    subtitle: string;
    content: string;
    createdAt:Date;
    status:AnnouncementStatus;
    category:AnnouncementCategory;
   // setting the anouncement date as current one and status published
    constructor(Id:number,user: User, title: string, subtitle: string, content: string,category:AnnouncementCategory,createdAt:Date=new Date(),status:AnnouncementStatus=AnnouncementStatus.Published) {
      this.Id=Id;
      this.user = user;
      this.title = title;
      this.subtitle = subtitle;
      this.content = content;
      this.category=category;
      this.createdAt=createdAt;
      this.status=status;
    }
  }
  
  