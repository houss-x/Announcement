import { ChangeDetectorRef, Component } from '@angular/core';
import { Announcement } from '../models/anouncement';
import { AnouncementSService } from '../anouncement-s.service';
import { AlertController } from '@ionic/angular';
import { AnouncementDetailsComponent } from '../anouncement-details/anouncement-details.component';
import { ModalController } from '@ionic/angular';
import { AnnouncementStatus } from '../enum/status';
import { AnouncementAddComponent } from '../anouncement-add/anouncement-add.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(   private router: Router, private changeDetectorRef: ChangeDetectorRef // Auto Detect
,  private modal:ModalController,private announcementService: AnouncementSService,private alertCtrl: AlertController) {}
  UserLoged ="Houssam"
  selectedTab: string = 'Announcement';
  ngOnInit() {
    this.selectedTab = 'Announcement';
    this.cardItems=  this.announcementService.getAnnouncements("Houssam");
  }
  cardItems=  this.announcementService.getAnnouncements("Houssam");
  async deleteAnnouncement(item: Announcement) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Are you sure you want to delete this announcement?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            const index = this.cardItems.findIndex(
              (announcement) => announcement.user === item.user && announcement.title === item.title
            );
          
            if (index !== -1) {
              this.cardItems.splice(index, 1);
            }
          },
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    await alert.present();
  }
  getStatusBadgeColor(status: AnnouncementStatus): string {
    return status === AnnouncementStatus.Published ? 'success' :status === AnnouncementStatus.Draft? 'danger':'warning';
  }
  getStatusBadgeLabel(status: AnnouncementStatus): string {
    return status === AnnouncementStatus.Published ? 'Published' :status === AnnouncementStatus.Draft? 'Draft':'Archived';
  }
  async viewAnnouncement(item: Announcement) {
    const modal = await this.modal.create({
      component: AnouncementDetailsComponent,
      componentProps: {
        announcement: item,
      },
    });
    await modal.present();
  }
  async addAnnouncement() {
    const modal = await this.modal.create({
      component: AnouncementAddComponent,
    });
    await modal.present();
    await modal.onDidDismiss();
    this.changeDetectorRef.detectChanges();
    this.cardItems=  this.announcementService.getAnnouncements("Houssam");
  }
}

 
