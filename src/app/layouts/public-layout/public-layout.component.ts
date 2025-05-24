import { Component } from '@angular/core';
import { NavbarComponent } from '../../public/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-public-layout',
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css',
})
export default class PublicLayoutComponent {}
