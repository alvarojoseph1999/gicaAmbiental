import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import * as echarts from 'echarts';
import {
  LucideAngularModule,
  FileIcon,
  UsersIcon,
  BookOpenIcon,
  AwardIcon,
  TrendingUpIcon,
} from 'lucide-angular';

interface Objective {
  id: number;
  title: string;
  description: string;
  icon: any;
  image: string;
}
interface NewsItem {
  id: number;
  title: string;
  summary: string;
  date: string;
  category: string;
  image: string;
  author: string;
}
@Component({
  selector: 'app-objetives',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './objetives.component.html',
  styleUrl: './objetives.component.css',
})
export default class ObjetivesComponent {
  readonly FileIcon = FileIcon;
  leafIcon = 'Leaf';
  usersIcon = 'Users';
  bookOpenIcon = 'BookOpen';
  awardIcon = 'Award';
  trendingUpIcon = 'TrendingUp';
  calendarIcon = 'Calendar';
  userIcon = 'User';
  externalLinkIcon = 'ExternalLink';
  linkedinIcon = 'Linkedin';
  twitterIcon = 'Twitter';
  mailIcon = 'Mail';
  targetIcon = 'Target';
  eyeIcon = 'Eye';
  microscopeIcon = 'Microscope';
  flaskConicalIcon = 'FlaskConical';
  treePineIcon = 'TreePine';
  dropletsIcon = 'Droplets';
  chevronLeftIcon = 'ChevronLeft';
  chevronRightIcon = 'ChevronRight';

  visibleSections: { [key: string]: boolean } = {};
  objectives: Objective[] = [
    {
      id: 1,
      title: 'Conservación de Recursos Hídricos',
      description:
        'Desarrollar tecnologías innovadoras para la purificación y conservación del agua',
      icon: 'Droplets',
      image: 'assets/img/public/gicaunam.png',
    },
    {
      id: 2,
      title: 'Energías Limpias',
      description:
        'Promover el uso de energías renovables y sostenibles en comunidades rurales',
      icon: 'TreePine',
      image: 'assets/img/public/gicaunam.png',
    },
    {
      id: 3,
      title: 'Investigación Científica',
      description:
        'Realizar investigación de vanguardia en biotecnología ambiental',
      icon: 'Microscope',
      image: 'assets/img/public/gicaunam.png',
    },
    {
      id: 4,
      title: 'Innovación Tecnológica',
      description:
        'Crear soluciones tecnológicas para problemas ambientales complejos',
      icon: 'FlaskConical',
      image: 'assets/img/public/gicaunam.png',
    },
  ];
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
}
