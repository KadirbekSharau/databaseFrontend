import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Disease, Doctor, PublicServant } from '../../../../app/core/services/interfaces';
import { AllServices } from '../../../../app/core/services/service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogDoctor} from '../../components/mat_dialog_doctor/mat_dialog_doctor';
export interface DialogData {
  degree: string;
}

/* Home page component */
@Component({
  selector: 'home-page',
  templateUrl: './home_page.ng.html',
  styleUrls: ['./home_page.scss']
})
export class HomePage implements OnInit {
  panelOpenState = false;
  title = 'BookIt';
  isLogged = "Log in";
  degree!: string;
  doctors: Doctor[] = [];
  diseases: Disease[] = [];


  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: AllServices,
    public dialog: MatDialog) {

  }

  
  ngOnInit() {

    this.service.getDoctors()
    .subscribe(doctors => {
      this.doctors = doctors;
      console.log(doctors)
    });

    this.service.getDiseases()
    .subscribe(diseases => {
      this.diseases = diseases;
      console.log(diseases)
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

  openDialog(doctor: Doctor): void {
    const dialogRef = this.dialog.open(MatDialogDoctor, {
      width: '250px',
      data: {degree: this.degree},
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.degree = result;
      console.log(result);
      this.service.updateDoctorDegree({email: doctor.email, degree: result}).subscribe();
    });
  }

  // openDialogPublicServant(disease: Disease): void {
  //   const dialogRef = this.dialog.open(MatDialogDoctor, {
  //     width: '250px',
  //     data: {pathogen: this.pathogen},
  //   });
    
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.pathogen = result;
  //     console.log(result);
  //     this.service.updatePublicServantDepartment({disease_code: disesase.disease_code, pathogen: disease.email, department: result}).subscribe();
  //   });
  // }

}