import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AnnouncementCategory } from '../enum/category';
import { AnouncementSService } from '../anouncement-s.service';
import { User } from '../models/User';

@Component({
  selector: 'app-anouncement-add',
  templateUrl: './anouncement-add.component.html',
  styleUrls: ['./anouncement-add.component.scss'],
})
export class AnouncementAddComponent  implements OnInit {
  UserLoged="Houssam"
   categoryMapping: Record<string, number> = {
    General: AnnouncementCategory.General,
    Technology: AnnouncementCategory.Technology,
    RealEstate: AnnouncementCategory.RealEstate,
    Automotive: AnnouncementCategory.Automotive,
    Education: AnnouncementCategory.Education,
    Other: AnnouncementCategory.Other,
  };
  categories: string[] = Object.keys(this.categoryMapping);
  constructor(private anounService:AnouncementSService,private modal:ModalController) { }
  closeModal() {
    this.modal.dismiss();
  }
  onSubmit(formData: any) {
    // Assuming you have a User object for the current user
    const currentUser = new User(1, 'Houssam'); // Replace with your actual user details
    const categoryNumber = this.categoryMapping[formData.category];
    this.anounService.addAnnouncement(
      currentUser,
      formData.title,
      formData.subtitle,
      formData.content,
      categoryNumber
    );

    this.closeModal();
    }

  ngOnInit() {}

}
