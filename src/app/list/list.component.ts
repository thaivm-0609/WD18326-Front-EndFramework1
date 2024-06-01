import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  listProjects: any;
  //chuyển sang service nên comment lại
  // apiUrl = 'http://localhost:3000/projects'; //khai báo apiUrl

  constructor(private service:ProjectService) {}

  ngOnInit(): void {
    //cú pháp gửi http request
    //this.HttpClient.method(apiUrl).subscribe( response => {})
    // chuyển sang service nên comment lại
    // this.thaivm2.get(this.apiUrl).subscribe(response => {
    //   this.listProjects = response;
    // })
    // gọi hàm getList ở trong ProjectService
    this.service.getList().subscribe(res => {
      this.listProjects = res;
    })
  }

  onDelete(id: any): void {
    if(confirm('Bạn có chắc không?')) { //popup confirm khi xóa
      // this.thaivm2.delete(this.apiUrl + '/' + id).subscribe(res => {
      //   alert('Xóa thành công');
      //   this.ngOnInit(); //cập nhật lại danh sách project mà ko cần reload lại trang
      // })
      this.service.delete(id).subscribe( res => {
        alert('Xóa thành công');
        this.ngOnInit();
      })
    } 
  }
}
