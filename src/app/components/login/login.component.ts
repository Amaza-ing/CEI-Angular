import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
username: string = "";
password: string = "";

handleSubmit() {
  console.log("El nombre de usuario es: " + this.username);
  console.log("La contraseña es: " + this.password);
  
  if (this.password === "contraseña") {
    console.log("El usuario se ha logado");
  } else {
    console.log("La contraseña no es correcta");    
  }
}
}
