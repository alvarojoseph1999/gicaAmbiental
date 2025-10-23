import { Component, signal } from '@angular/core';
import { DashboardAdminComponent } from '../../admin/pages/dashboard-admin/dashboard-admin.component';
import { HeaderComponent } from '../../admin/components/header/header.component';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import {
  LucideAngularModule,
  Menu,
  X,
  Home,
  Users,
  Database,
  Globe,
  LogOut,
  Leaf,
} from 'lucide-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-layout',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css',
})
export default class AdminLayoutComponent {
  constructor(private router: Router, private http: HttpClient) {}
  readonly Menu = Menu;
  readonly X = X;
  readonly Home = Home;
  readonly Users = Users;
  readonly Database = Database;
  readonly Globe = Globe;
  readonly LogOut = LogOut;
  readonly Leaf = Leaf;

  sidebarOpen = signal(true);
  userMenuOpen = signal(false);

  toggleSidebar() {
    this.sidebarOpen.update((value) => !value);
  }

  toggleUserMenu() {
    this.userMenuOpen.update((value) => !value);
  }
  CerrarSesion() {
    // Aquí puedes limpiar el localStorage, cookies, tokens, etc.
    localStorage.clear(); // o lo que uses para manejar sesiones

    // Luego rediriges
    this.router.navigate(['']);
  }
}
