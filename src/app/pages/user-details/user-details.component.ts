import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-user-details',
  imports: [HeaderComponent],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
  userEmail;

  constructor(private route: ActivatedRoute) {
    this.userEmail = this.route.snapshot.paramMap.get('email');
  }
}
