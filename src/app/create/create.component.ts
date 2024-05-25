import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  apiUrl = 'http://localhost:3000/projects';

  constructor(
    private http:HttpClient,
    private router:Router //sử dụng hàm navigate để redirect website
  ) {}

  onCreate(data: any): void { //data là dữ liệu người dùng nhập vào form
    this.http.post(
      this.apiUrl, 
      data 
    ).subscribe(res => {
      alert('Thêm mới thành công');
      this.router.navigate(['/list']);
    })
  }
}
