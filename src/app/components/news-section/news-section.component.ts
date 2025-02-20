import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-news-section',
  imports: [],
  templateUrl: './news-section.component.html',
  styleUrl: './news-section.component.css'
})
export class NewsSectionComponent implements DoCheck{
  newsSectionTitle: string = "Las Noticias más Novedosas!";
  pageNumber: number = 100;
  hasAnyImage: boolean = false;
  newsId: string = "news-id";
  text: string = "";

  languages: string[] = ["Español", "Inglés", "Francés"];

  product: any = {
    name: "Ordenador",
    price: 1000,
    isForSale: true
  }

  ngDoCheck(): void {
    console.log("Ha habido cambios en alguna variable");    
  }

  sayHello() {
    console.log("Hola que tal!");
    this.newsSectionTitle = "Hola Hola!"
    
    return "Hola a todos!";
  }

  addOneToPages() {
    this.pageNumber += 1;
  }

  substractOneToPages() {
    this.pageNumber -= 1;
  }

  changeText(e: Event) {
    const inputElement = e.target as HTMLInputElement;
    console.log(inputElement.value);
    this.text = inputElement.value;
  }
}