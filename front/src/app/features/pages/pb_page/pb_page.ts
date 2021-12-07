import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Doctor, PublicServant, Record, Specialize } from '../../../core/services/interfaces';
import { AllServices } from '../../../core/services/service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogDoctor} from '../../components/mat_dialog_doctor/mat_dialog_doctor';
export interface DialogData {
  department: string;
}

/* Home page component */
@Component({
  selector: 'public-servant-page',
  templateUrl: './pb_page.ng.html',
  styleUrls: ['./pb_page.scss']
})
export class PublicServantPage implements OnInit {
  panelOpenState = false;
  title = 'BookIt';
  isLogged = "Log in";
  department!: string;
  total_deaths!: BigInt;
  total_patients!: BigInt; 
  publicServants: PublicServant[] = [];
  records: Record[] = [];
  specializes: Specialize[] = [];


  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: AllServices,
    public dialog: MatDialog) {

  }

  
  ngOnInit() {

    this.service.getPublicServants()
    .subscribe(publicServants => {
      this.publicServants = publicServants;
      console.log(publicServants)
    });

    this.service.getRecords()
    .subscribe(records => {
      this.records = records;
      console.log(records)
    });

    this.service.getSpecializes()
    .subscribe(specializes => {
      this.specializes = specializes;
      console.log(specializes)
    });

    this.route.queryParams.subscribe(
      (params: Params) => {
          if (params['email'] != '') {
              // You are registered and ready to go
              this.isLogged = 'Welcome'
          }
          else  {
              // You have to register first 
          }
      }
    );
  }

  openDialog(publicServants: PublicServant): void {
    const dialogRef = this.dialog.open(MatDialogDoctor, {
      width: '250px',
      data: {department: this.department},
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.department = result;
      console.log(result);
      this.service.updatePublicServantDepartment({email: publicServants.email, department: result}).subscribe();
    });
  }

  deletePb(publicServant: PublicServant) : void {
    this.publicServants = this.publicServants.filter(h => h !== publicServant);
    this.service.deletePublicServantDepartment(publicServant).subscribe();
  }


//   openDialogRecord(records: Record): void {
//     const dialogRef = this.dialog.open(MatDialogDoctor, {
//       width: '250px',
//       data: {total_deaths: this.total_deaths, total_patients: this.total_patients},
//     });
    
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.total_deaths = result.t;
//       console.log(result);
//       this.service.updatePublicServantDepartment({email: publicServant.email, department: result}).subscribe();
//     });
//   }

}