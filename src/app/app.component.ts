import { Component } from '@angular/core'; //import component 
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; //import FormsModule
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//export class TenComponent
export class AppComponent {
  title = 'Thaivm2';
  info = {
    name: 'thaivm2',
    email: 'thaivm2@fpt.edu.vn',
    gender: 'male',
  }
  name='';
  count = 0;
  //khai báo hàm: 
  //khai báo kiểu dữ liệu trả về: tenHam(): kieuDulieu {}
  //ko khai báo kiểu dữ liệu trả về: tenHam() {} 
  countClick(): void {
    this.count = this.count + 1; //tăng giá trị của count lên 1 đơn vị
  }
  listStudents = [
    {
      name: 'thaivm2',
      email: 'thaivm2@fpt.edu.vn',
      gender: 'male',
    },
    {
      name: 'thaivm3',
      email: 'thaivm3@fpt.edu.vn',
      gender: 'male',
    },
    {
      name: 'thaivm4',
      email: 'thaivm4@fpt.edu.vn',
      gender: 'female',
    },
    {
      name: 'thaivm4',
      email: 'thaivm4@fpt.edu.vn',
      gender: 'female',
    }
  ]
}
