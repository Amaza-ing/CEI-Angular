import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    isActive: new FormControl(false),
  });

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    // this.userForm.valueChanges.subscribe((value) => {
    //   console.log("Cambio detectado: ", value);
    // })
  }

  submitForm() {
    const user: User = this.userForm.value as User;
    this.userService.addUser(user);

    this.userForm.reset();
  }
}
