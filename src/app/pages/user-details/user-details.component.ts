import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { UserService } from '../../services/user.service';
import { User } from '../../models/User';
import { UserCardComponent } from '../../components/user-card/user-card.component';

@Component({
  selector: 'app-user-details',
  imports: [HeaderComponent, UserCardComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  userEmail;
  userDetails?: User;

  constructor(private route: ActivatedRoute, public userService: UserService) {
    this.userEmail = this.route.snapshot.paramMap.get('email');
  }

  ngOnInit(): void {
    this.userDetails = this.userService.getUserDetails(this.userEmail as string);
  }
}
