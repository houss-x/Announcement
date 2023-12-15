import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Announcement } from '../models/anouncement';
import { AnnouncementStatus } from '../enum/status';
import { AnnouncementCategory } from '../enum/category';

@Component({
  selector: 'app-anouncement-details',
  templateUrl: './anouncement-details.component.html',
  styleUrls: ['./anouncement-details.component.scss'],
})
export class AnouncementDetailsComponent  implements OnInit {
  @Input()
  announcement!: Announcement;

  constructor(private modal:ModalController) { }
  closeModal() {
    this.modal.dismiss();
  }
  getAnnouncementCategoryLabel(category: AnnouncementCategory): string {
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
        return '';
    }
  }

  getAnnouncementStatusLabel(status: AnnouncementStatus): string {
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

  ngOnInit() {}

}
