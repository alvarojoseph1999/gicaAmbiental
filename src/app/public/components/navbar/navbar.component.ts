import {
  Component,
  Input,
  OnInit,
  HostListener,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false; // Controla la visibilidad del menú lateral

  isDarkMode = false;
  isMobileMenuOpen = false;
  isSubMenuOpen = false;
  isScrolled = false;
  isHomePage: boolean = false;
  currentRoute = '';
  @Input() isHome: boolean = false;
  constructor(private router: Router) {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.applyTheme();
  }
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.isSubMenuOpen = false;
  }
  @HostListener('window:scroll', [])
  ngOnInit() {
    // Detectar cambios de ruta
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
        this.isHome = event.url === '/' || event.url === '/home';

        // Debug - puedes quitar esto después
        console.log('Current route:', this.currentRoute);
        console.log('Is home:', this.isHome);
        console.log('Is scrolled:', this.isScrolled);
      });

    // Establecer ruta inicial
    this.currentRoute = this.router.url;
    this.isHome = this.currentRoute === '/' || this.currentRoute === '/home';
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
    // Debug - puedes quitar esto después
    console.log('Scroll changed:', this.isScrolled);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }

  // Método para verificar si una ruta está activa
  isRouteActive(route: string): boolean {
    if (route === '/') {
      return this.currentRoute === '/' || this.currentRoute === '/home';
    }
    return (
      this.currentRoute === route || this.currentRoute.startsWith(route + '/')
    );
  }

  // Método para verificar si alguna subruta de "Nosotros" está activa
  isNosotrosActive(): boolean {
    const nosotrosRoutes = [
      '/history',
      '/objetives',
      '/workteam',
      '/collaboration',
    ];
    return nosotrosRoutes.some((route) => this.currentRoute.startsWith(route));
  }
  // Método helper para debug
  getNavbarClasses() {
    return {
      'bg-transparent shadow-2xl': this.isHome && !this.isScrolled,
      'bg-white shadow-md': !this.isHome || this.isScrolled,
    };
  }

  getTextClasses() {
    return {
      'text-white': this.isHome && !this.isScrolled,
      'text-black': !this.isHome || this.isScrolled,
    };
  }
  // checkIfHome(url: string) {
  checkIfHome(url: string) {
    this.isHome = url === '/' || url === '/home';
    this.isHomePage = url === '/' || url === '/home';
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  get navbarClasses() {
    if (this.isScrolled) {
      return 'bg-black shadow-md text-black';
    }
    return this.isHome
      ? 'bg-transparent shadow-2xl'
      : 'bg-white shadow-md top-0';
  }
}
