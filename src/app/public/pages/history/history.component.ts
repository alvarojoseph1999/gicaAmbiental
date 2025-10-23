import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, Target, Eye } from 'lucide-angular';
interface Project {
  id: number;
  title: string;
  researcher: string;
  category: string;
  description: string;
  status: string;
  duration: string;
  funding: string;
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
interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
}
@Component({
  selector: 'app-history',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export default class HistoryComponent {
  readonly Target = Target;
  readonly Eye = Eye;
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
  projects: Project[] = [
    {
      id: 1,
      title: 'Monitoreo de Calidad del Agua en Ríos Urbanos',
      researcher: 'Dr. María González',
      category: 'Calidad del Agua',
      description:
        'Estudio integral sobre la contaminación de fuentes hídricas en zonas metropolitanas y propuestas de remediación.',
      status: 'En progreso',
      duration: '2023-2025',
      funding: '$45,000',
      image: '/assets/images/water-quality.jpg',
    },
    {
      id: 2,
      title: 'Implementación de Paneles Solares en Comunidades Rurales',
      researcher: 'Ing. Carlos Mendoza',
      category: 'Energías Renovables',
      description:
        'Proyecto piloto para la instalación de sistemas fotovoltaicos en comunidades aisladas.',
      status: 'Completado',
      duration: '2022-2023',
      funding: '$62,000',
      image: '/assets/images/solar-panels.jpg',
    },
    {
      id: 3,
      title: 'Biodegradación de Plásticos con Microorganismos',
      researcher: 'Dra. Ana Rodríguez',
      category: 'Gestión de Residuos',
      description:
        'Investigación sobre el uso de bacterias especializadas para la descomposición de residuos plásticos.',
      status: 'En progreso',
      duration: '2024-2026',
      funding: '$38,000',
      image: '/assets/images/plastic-biodegradation.jpg',
    },
    {
      id: 4,
      title: 'Conservación de Ecosistemas Costeros',
      researcher: 'Dr. Luis Herrera',
      category: 'Biodiversidad',
      description:
        'Estudio sobre la preservación de manglares y su impacto en la biodiversidad marina.',
      status: 'En progreso',
      duration: '2023-2024',
      funding: '$52,000',
      image: '/assets/images/coastal-ecosystems.jpg',
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

  partners: Partner[] = [
    {
      id: 1,
      name: 'EcoTech Solutions',
      logo: 'assets/img/public/medioAmbiente.jpg',
      description: 'Tecnología ambiental avanzada',
    },
    {
      id: 2,
      name: 'Green Energy Corp',
      logo: 'assets/img/public/medioAmbiente.jpg',
      description: 'Energías renovables',
    },
    {
      id: 3,
      name: 'AquaPure Industries',
      logo: 'assets/img/public/medioAmbiente.jpg',
      description: 'Tratamiento de aguas',
    },
    {
      id: 4,
      name: 'BioWaste Management',
      logo: 'assets/img/public/medioAmbiente.jpg',
      description: 'Gestión de residuos',
    },
    {
      id: 5,
      name: 'Conservation Alliance',
      logo: 'assets/img/public/medioAmbiente.jpg',
      description: 'Conservación ambiental',
    },
    {
      id: 6,
      name: 'Sustainable Future Inc',
      logo: 'assets/img/public/medioAmbiente.jpg',
      description: 'Desarrollo sostenible',
    },
  ];
}
