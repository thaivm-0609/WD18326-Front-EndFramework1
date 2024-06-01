import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiUrl = 'http://localhost:3000/projects';

  constructor(private http:HttpClient) {}

  //hàm lấy danh sách dự án
  getList() {
    return this.http.get(this.apiUrl);
  }

  //hàm lấy thông tin chi tiết
  getDetail(id: any) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  //hàm thêm mới
  create(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  //hàm sửa
  edit(id: any, data: any) {
    return this.http.put(this.apiUrl+'/'+id,data);
  }

  //hàm xóa
  delete(id: any) {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
