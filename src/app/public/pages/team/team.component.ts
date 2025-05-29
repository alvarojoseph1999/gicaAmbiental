import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  LucideAngularModule,
  FileIcon,
  UsersIcon,
  BookOpenIcon,
  AwardIcon,
  TrendingUpIcon,
  GraduationCap,
  Award,
  Mail,
  Linkedin,
  Twitter,
  ExternalLink,
  Target,
} from 'lucide-angular';

@Component({
  selector: 'app-team',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export default class TeamComponent {
  getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'En ejecución': 'bg-green-100 text-green-700 border-green-200',
      Completado: 'bg-blue-100 text-blue-700 border-blue-200',
      'En planificación': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    };
    return colors[status] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Proyecto Principal':
        'bg-emerald-100 text-emerald-700 border-emerald-200',
      'Colaboración Internacional':
        'bg-purple-100 text-purple-700 border-purple-200',
      'Proyecto Colaborativo': 'bg-cyan-100 text-cyan-700 border-cyan-200',
      'Proyecto Empresarial': 'bg-orange-100 text-orange-700 border-orange-200',
      'Investigación Básica': 'bg-blue-100 text-blue-700 border-blue-200',
    };
    return colors[type] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  featuredResearcher = {
    id: 1,
    name: 'Dra. María Elena González Vásquez',
    position: 'Directora de Investigación en Calidad del Agua',
    image: '/placeholder.svg?height=400&width=300',
    email: 'maria.gonzalez@gica.edu',
    phone: '+57 300 123 4567',
    social: {
      linkedin: 'https://linkedin.com/in/maria-gonzalez',
      twitter: 'https://twitter.com/mariagonzalez_env',
      orcid: '0000-0002-1234-5678',
    },
    education: [
      {
        degree: 'Ph.D. en Ingeniería Ambiental',
        institution: 'Universidad Nacional de Colombia',
        year: '2015',
        thesis:
          'Desarrollo de Tecnologías Avanzadas para la Remoción de Contaminantes Emergentes en Aguas Residuales',
      },
      {
        degree: 'M.Sc. en Química Ambiental',
        institution: 'Universidad de los Andes',
        year: '2010',
        thesis: 'Caracterización de Contaminantes en Fuentes Hídricas Urbanas',
      },
      {
        degree: 'Ingeniera Química',
        institution: 'Universidad Industrial de Santander',
        year: '2008',
        thesis: 'Optimización de Procesos de Tratamiento de Aguas',
      },
    ],
    experience: [
      {
        position: 'Directora de Investigación',
        institution: 'GICA - Universidad Nacional',
        period: '2020 - Presente',
        description:
          'Liderazgo de proyectos de investigación en calidad del agua y desarrollo de tecnologías innovadoras',
      },
      {
        position: 'Investigadora Senior',
        institution: 'Instituto de Investigación de Recursos Biológicos',
        period: '2016 - 2020',
        description:
          'Investigación en biotecnología ambiental y desarrollo de biorreactores',
      },
      {
        position: 'Investigadora Postdoctoral',
        institution: 'MIT - Massachusetts Institute of Technology',
        period: '2015 - 2016',
        description:
          'Investigación en nanotecnología aplicada al tratamiento de aguas',
      },
    ],
    specialties: [
      'Calidad del Agua',
      'Biotecnología Ambiental',
      'Nanotecnología',
      'Tratamiento de Aguas Residuales',
      'Contaminantes Emergentes',
      'Biorreactores',
    ],
    achievements: [
      'Premio Nacional de Investigación Ambiental 2023',
      'Investigadora del Año - Universidad Nacional 2022',
      'Beca Fulbright para investigación en MIT 2015',
      'Mejor Tesis Doctoral - Ingeniería Ambiental 2015',
    ],
    stats: {
      publications: 47,
      citations: 1250,
      hIndex: 18,
      projects: 23,
      students: 15,
      patents: 3,
    },
  };
  statCards = [
    {
      label: 'Publicaciones',
      value: this.featuredResearcher.stats.publications,
      bgClass: 'bg-gradient-to-br from-emerald-50 to-emerald-100',
      textColor: 'text-emerald-600',
    },
    {
      label: 'Citaciones',
      value: this.featuredResearcher.stats.citations,
      bgClass: 'bg-gradient-to-br from-cyan-50 to-cyan-100',
      textColor: 'text-cyan-600',
    },
    {
      label: 'Índice H',
      value: this.featuredResearcher.stats.hIndex,
      bgClass: 'bg-gradient-to-br from-blue-50 to-blue-100',
      textColor: 'text-blue-600',
    },
    {
      label: 'Proyectos',
      value: this.featuredResearcher.stats.projects,
      bgClass: 'bg-gradient-to-br from-purple-50 to-purple-100',
      textColor: 'text-purple-600',
    },
    {
      label: 'Estudiantes',
      value: this.featuredResearcher.stats.students,
      bgClass: 'bg-gradient-to-br from-orange-50 to-orange-100',
      textColor: 'text-orange-600',
    },
    {
      label: 'Patentes',
      value: this.featuredResearcher.stats.patents,
      bgClass: 'bg-gradient-to-br from-teal-50 to-teal-100',
      textColor: 'text-teal-600',
    },
  ];

  researchProjects = [
    {
      id: 1,
      title: 'Desarrollo de Membranas Bioactivas para Purificación de Agua',
      type: 'Proyecto Principal',
      status: 'En ejecución',
      period: '2023 - 2025',
      funding: '$85,000 USD',
      agency: 'COLCIENCIAS',
      description:
        'Investigación y desarrollo de membranas con nanopartículas bioactivas para la remoción eficiente de contaminantes emergentes en aguas residuales urbanas.',
      objectives: [
        'Desarrollar membranas con eficiencia >95% en remoción de contaminantes',
        'Optimizar procesos de síntesis de nanopartículas bioactivas',
        'Evaluar viabilidad económica y ambiental de la tecnología',
      ],
      team: '8 investigadores, 4 estudiantes de doctorado, 6 estudiantes de maestría',
      publications: 5,
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 2,
      title: 'Monitoreo Inteligente de Calidad del Agua en Tiempo Real',
      type: 'Colaboración Internacional',
      status: 'En ejecución',
      period: '2022 - 2024',
      funding: '$120,000 USD',
      agency: 'NSF - MIT',
      description:
        'Desarrollo de sensores IoT para monitoreo continuo de parámetros de calidad del agua en sistemas de distribución urbana.',
      objectives: [
        'Implementar red de sensores IoT en 10 puntos críticos',
        'Desarrollar algoritmos de machine learning para predicción',
        'Crear plataforma web para visualización de datos en tiempo real',
      ],
      team: '12 investigadores (6 internacionales), 3 estudiantes de doctorado',
      publications: 8,
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 3,
      title: 'Biorremediación de Suelos Contaminados con Metales Pesados',
      type: 'Proyecto Colaborativo',
      status: 'Completado',
      period: '2020 - 2022',
      funding: '$65,000 USD',
      agency: 'MinCiencias',
      description:
        'Evaluación de microorganismos nativos para la biorremediación de suelos contaminados con metales pesados en zonas mineras.',
      objectives: [
        'Aislar y caracterizar microorganismos biorremediadores',
        'Evaluar eficiencia de remoción de metales pesados',
        'Desarrollar protocolo de aplicación en campo',
      ],
      team: '6 investigadores, 2 estudiantes de doctorado, 4 estudiantes de maestría',
      publications: 12,
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 4,
      title:
        'Tecnologías Verdes para Tratamiento de Aguas Residuales Industriales',
      type: 'Proyecto Empresarial',
      status: 'Completado',
      period: '2019 - 2021',
      funding: '$95,000 USD',
      agency: 'Sector Privado',
      description:
        'Desarrollo e implementación de tecnologías sostenibles para el tratamiento de aguas residuales en la industria textil.',
      objectives: [
        'Reducir carga contaminante en 80%',
        'Implementar procesos de economía circular',
        'Transferir tecnología al sector industrial',
      ],
      team: '10 investigadores, 3 estudiantes de doctorado, 5 técnicos',
      publications: 7,
      image: '/placeholder.svg?height=200&width=300',
    },
    {
      id: 5,
      title: 'Evaluación de Microplásticos en Ecosistemas Acuáticos',
      type: 'Investigación Básica',
      status: 'En ejecución',
      period: '2024 - 2026',
      funding: '$55,000 USD',
      agency: 'Universidad Nacional',
      description:
        'Estudio integral sobre la presencia, distribución y efectos de microplásticos en ecosistemas acuáticos colombianos.',
      objectives: [
        'Caracterizar microplásticos en 15 cuerpos de agua',
        'Evaluar impacto en biodiversidad acuática',
        'Proponer estrategias de mitigación',
      ],
      team: '5 investigadores, 3 estudiantes de maestría, 2 técnicos',
      publications: 2,
      image: '/placeholder.svg?height=200&width=300',
    },
  ];
}
