import { Component, Input } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-card',
  imports: [NgClass, RouterLink],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input()
  user: User = {
    name: "",
    email: "",
    isActive: false
  }

  constructor(public userService: UserService) {}
}
