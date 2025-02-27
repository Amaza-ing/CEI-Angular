import { Component } from '@angular/core';
import { UserListComponent } from "../user-list/user-list.component";
import { UserFormComponent } from "../user-form/user-form.component";

@Component({
  selector: 'app-user-page',
  imports: [UserListComponent, UserFormComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
