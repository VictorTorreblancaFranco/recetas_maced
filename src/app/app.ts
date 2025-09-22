import { Component } from '@angular/core';
import { Main } from './layout/main/main';  // Importar el componente Main

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Main],  // Importar el componente aquí
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App { }
