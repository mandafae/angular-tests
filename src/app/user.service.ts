import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  isLoggedIn: <boolean> false;
  user = {
    name: <string> 'Janet'
  }

  constructor() { }

}
