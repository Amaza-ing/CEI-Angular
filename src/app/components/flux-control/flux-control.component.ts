import { Component } from '@angular/core';

@Component({
  selector: 'app-flux-control',
  imports: [],
  templateUrl: './flux-control.component.html',
  styleUrl: './flux-control.component.css'
})
export class FluxControlComponent {
  condition: boolean = true;
  age: number = 20;

  user: any = {}

  productNames: string[] = ["ordenador", "teclado", "ratón"];

  products: any[] = [
    {
      id: 1,
      name: "Ordenador",
      price: 1000,
      isAvailable: true
    },
    {
      id: 2,
      name: "teclado",
      price: 30,
      isAvailable: true
    },
    {
      id: 3,
      name: "Ratón",
      price: 15,
      isAvailable: false
    },
  ]

  login() {
    this.user = {
      username: "María",
      age: 25
    }
  }
}

// Truthy
// true;
// "sdfasdfa";
// 1234;
// [];
// {};


// Falsy
// false;
// "";
// 0;
// undefined;
// null;
