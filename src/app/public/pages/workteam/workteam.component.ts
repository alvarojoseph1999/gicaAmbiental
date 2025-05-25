import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
interface Profesional {
  nombre: string;
  categoria: string;
  imagen: string;
  descripcion: string;
}
@Component({
  selector: 'app-workteam',
  imports: [CommonModule],
  templateUrl: './workteam.component.html',
  styleUrl: './workteam.component.css',
})
export default class WorkteamComponent {
  constructor(private router: Router) {}
  irADetalle() {
    this.router.navigate(['/team']);
  }
  categorias: string[] = [
    'Todos',
    'Direccion',
    'Investigadores',
    'Profesionales',
    'Administrativos',
  ];
  categoriaSeleccionada: string = 'Todos';

  profesionales: Profesional[] = [
    {
      nombre: 'Pepe Peres Pamela',
      categoria: 'Direccion',
      imagen: 'assets/ceo.jpg',
      descripcion: 'Líder del equipo',
    },
    {
      nombre: 'Ambienta Ambiental',
      categoria: 'Investigadores',
      imagen: 'assets/ceo.jpg',
      descripcion: 'Especialista en medio ambiente',
    },
    {
      nombre: 'Carlos Mendoza',
      categoria: 'Profesionales',
      imagen: 'assets/ceo.jpg',
      descripcion: 'Ingeniero de software',
    },
    {
      nombre: 'María Torres',
      categoria: 'Administrativos',
      imagen: 'assets/ceo.jpg',
      descripcion: 'Coordinadora de proyectos',
    },
  ];

  get profesionalesFiltrados(): Profesional[] {
    if (this.categoriaSeleccionada === 'Todos') {
      return this.profesionales;
    }
    return this.profesionales.filter(
      (profesional) => profesional.categoria === this.categoriaSeleccionada
    );
  }

  cambiarCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
  }
}
