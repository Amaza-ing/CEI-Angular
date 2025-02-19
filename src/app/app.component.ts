import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ParentComponent } from "./components/parent/parent.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
