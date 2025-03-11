import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { UserPageComponent } from "./components/user-page/user-page.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
