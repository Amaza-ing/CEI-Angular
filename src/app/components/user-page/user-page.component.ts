import { Component } from '@angular/core';
import { UserListComponent } from "../user-list/user-list.component";

@Component({
  selector: 'app-user-page',
  imports: [UserListComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
