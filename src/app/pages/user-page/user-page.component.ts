import { Component } from '@angular/core';
import { UserListComponent } from '../../components/user-list/user-list.component';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-user-page',
  imports: [UserListComponent, UserFormComponent, HeaderComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
