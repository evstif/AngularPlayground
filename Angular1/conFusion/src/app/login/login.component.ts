import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogContent, MatDialogActions } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  user: User;

  ngOnInit() {
    this.user = { remember: false, password: '', username: '' };
  }

  onSubmit() {
    console.log('User: ' + this.user);
    this.dialogRef.close();
  }

}
