import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-collaboration',
  imports: [CommonModule],
  templateUrl: './collaboration.component.html',
  styleUrl: './collaboration.component.css',
})
export default class CollaborationComponent {
  visibleSections = {
    colaboraciones: true,
  };

  collaborations = [
    {
      id: 1,
      institution: 'Universidad Nacional de Colombia',
      type: 'Académica',
      description:
        'Intercambio de investigadores y desarrollo conjunto de proyectos en biotecnología ambiental',
      image: 'assets/img/public/gicaunam.png?height=200&width=300',
      year: '2020-2025',
      status: 'Activa',
    },
    {
      id: 2,
      institution: 'Instituto Tecnológico de Massachusetts (MIT)',
      type: 'Internacional',
      description:
        'Colaboración en investigación de energías renovables y tecnologías limpias',
      image: 'assets/img/public/gicaunam.png?height=200&width=300',
      year: '2022-2027',
      status: 'Activa',
    },
    {
      id: 3,
      institution: 'Ministerio de Ambiente y Desarrollo Sostenible',
      type: 'Gubernamental',
      description:
        'Asesoría técnica en políticas ambientales y monitoreo de calidad del agua',
      image: 'assets/img/public/gicaunam.png?height=200&width=300',
      year: '2021-2024',
      status: 'Activa',
    },
    {
      id: 4,
      institution: 'Fundación ProAves',
      type: 'ONG',
      description:
        'Conservación de biodiversidad y protección de ecosistemas críticos',
      image: 'assets/img/public/gicaunam.png?height=200&width=300',
      year: '2019-2024',
      status: 'Activa',
    },
  ];

  verDetalles(colab: any) {
    console.log('Detalles de colaboración:', colab);
    // Aquí puedes redirigir o abrir modal
  }

  isOpen = false;

  logos = [
    'assets/gicaunam.png',
    'assets/gicaunam.png',
    'assets/gicaunam.png',
    'assets/gicaunam.png',
    'assets/gicaunam.png',
    'assets/gicaunam.png',
    // Agrega más si necesitas
  ];

  toggleAcordeon() {
    this.isOpen = !this.isOpen;
  }
}
