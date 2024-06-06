import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    private auth:AuthService,
    private router:Router
  ) {}

  //khai báo hàm onSubmit, gọi hàm register trong authService
  onSubmit(data: any) {
    this.auth.register(data).subscribe(res => {
      alert('Đăng ký thành công');
      this.router.navigate(['login']);
    }, error => {
      alert(error.error)
    })
  }
}
