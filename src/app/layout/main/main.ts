import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-main',
  imports: [Footer,Navbar,CommonModule,RouterModule],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

}
