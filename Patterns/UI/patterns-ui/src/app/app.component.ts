import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'patterns-ui';

  public navLinks = [
    {
      path: 'delegate',
      label: 'Делегат и Цепочка обязанностей'
    },
    {
      path: '',
      label: 'Другой паттерн'
    }
  ];

}
