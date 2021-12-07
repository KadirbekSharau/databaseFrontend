import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Doctor } from '../../../../app/core/services/interfaces';

export interface DialogData {
    degree: string;
  }

/* Header component */
@Component({
  selector: 'mat-dialog-doctor',
  templateUrl: './mat_dialog_doctor.ng.html',
  styleUrls: ['./mat_dialog_doctor.scss']
})
export class MatDialogDoctor {
    degree!: string
    constructor(
        public dialogRef: MatDialogRef<MatDialogDoctor>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        public dialog: MatDialog,
        ) {}
    
      onNoClick(): void {
        this.dialogRef.close();
      }
}