import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TeamCardComponent } from '../../../public/components/team-card/team-card.component';
@Component({
  selector: 'app-home',
  imports: [CommonModule, TeamCardComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent {
  chartData: any;
  isMobileMenuOpen = false;

  irADetalle() {
    this.router.navigate(['/equipotrabajo']);
  }
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  news = [
    {
      title: "Don't destroy greenery and don’t spoil scenerycenery",
      description:
        'Lorem ipsum dolor sit amet, consectetur  adipiscing elitadipiscing.',
      image: 'assets/img/public/logo_gica.jpg',
    },
    {
      title: 'Is climate change happening faster than expected?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elitasdasd.',
      image: 'assets/img/public/logo_gica.jpg',
    },
    {
      title: 'Top 10 facts about wind farms you didn’t ’t know know know know',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'assets/img/public/logo_gica.jpg',
    },
    {
      title: 'Our goal is to make water available for everyone',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'assets/img/public/logo_gica.jpg',
    },
  ];

  constructor(private router: Router) {}

  // Usa múltiples ViewChildren para diferentes secciones
  @ViewChildren('animElement') animElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.setupAnimations();
  }

  setupAnimations(): void {
    this.animElements.forEach((element) => {
      const animationClass =
        element.nativeElement.getAttribute('data-animation') || '';

      // Agrega la clase inicial para que el elemento esté oculto antes de animarse
      element.nativeElement.classList.add(
        'opacity-0',
        'scale-95',
        'transition-all',
        'duration-500'
      );

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.nativeElement.classList.remove('opacity-0', 'scale-95');
            element.nativeElement.classList.add(animationClass);
            observer.unobserve(entry.target); // Detenemos la observación
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(element.nativeElement);
    });
  }
}
