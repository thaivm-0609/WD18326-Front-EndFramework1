import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  //hàm đăng ký
  register = (data: any): Observable<any> => {
    return this.http.post(this.apiUrl+'/register',data);
  }

  //hàm đăng nhập
  login = (data: any): Observable<any> => {
    return this.http.post(this.apiUrl+'/login', data);
  }

  checkAuthUser=():boolean => {
    let valid = false;
    try {
      const userinfo = localStorage.getItem('user');
      if (userinfo !== null) {
        const userObj = JSON.parse(userinfo);
        const token = jwtDecode(userObj?.token); //decode token để lấy thời gian hết hạn
        
        //so sánh thời gian token hết hạn với thời gian hiện tại Date.now()/1000
        //nếu exp lớn hơn->token vẫn còn thời gian sử dụng
        //nếu exp nhỏ hơn->token hết hạn
        if (token.exp as any > Date.now()/1000) {
          valid = true;
        } else {
          valid = false;
        }
      }
    } catch (error) {
      alert(error);
      return false;
    }

    return valid;
  }
}
