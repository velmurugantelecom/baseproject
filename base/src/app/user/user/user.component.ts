import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { DomSanitizer } from '@angular/platform-browser';
export interface PeriodicElement {
  userName: string;
  phNo: number;
  email: number;
  id: string;
}


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public dialog: MatDialog, private apiService: ApiService,private sanitizer:DomSanitizer) { }
  displayedColumns: string[] = ['userName', 'phNo', 'email', 'id'];
  userData: any;

  openDialog() {
    const dialogRef = this.dialog.open(UserAddComponent, {
      width: '650px',
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
     
      this.userListData();
    });
  }

  ngOnInit(): void {
    this.userListData();
  }

  userListData(): void {
    this.apiService.getData().subscribe((res: any) => {
      const tempData = [];
      for (let key in res) {
        tempData.push({ ...res[key], id: key })
      }
      this.userData = tempData;
     // this.userData = this.sanitizer.bypassSecurityTrustHtml(tempData);
    })
  }

  deleteData(id: string) {
    this.apiService.deleteData(id).subscribe((res: any) => {
      this.userListData();

    }, err => {
    });
  }

  editData(id: string) {
    const dialogRef = this.dialog.open(UserAddComponent, {
      width: '650px',
      data: id,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userListData();
    });
  }

}



@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html'
})
export class UserAddComponent implements OnInit {
  userData: any;
  vel:any;
  constructor(public dialogRef: MatDialogRef<UserAddComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private apiService: ApiService) {

  }
  userForm = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    phNo: new FormControl(null, [Validators.required,  Validators.minLength(10), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required])
  });


  ngOnInit(): void {
    this.vel='vrl <script>alert("vel")</script>';
    this.userData = this.data;
    if (this.userData) {
      this.userForm.setValue({
        userName: this.data.userName,
        phNo: this.data.phNo,
        email: this.data.email,
      });
    }
  }

  onSubmit(): void {

    if (this.userForm.invalid) {
      return;
    }

    if (this.userForm.status == "VALID") {
      if (this.userData) {
        this.apiService.updateData(this.userForm.value, this.userData.id).subscribe((res: any) => {
          this.dialogRef.close();
          if (res) {
          }
        }, err => {
        });
      }
      else {
        this.apiService.saveData(this.userForm.value).subscribe((res: any) => {
          this.dialogRef.close();
          if (res) {
          }
        }, err => {
        });
      }
    }
    else {
      this.validateAllFormFields(this.userForm);
    }
  }


  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }



}



