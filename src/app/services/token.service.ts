import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  private iss = {
    login: 'https://serve-ecom.herokuapp.com/api/login',
    signup: 'https://serve-ecom.herokuapp.com/api/signup'
  };

  constructor() { }

  handle(token) {
    this.set(token);
  }

  set(token) {
    localStorage.setItem('token', token);
  }
  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  isValid() {

    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}
