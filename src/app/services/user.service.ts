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
      isActive: true,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repudiandae."
    },
    {
      name: "Alberto García",
      email: "alberto@email.com",
      isActive: false,
      description: "asdfasdfa Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repudiandae."
    },
    {
      name: "Carlos Garrido",
      email: "carlos@email.com",
      isActive: true,
      description: "Lorasdfasdfem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, repudiandae."
    },
  ]

  constructor() { }

  addUser(newUser: User) {
    this.users.push({...newUser});
  }

  toggleActive(email: string) {
    const selectedUser = this.users.find((user) => user.email === email);

    if (selectedUser) {
      selectedUser.isActive = !selectedUser.isActive;
    }
  }

  getUserDetails(email: string) {
    return this.users.find((user) => user.email === email)
  }
}
