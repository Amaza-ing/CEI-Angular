import { Component, computed, signal } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-flux-control',
  imports: [ChildComponent],
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

  // Signals

  counter = signal(0);

  increment() {
    this.counter.set(this.counter() + 1);
  }

  updateCounter() {
    this.counter.update((number: number) => number + 1);
  }

  price = signal(100);
  quantity = signal(0);
  total = computed(() => this.price() * this.quantity());

  increaseQuantity() {
    this.quantity.set(this.quantity() + 1);
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



