import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { NewsSectionComponent } from "./components/news-section/news-section.component";
import { LoginComponent } from "./components/login/login.component";


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, NewsSectionComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-project';
}
