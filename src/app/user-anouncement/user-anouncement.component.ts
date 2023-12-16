import { Component, OnInit } from '@angular/core';
import { AnouncementSService } from '../anouncement-s.service';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementStatus } from '../enum/status';
import { AnnouncementCategory } from '../enum/category';

@Component({
  selector: 'app-user-anouncement',
  templateUrl: './user-anouncement.component.html',
  styleUrls: ['./user-anouncement.component.scss'],
})
export class UserAnouncementComponent  implements OnInit {

  constructor(private route: ActivatedRoute,private service:AnouncementSService) { }
  announcements:any;
  userId:any;
  ngOnInit() {
    // getting the Passed Id in URl for getting anouncements of the choosen user 
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    // getting anouncement by user Id
    this.announcements=this.service.getAnnouncements().filter((anouncement)=>anouncement.user.id.toString()==this.userId);
  }
  getStatusIcon(status: AnnouncementStatus): string {
    // Map AnnouncementStatus to Ionicons, note that AnnouncementCategory is Enum
    switch (status) {
      case AnnouncementStatus.Draft:
        return 'document-outline';
      case AnnouncementStatus.Published:
        return 'checkmark-circle-outline';
      case AnnouncementStatus.Archived:
        return 'archive-outline';
      default:
        return '';
    }
  }
  getStatusLabel(status: AnnouncementStatus): string {
    // Map AnnouncementStatus to Ionicons, note that AnnouncementCategory is Enum
    switch (status) {
      case AnnouncementStatus.Draft:
        return 'Draft';
      case AnnouncementStatus.Published:
        return 'Published';
      case AnnouncementStatus.Archived:
        return 'Archived';
      default:
        return '';
    }
  }
  //getting the category item note that AnnouncementCategory is Enum
  getCategoryLabel(category: AnnouncementCategory): string {
    switch (category) {
      case AnnouncementCategory.General:
        return 'General';
      case AnnouncementCategory.Technology:
        return 'Technology';
      case AnnouncementCategory.RealEstate:
        return 'Real Estate';
      case AnnouncementCategory.Automotive:
        return 'Automotive';
      case AnnouncementCategory.Education:
        return 'Education';
      case AnnouncementCategory.Other:
        return 'Other';
      default:
        return 'Unknown';
    }
  }
  
}
