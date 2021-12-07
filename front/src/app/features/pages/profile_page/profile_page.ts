import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/services/interfaces';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AllServices } from '../../../core/services/service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogDoctor } from '../../components/mat_dialog_doctor/mat_dialog_doctor';
/* Users page component */
@Component({
  selector: 'profile-page',
  templateUrl: './profile_page.ng.html',
  styleUrls: ['./profile_page.scss']
})
export class ProfilePage implements OnInit{
  title = 'Profile';
  panelOpenState = false;
  isLogged = "Log in";
  surname!: string;
  total_deaths!: BigInt;
  total_patients!: BigInt; 
  users: User[] = [];


  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: AllServices,
    public dialog: MatDialog) {

  }

  
  ngOnInit() {

    this.service.getUsers()
    .subscribe(users => {
      this.users = users;
      console.log(users)
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

  openDialog(users: User): void {
    const dialogRef = this.dialog.open(MatDialogDoctor, {
      width: '250px',
      data: {surname: this.surname, email: this.surname},
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.surname = result;
      console.log(result);
      this.service.updateUserPhone({
        email: users.email, 
        name: users.name,
        surname: result,
        salary: users.salary,
        phone: users.phone,
        cname: users.cname
}).subscribe();
    });
  }
}