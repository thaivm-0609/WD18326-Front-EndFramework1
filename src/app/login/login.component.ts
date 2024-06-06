import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private auth:AuthService, private router:Router) {}

  onSubmit(data: any) {
    this.auth.login(data).subscribe(res => {
      const token = res?.accessToken;
      const email = res?.user.email;
      const userInfo = {token:token,email:email};
      localStorage.setItem('user', JSON.stringify(userInfo));
      alert('Đăng nhập thành công');
      this.router.navigate(['list']);
    }, error => {
      alert(error.error);
    })
  }
}
