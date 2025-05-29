import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
  author: string;
}
interface TeamMember {
  id: number;
  name: string;
  position: string;
  specialty: string;
  category: string;
  image: string;
  social: {
    linkedin: string;
    twitter: string;
    email: string;
  };
}
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
  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      Innovación: 'bg-emerald-100 text-emerald-700',
      Colaboración: 'bg-cyan-100 text-cyan-700',
      Reconocimiento: 'bg-blue-100 text-blue-700',
      Educación: 'bg-teal-100 text-teal-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  }

  getStatusColor(status: string): string {
    return status === 'Completado'
      ? 'bg-emerald-600 text-white'
      : 'border-cyan-600 text-cyan-600 bg-transparent';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  news: NewsItem[] = [
    {
      id: 1,
      title:
        'Nueva Tecnología de Purificación de Agua Desarrollada por Nuestro Equipo',
      summary:
        'Investigadores desarrollan un sistema innovador de filtración que reduce contaminantes en un 95%.',
      date: '2024-01-15',
      category: 'Innovación',
      image: 'assets/img/public/medioAmbiente.jpg',
      author: 'Dr. María González',
    },
    {
      id: 2,
      title: 'Convenio Internacional para Investigación en Energías Renovables',
      summary:
        'Se firma acuerdo con universidades europeas para intercambio de conocimientos en energía solar.',
      date: '2024-01-10',
      category: 'Colaboración',
      image: 'assets/img/public/medioAmbiente.jpg',
      author: 'Ing. Carlos Mendoza',
    },
    {
      id: 3,
      title: 'Premio Nacional de Investigación Ambiental 2024',
      summary:
        'Nuestro departamento recibe reconocimiento por contribuciones en conservación de biodiversidad.',
      date: '2024-01-05',
      category: 'Reconocimiento',
      image: 'assets/img/public/medioAmbiente.jpg',
      author: 'Dr. Luis Herrera',
    },
    {
      id: 4,
      title:
        'Estudiantes Presentan Soluciones Innovadoras en Congreso Nacional',
      summary:
        'Proyectos estudiantiles destacan en el Congreso Nacional de Ingeniería Ambiental.',
      date: '2023-12-28',
      category: 'Educación',
      image: 'assets/img/public/medioAmbiente.jpg',
      author: 'Dra. Ana Rodríguez',
    },
  ];

  selectedTeamCategory = 'todos';

  visibleSections: { [key: string]: boolean } = {
    'equipo-trabajo': true,
  };

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Dr. María González',
      position: 'Directora de Investigación',
      specialty: 'Calidad del Agua',
      category: 'senior',
      image: '/assets/images/team/maria-gonzalez.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'maria.gonzalez@universidad.edu',
      },
    },
    {
      id: 2,
      name: 'Ing. Carlos Mendoza',
      position: 'Especialista en Energías Renovables',
      specialty: 'Sistemas Fotovoltaicos',
      category: 'senior',
      image: '/assets/images/team/carlos-mendoza.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'carlos.mendoza@universidad.edu',
      },
    },
    {
      id: 3,
      name: 'Dra. Ana Rodríguez',
      position: 'Investigadora Senior',
      specialty: 'Biotecnología Ambiental',
      category: 'senior',
      image: '/assets/images/team/ana-rodriguez.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'ana.rodriguez@universidad.edu',
      },
    },
    {
      id: 4,
      name: 'Dr. Luis Herrera',
      position: 'Coordinador de Biodiversidad',
      specialty: 'Ecosistemas Marinos',
      category: 'senior',
      image: '/assets/images/team/luis-herrera.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'luis.herrera@universidad.edu',
      },
    },
    {
      id: 5,
      name: 'Msc. Elena Vargas',
      position: 'Investigadora Junior',
      specialty: 'Química Ambiental',
      category: 'junior',
      image: '/assets/images/team/elena-vargas.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'elena.vargas@universidad.edu',
      },
    },
    {
      id: 6,
      name: 'Ing. Roberto Silva',
      position: 'Analista de Datos',
      specialty: 'Modelado Ambiental',
      category: 'junior',
      image: '/assets/images/team/roberto-silva.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'roberto.silva@universidad.edu',
      },
    },
    {
      id: 7,
      name: 'Msc. Patricia López',
      position: 'Especialista en Campo',
      specialty: 'Monitoreo Ambiental',
      category: 'junior',
      image: '/assets/images/team/patricia-lopez.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'patricia.lopez@universidad.edu',
      },
    },
    {
      id: 8,
      name: 'Ing. Diego Morales',
      position: 'Técnico de Laboratorio',
      specialty: 'Análisis Químico',
      category: 'junior',
      image: '/assets/images/team/diego-morales.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'diego.morales@universidad.edu',
      },
    },
    {
      id: 9,
      name: 'Est. Carmen Ruiz',
      position: 'Estudiante de Doctorado',
      specialty: 'Microbiología Ambiental',
      category: 'estudiante',
      image: '/assets/images/team/carmen-ruiz.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'carmen.ruiz@universidad.edu',
      },
    },
    {
      id: 10,
      name: 'Est. Miguel Torres',
      position: 'Estudiante de Maestría',
      specialty: 'Energías Renovables',
      category: 'estudiante',
      image: '/assets/images/team/miguel-torres.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'miguel.torres@universidad.edu',
      },
    },
    {
      id: 11,
      name: 'Est. Sofia Jiménez',
      position: 'Estudiante de Pregrado',
      specialty: 'Ingeniería Ambiental',
      category: 'estudiante',
      image: '/assets/images/team/sofia-jimenez.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sofia.jimenez@universidad.edu',
      },
    },
    {
      id: 12,
      name: 'Est. Andrés Castro',
      position: 'Estudiante de Pregrado',
      specialty: 'Gestión Ambiental',
      category: 'estudiante',
      image: '/assets/images/team/andres-castro.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'andres.castro@universidad.edu',
      },
    },
  ];
  teamCategories = [
    { id: 'todos', label: 'Todos', count: this.teamMembers.length },
    {
      id: 'senior',
      label: 'Investigadores Senior',
      count: this.teamMembers.filter((m) => m.category === 'senior').length,
    },
    {
      id: 'junior',
      label: 'Investigadores Junior',
      count: this.teamMembers.filter((m) => m.category === 'junior').length,
    },
    {
      id: 'estudiante',
      label: 'Estudiantes',
      count: this.teamMembers.filter((m) => m.category === 'estudiante').length,
    },
  ];

  setSelectedTeamCategory(category: string): void {
    this.selectedTeamCategory = category;
  }

  selectCategory(categoryId: string): void {
    this.setSelectedTeamCategory(categoryId);
  }

  getFilteredTeamMembers(): TeamMember[] {
    if (this.selectedTeamCategory === 'todos') return this.teamMembers;
    return this.teamMembers.filter(
      (member) => member.category === this.selectedTeamCategory
    );
  }

  get filteredTeamMembers(): TeamMember[] {
    return this.getFilteredTeamMembers();
  }

  //PARTIR DE AQUI
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
      imagen: 'assets/img/public/ceo.jpg',
      descripcion: 'Líder del equipo',
    },
    {
      nombre: 'Ambienta Ambiental',
      categoria: 'Investigadores',
      imagen: 'assets/img/public/ceo.jpg',
      descripcion: 'Especialista en medio ambiente',
    },
    {
      nombre: 'Carlos Mendoza',
      categoria: 'Profesionales',
      imagen: 'assets/img/public/ceo.jpg',
      descripcion: 'Ingeniero de software',
    },
    {
      nombre: 'María Torres',
      categoria: 'Administrativos',
      imagen: 'assets/img/public/ceo.jpg',
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
