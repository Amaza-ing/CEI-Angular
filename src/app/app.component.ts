import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FluxControlComponent } from "./components/flux-control/flux-control.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FluxControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
