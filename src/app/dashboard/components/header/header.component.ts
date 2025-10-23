import { Component, inject } from '@angular/core';

import { ComponentsService } from '../../components.service'; // Importamos el servicio
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../../layouts/navigation.service';

import { SidebarService } from '../../../layouts/sidebar.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  sidebarToggle: boolean = false;
  menuToggle: boolean = false;
  darkMode: boolean = false;
  dropdownOpen: boolean = false;
  notifying: boolean = true;

  toggleUserDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeUserDropdown() {
    this.dropdownOpen = false;
  }
  toggleMenu() {
    this.menuToggle = !this.menuToggle;
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  openNotifications() {
    this.dropdownOpen = true;
    this.notifying = false;
  }

  closeNotifications() {
    this.dropdownOpen = false;
  }

  constructor(private sidebarService: SidebarService, private router: Router) {}

  // Método para alternar el estado del sidebar
  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }

  isDropdownOpen = false;

  toggleDropdown(event: MouseEvent): void {
    event.stopPropagation(); // evita cerrar inmediatamente al hacer clic
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }
  dropdownArea = false;

  logout() {
    // Aquí puedes limpiar el localStorage, cookies, tokens, etc.
    localStorage.clear(); // o lo que uses para manejar sesiones

    // Luego rediriges
    this.router.navigate(['']);
  }
}
