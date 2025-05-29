import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SidebarService } from '../../../layouts/sidebar.service';
@Component({
  selector: 'app-overlay',
  imports: [CommonModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.css',
})
export class OverlayComponent {
  sidebarVisible: boolean = true; // Ejemplo de una propiedad

  cerrarSidebar() {
    this.sidebarVisible = false;
  }
}
