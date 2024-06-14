import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = {
    userName: '',
    password: '',
  };
  constructor(private router: Router,private apiService: ApiService){}

  onSubmit(): void {
    this.router.navigate(['/user']);
    this.apiService.loginData(this.form).subscribe((res: any) => {
      localStorage.setItem("token",res.name);
       this.router.navigate(['/user']);
    }, err => {
    });
 
  }

}
