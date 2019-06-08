import { Injectable } from '@angular/core';

const USERNAME_KEY = 'Username';
const USERID_KEY = 'UserId';
const CARTID_KEY = 'CartId';
const AUTHORITIES_KEY = 'AuthAuthorities';
const TOKEN_KEY = 'AuthToken';

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

  public saveToken(token: string) {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveAuthorities(authorities: string) {
    localStorage.removeItem(AUTHORITIES_KEY);
    localStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (localStorage.getItem(TOKEN_KEY)) {
      JSON.parse(localStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority);
      });
    }

    return this.roles;
  }

  public getAuthority(): string {
    if (this.getToken())
      return this.getAuthorities()[0]['authority'];
  }

  public isAdmin() {
    if (this.getAuthority()) {
      return this.getAuthority() == 'ROLE_ADMIN';
    }
  }

}
