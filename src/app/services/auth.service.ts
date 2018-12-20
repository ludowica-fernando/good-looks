import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "http://localhost:8080/auth";

  constructor(private http:HttpClient) { }

  login(username, password){
    let loginUser = {username: username, password : password};
    return this.http.post(this.apiUrl, loginUser);
  }
}
