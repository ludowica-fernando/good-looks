import { Injectable } from '@angular/core';

const USERNAME_KEY = 'Username';
const USERID_KEY = 'UserId';
const CARTID_KEY = 'CartId';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private roles: Array<string> = [];

  constructor() { }

  signout() {
    localStorage.clear();
  }

  public saveUsername(username: string) {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return localStorage.getItem(USERNAME_KEY);
  }

  public saveUserId(userId: string) {
    localStorage.removeItem(USERID_KEY);
    localStorage.setItem(USERID_KEY, userId);
  }

  public getUserId(): number {
    return parseInt(localStorage.getItem(USERID_KEY));
  }

  public saveCartId(cartId: string) {
    localStorage.removeItem(CARTID_KEY);
    localStorage.setItem(CARTID_KEY, cartId);
  }

  public getCartId(): number {
    return parseInt(localStorage.getItem(CARTID_KEY));
  }
}
