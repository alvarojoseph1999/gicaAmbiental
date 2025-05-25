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

  @Input() isHome: boolean = false;
  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event): void {
  //   const section = document.querySelector('section');
  //   if (section) {
  //     const sectionTop = section.getBoundingClientRect().top;
  //     // Si el top de la sección es negativo (ya se ha desplazado fuera de la vista)
  //     this.isScrolled = sectionTop < 0;
  //   }
  // }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Si se cierra el menú principal, también cierra el submenu
    if (!this.isMobileMenuOpen) {
      this.isSubMenuOpen = false;
    }
  }
  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }
  constructor(private router: Router) {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    this.applyTheme();
  }
  ngOnInit() {
    // Detectar ruta actual y escuchar cambios
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHome = event.urlAfterRedirects === '/' || event.url === '/';
      }
      if (event instanceof NavigationEnd) {
        this.isHomePage =
          event.urlAfterRedirects === '/' ||
          event.urlAfterRedirects === '/home';
      }
    });
    this.checkIfHome(this.router.url);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkIfHome(event.urlAfterRedirects);
      }
    });
  }
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
