import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export default class EducationComponent {
  getStatusColor = (estado: string) => {
    const colors: { [key: string]: string } = {
      'En ejecución': 'bg-green-100 text-green-700 border-green-200',
      'Inscripciones abiertas': 'bg-blue-100 text-blue-700 border-blue-200',
      'Próximo inicio': 'bg-yellow-100 text-yellow-700 border-yellow-200',
      'En planificación': 'bg-orange-100 text-orange-700 border-orange-200',
    };
    return colors[estado] || 'bg-gray-100 text-gray-700 border-gray-200';
  };
  getCategoryColor = (categoria: string) => {
    const colors: { [key: string]: string } = {
      'Educación Básica': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'Educación Superior': 'bg-blue-100 text-blue-700 border-blue-200',
      'Educación Profesional':
        'bg-purple-100 text-purple-700 border-purple-200',
      'Educación Comunitaria': 'bg-cyan-100 text-cyan-700 border-cyan-200',
    };
    return colors[categoria] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  educationProjects = [
    {
      id: 1,
      title: 'Programa de Educación Ambiental para Escuelas Rurales',
      researcher: {
        name: 'Dra. Ana Rodríguez',
        image: '/placeholder.svg?height=80&width=80',
        position: 'Coordinadora de Educación Ambiental',
      },
      description:
        'Programa integral de educación ambiental dirigido a estudiantes de primaria y secundaria en comunidades rurales, enfocado en la conservación del agua y manejo de residuos sólidos.',
      publicoObjetivo: 'Estudiantes de 8 a 16 años en zonas rurales',
      duracion: '12 meses (Marzo 2024 - Febrero 2025)',
      participantes: '450 estudiantes, 25 docentes, 15 padres de familia',
      requerimientos: [
        'Aulas con capacidad para 30 estudiantes',
        'Acceso a agua potable',
        'Materiales didácticos reciclables',
        'Transporte para visitas de campo',
      ],
      contacto: {
        email: 'ana.rodriguez@gica.edu',
        telefono: '+57 300 123 4567',
        sitioWeb: 'www.gica.edu/educacion-rural',
      },
      ubicacion: 'Municipios de Cundinamarca',
      categoria: 'Educación Básica',
      estado: 'En ejecución',
      presupuesto: '$25,000 USD',
      image: '/placeholder.svg?height=300&width=400',
    },
    {
      id: 2,
      title: 'Taller de Energías Renovables para Jóvenes Universitarios',
      researcher: {
        name: 'Ing. Carlos Mendoza',
        image: '/placeholder.svg?height=80&width=80',
        position: 'Especialista en Energías Renovables',
      },
      description:
        'Programa de capacitación práctica en diseño e instalación de sistemas solares fotovoltaicos, dirigido a estudiantes universitarios de ingeniería y carreras afines.',
      publicoObjetivo:
        'Estudiantes universitarios de ingeniería (semestres 6-10)',
      duracion: '6 meses (Agosto 2024 - Enero 2025)',
      participantes:
        '80 estudiantes universitarios, 10 instructores especializados',
      requerimientos: [
        'Laboratorio de electrónica',
        'Paneles solares para práctica',
        'Herramientas especializadas',
        'Certificación en seguridad eléctrica',
      ],
      contacto: {
        email: 'carlos.mendoza@gica.edu',
        telefono: '+57 301 234 5678',
        sitioWeb: 'www.gica.edu/energias-renovables',
      },
      ubicacion: 'Campus Universitario Principal',
      categoria: 'Educación Superior',
      estado: 'Inscripciones abiertas',
      presupuesto: '$35,000 USD',
      image: '/placeholder.svg?height=300&width=400',
    },
    {
      id: 3,
      title: 'Diplomado en Gestión Integral de Residuos Sólidos',
      researcher: {
        name: 'Dr. Luis Herrera',
        image: '/placeholder.svg?height=80&width=80',
        position: 'Director de Sostenibilidad',
      },
      description:
        'Programa de formación profesional en gestión integral de residuos sólidos, dirigido a funcionarios públicos, empresarios y líderes comunitarios interesados en implementar sistemas sostenibles.',
      publicoObjetivo:
        'Profesionales del sector público y privado, líderes comunitarios',
      duracion: '4 meses (Septiembre 2024 - Diciembre 2024)',
      participantes:
        '60 profesionales, 8 docentes especializados, 5 expertos internacionales',
      requerimientos: [
        'Aula con capacidad para 70 personas',
        'Equipos audiovisuales',
        'Acceso a planta de tratamiento',
        'Certificación profesional',
      ],
      contacto: {
        email: 'luis.herrera@gica.edu',
        telefono: '+57 302 345 6789',
        sitioWeb: 'www.gica.edu/gestion-residuos',
      },
      ubicacion: 'Centro de Convenciones Universitario',
      categoria: 'Educación Profesional',
      estado: 'Próximo inicio',
      presupuesto: '$45,000 USD',
      image: '/placeholder.svg?height=300&width=400',
    },
    {
      id: 4,
      title: 'Curso de Monitoreo de Calidad del Agua para Comunidades',
      researcher: {
        name: 'Dra. María González',
        image: '/placeholder.svg?height=80&width=80',
        position: 'Especialista en Recursos Hídricos',
      },
      description:
        'Programa de capacitación comunitaria en técnicas básicas de monitoreo de calidad del agua, dirigido a líderes comunitarios y operadores de acueductos rurales.',
      publicoObjetivo: 'Líderes comunitarios, operadores de acueductos rurales',
      duracion: '3 meses (Octubre 2024 - Diciembre 2024)',
      participantes:
        '40 líderes comunitarios, 15 operadores de acueductos, 6 instructores',
      requerimientos: [
        'Laboratorio básico de análisis',
        'Kits de monitoreo portátiles',
        'Acceso a fuentes hídricas',
        'Transporte a comunidades',
      ],
      contacto: {
        email: 'maria.gonzalez@gica.edu',
        telefono: '+57 303 456 7890',
        sitioWeb: 'www.gica.edu/calidad-agua',
      },
      ubicacion: 'Comunidades rurales de la región',
      categoria: 'Educación Comunitaria',
      estado: 'En planificación',
      presupuesto: '$20,000 USD',
      image: '/placeholder.svg?height=300&width=400',
    },
  ];
}
