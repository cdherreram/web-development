import { Component } from '@angular/core';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /* styles:[`
    p{
      background-color:
    }
  `] */
})

export class AppComponent {
  title = 'miprimerApp';
  name = 'David';
  surname = 'Herrera';
  greeting = '¡Hola! ¿Cómo vas?'
}
