import { Component } from '@angular/core';
import {  TestComponent } from "../components/test-component/test.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestComponent],
  template: `<h1>Hello, World!</h1> <test-component />`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
