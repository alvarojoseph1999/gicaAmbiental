import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  Home,
  Users,
  BookOpen,
  Newspaper,
  Phone,
  Plus,
  Edit,
  Trash2,
  Save,
  Eye,
} from 'lucide-angular';

@Component({
  selector: 'app-public-web-admin',
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './public-web-admin.component.html',
  styleUrl: './public-web-admin.component.css',
})
export class PublicWebAdminComponent {
  readonly Home = Home;
  readonly Users = Users;
  readonly BookOpen = BookOpen;
  readonly Newspaper = Newspaper;
  readonly Phone = Phone;
  readonly Plus = Plus;
  readonly Edit = Edit;
  readonly Trash2 = Trash2;
  readonly Save = Save;
  readonly Eye = Eye;

  activeTab = signal('home');

  tabs = [
    { id: 'home', name: 'Inicio', icon: Home },
    { id: 'team', name: 'Equipo', icon: Users },
    { id: 'education', name: 'Educación', icon: BookOpen },
    { id: 'news', name: 'Noticias', icon: Newspaper },
    { id: 'contact', name: 'Contacto', icon: Phone },
  ];

  homeContent = {
    heroTitle: 'Instituto de Investigación Ambiental',
    heroSubtitle:
      'Comprometidos con la investigación y conservación del medio ambiente para un futuro sostenible.',
    stats: {
      researchers: 45,
      projects: 23,
      publications: 156,
      impact: 92,
    },
  };

  teamMembers = [
    {
      id: 1,
      name: 'Dr. María González',
      position: 'Directora de Investigación',
      specialization: 'Cambio Climático',
      email: 'maria.gonzalez@instituto.com',
      publications: 45,
      citations: 1250,
    },
    {
      id: 2,
      name: 'Dr. Carlos Rodríguez',
      position: 'Investigador Senior',
      specialization: 'Biodiversidad Marina',
      email: 'carlos.rodriguez@instituto.com',
      publications: 32,
      citations: 890,
    },
  ];

  researchProjects = [
    {
      id: 1,
      title: 'Impacto del Cambio Climático en Ecosistemas Costeros',
      researcher: 'Dr. María González',
      description:
        'Estudio integral sobre los efectos del calentamiento global en la biodiversidad costera.',
      duration: '24 meses',
      participants: '8 investigadores',
      budget: '$150,000',
      status: 'En progreso',
      publicObjective: 'Comunidad científica y autoridades ambientales',
      requirements: 'Conocimientos básicos en ecología marina',
    },
  ];

  newsArticles = [
    {
      id: 1,
      title: 'Nuevo Descubrimiento en Biodiversidad Marina',
      excerpt:
        'Nuestro equipo ha identificado tres nuevas especies en el ecosistema costero peruano.',
      content: 'Contenido completo del artículo...',
      author: 'Dr. Carlos Rodríguez',
      date: '2024-01-15',
      status: 'Publicado',
    },
  ];

  contactInfo = {
    address: 'Av. Universitaria 1801, San Miguel, Lima, Perú',
    phone: '+51 1 626-2000',
    email: 'contacto@instituto-ambiental.pe',
    schedule: 'Lunes a Viernes: 8:00 AM - 6:00 PM\nSábados: 9:00 AM - 1:00 PM',
    coordinates: '-12.0464, -77.0428',
  };

  addTeamMember() {
    console.log('Agregar nuevo miembro del equipo');
  }

  editTeamMember(member: any) {
    console.log('Editar miembro:', member);
  }

  deleteTeamMember(member: any) {
    if (confirm(`¿Eliminar a ${member.name}?`)) {
      this.teamMembers = this.teamMembers.filter((m) => m.id !== member.id);
    }
  }

  addProject() {
    console.log('Agregar nuevo proyecto');
  }

  editProject(project: any) {
    console.log('Editar proyecto:', project);
  }

  deleteProject(project: any) {
    if (confirm(`¿Eliminar el proyecto "${project.title}"?`)) {
      this.researchProjects = this.researchProjects.filter(
        (p) => p.id !== project.id
      );
    }
  }

  addNews() {
    console.log('Agregar nueva noticia');
  }

  editNews(article: any) {
    console.log('Editar noticia:', article);
  }

  previewNews(article: any) {
    console.log('Vista previa:', article);
  }

  deleteNews(article: any) {
    if (confirm(`¿Eliminar la noticia "${article.title}"?`)) {
      this.newsArticles = this.newsArticles.filter((a) => a.id !== article.id);
    }
  }

  getProjectStatusClass(status: string) {
    switch (status) {
      case 'En progreso':
        return 'bg-blue-100 text-blue-800';
      case 'Completado':
        return 'bg-green-100 text-green-800';
      case 'Pausado':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getNewsStatusClass(status: string) {
    switch (status) {
      case 'Publicado':
        return 'bg-green-100 text-green-800';
      case 'Borrador':
        return 'bg-yellow-100 text-yellow-800';
      case 'Archivado':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  saveChanges() {
    console.log('Guardando cambios...');
    alert('Cambios guardados exitosamente');
  }
}
