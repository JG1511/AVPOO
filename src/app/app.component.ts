import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsLoginComponent } from "./pages/forms-login/forms-login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsLoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'atividadePoo';
}
