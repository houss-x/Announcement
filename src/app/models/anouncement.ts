export class Announcement {
    user: string;
    title: string;
    subtitle: string;
    content: string;
  
    constructor(user: string, title: string, subtitle: string, content: string) {
      this.user = user;
      this.title = title;
      this.subtitle = subtitle;
      this.content = content;
    }
  }
  