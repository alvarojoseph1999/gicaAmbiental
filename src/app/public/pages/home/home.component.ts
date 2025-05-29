import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TeamCardComponent } from '../../../public/components/team-card/team-card.component';

import * as echarts from 'echarts';
import {
  LucideAngularModule,
  FileIcon,
  UsersIcon,
  BookOpenIcon,
  AwardIcon,
  TrendingUpIcon,
} from 'lucide-angular';

interface TeamMember {
  imageUrl: string;
  name: string;
  role: string;
  socialLinks: Array<{
    icon: string;
    url: string;
  }>;
}
interface ResearchData {
  name: string;
  value: number;
  color: string;
}

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
// cambio
@Component({
  selector: 'app-home',
  imports: [CommonModule, TeamCardComponent, RouterModule, LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export default class HomeComponent implements OnInit {
  readonly FileIcon = FileIcon;
  visibleSections: { [key: string]: boolean } = {};
  // Icons
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

  logos = [
    { src: '/assets/logo1.svg', alt: 'Partner 1' },
    { src: '/assets/logo2.svg', alt: 'Partner 2' },
    { src: '/assets/logo3.svg', alt: 'Partner 3' },
    { src: '/assets/logo4.svg', alt: 'Partner 4' },
    { src: '/assets/logo5.svg', alt: 'Partner 5' },
    { src: '/assets/logo6.svg', alt: 'Partner 6' },
    { src: '/assets/logo1.svg', alt: 'Partner 1' }, // repetidos para efecto infinito
    { src: '/assets/logo2.svg', alt: 'Partner 2' },
    { src: '/assets/logo3.svg', alt: 'Partner 3' },
  ];

  // Esto es para el mapa
  researchData: ResearchData[] = [
    { name: 'Calidad del Agua', value: 35, color: '#059669' },
    { name: 'Energías Renovables', value: 28, color: '#0891b2' },
    { name: 'Gestión de Residuos', value: 22, color: '#10b981' },
    { name: 'Biodiversidad', value: 15, color: '#06b6d4' },
  ];

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
  teamMembers: TeamMember[] = [
    {
      imageUrl: 'assets/img/public/Investigador.jpg',
      name: 'James Liam',
      role: 'CEO & Founder',
      socialLinks: [
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://facebook.com',
        },
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://twitter.com',
        },
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://linkedin.com',
        },
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://instagram.com',
        },
      ],
    },
    {
      imageUrl: 'assets/img/public/Investigador.jpg',
      name: 'Rock Sophia',
      role: 'Worker',
      socialLinks: [
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://facebook.com',
        },
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://twitter.com',
        },
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://linkedin.com',
        },
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://instagram.com',
        },
      ],
    },
    {
      imageUrl: 'assets/img/public/Investigador.jpg',
      name: 'Jack Jayden',
      role: 'Worker',
      socialLinks: [
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://facebook.com',
        },
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://twitter.com',
        },
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://linkedin.com',
        },
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://instagram.com',
        },
      ],
    },
    {
      imageUrl: 'assets/img/public/Investigador.jpg',
      name: 'Ava Emma',
      role: 'Worker',
      socialLinks: [
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://facebook.com',
        },
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://twitter.com',
        },
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://linkedin.com',
        },
        {
          icon: '/assets/img/public/facebook.png',
          url: 'https://instagram.com',
        },
      ],
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  stats = [
    { icon: UsersIcon, label: 'Investigadores Activos', value: '24' },
    { icon: BookOpenIcon, label: 'Proyectos en Curso', value: '18' },
    { icon: AwardIcon, label: 'Publicaciones', value: '47' },
    { icon: TrendingUpIcon, label: 'Impacto Ambiental', value: '85%' },
  ];

  // Usa múltiples ViewChildren para diferentes secciones
  @ViewChildren('animElement') animElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.setupAnimations();

    const dom = document.getElementById('container')!;
    const myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false,
    });

    const option = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 10,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
        },
      ],
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
      myChart.resize();
    });
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
