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
    // selected tab for user view
    this.selectedTab = 'Announcement';
    // update the list on ngOnInit
    this.cardItems=  this.announcementService.getAnnouncements("Houssam");
  }
  cardItems=  this.announcementService.getAnnouncements("Houssam");
  // delete an anouncement by open a alert as popup to confirme the anouncement delete
  async deleteAnnouncement(item: Announcement) {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Are you sure you want to delete this announcement?',
      buttons: [
        {
          // in case of Yes it delete that 
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
   // This line is used to display the alert to the user
    await alert.present();
  }
  // getting the badge color depend on the status of anouncement
  getStatusBadgeColor(status: AnnouncementStatus): string {
    return status === AnnouncementStatus.Published ? 'success' :status === AnnouncementStatus.Draft? 'danger':'warning';
  }
    // getting the status text depend on the status of anouncement
  getStatusBadgeLabel(status: AnnouncementStatus): string {
    return status === AnnouncementStatus.Published ? 'Published' :status === AnnouncementStatus.Draft? 'Draft':'Archived';
  }
  // a function that open a popup with element to view 
  async viewAnnouncement(item: Announcement) {
    const modal = await this.modal.create({
      component: AnouncementDetailsComponent,
      componentProps: {
        announcement: item,
      },
    });
    // open popup
    await modal.present();
  }
  // add new anouncement with current user
  async addAnnouncement() {
    const modal = await this.modal.create({
      component: AnouncementAddComponent,
    });
    // open the popup
    await modal.present();
    //This line waits for the modal to be dismissed and returns a promise
    await modal.onDidDismiss();
    // after closing the popup the list must be updated after detecting a change
    this.changeDetectorRef.detectChanges();
    this.cardItems=  this.announcementService.getAnnouncements("Houssam");
  }
}

 
