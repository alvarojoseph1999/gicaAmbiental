import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavbarComponent } from '../../public/components/navbar/navbar.component';
import { FooterComponent } from '../../public/components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

import {
  Router,
  NavigationEnd,
  NavigationStart,
  NavigationError,
} from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-public-layout',
  imports: [NavbarComponent, FooterComponent, RouterOutlet, CommonModule],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.css',
})
export default class PublicLayoutComponent implements OnInit {
  isLoading = false; // Asegurar que inicie en false
  isDashboard: boolean = false;
  isHome: boolean = false;
  navbarHeight: number = 0;
  showNav = true;
  @ViewChild('navbar') navbar: ElementRef | undefined;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const isDashboardRoute =
          event.urlAfterRedirects.startsWith('/dashboard');
        this.showNav = !isDashboardRoute;
        this.isDashboard = isDashboardRoute;
        // Limpiamos las clases primero
        document.body.classList.remove('with-navbar', 'no-navbar');
        // Cambiar clases del body
        if (this.isDashboard) {
          document.body.classList.add('no-navbar');
        } else {
          document.body.classList.add('with-navbar');
        }
      }
    });
  }

  ngOnInit(): void {
    // Establece el estado de carga inicialmente en verdadero
    this.isLoading = true;

    // Escucha los eventos del router para manejar la carga
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if (event instanceof NavigationEnd || event instanceof NavigationError) {
        // Solo desactivamos el loading después de que el contenido se haya cargado
        setTimeout(() => {
          this.isLoading = false;
          this.isDashboard = this.checkIfDashboard();
          this.updateBodyClasses();
        }, 500); // Puedes ajustar el tiempo si es necesario
      }
    });

    // Verifica si estamos en el dashboard para el estado inicial
    this.isDashboard = this.checkIfDashboard();

    // Maneja el estado del navbar en la primera carga
    this.showNav = !this.isDashboard;
    this.updateBodyClasses();

    // Inicializa isHome en el primer renderizado
    this.isHome = this.checkIfHome(window.location.pathname);

    // Luego escucha los cambios de ruta para actualizar isHome
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHome = this.checkIfHome(event.urlAfterRedirects);
      }
    });
    // Calcular la altura del navbar después de que se renderice
    setTimeout(() => {
      this.isLoading = false;
      this.updateBodyClasses(); // Cambiar a false para ocultar el loader
      if (this.navbar) {
        this.navbarHeight = this.navbar.nativeElement.offsetHeight;
      }
    }, 1000);
    // Aquí puedes agregar lógica para detectar si estás en el dashboard, por ejemplo:
    this.isDashboard = this.checkIfDashboard();
  }
  // Método reutilizable para verificar si es home
  checkIfHome(path: string): boolean {
    const cleanPath = path.replace(/\/+$/, ''); // Elimina cualquier slash al final
    return (
      cleanPath === '' || cleanPath === '/home' || cleanPath === '/contact'
    );
  }
  updateBodyClasses() {
    // Solo actualizar clases cuando el loading terminó
    if (!this.isLoading) {
      document.body.classList.remove('with-navbar', 'no-navbar');

      if (this.isDashboard) {
        document.body.classList.add('no-navbar');
      } else {
        document.body.classList.add('with-navbar');
      }
    }
  }
  // Método de ejemplo para determinar si estamos en el Dashboard
  checkIfDashboard(): boolean {
    return window.location.pathname.includes('dashboard');
  }
}
