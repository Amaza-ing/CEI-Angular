import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    {
      name: "María López",
      email: "marialopez@email.com",
      isActive: true
    },
    {
      name: "Alberto García",
      email: "alberto@email.com",
      isActive: false
    },
    {
      name: "Carlos Garrido",
      email: "carlos@email.com",
      isActive: true
    },
  ]

  addUser() {
    const newUser: User = {
      name: "David",
      email: "david@email.com",
      isActive: false
    }

    this.users.push(newUser);
  }

  toggleActive(email: string) {
    const selectedUser = this.users.find((user) => user.email === email);

    if (selectedUser) {
      selectedUser.isActive = !selectedUser.isActive;
    }
  }

  constructor() { }
}
