import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LucideAngularModule } from 'lucide-angular';
import { House, MapPin } from 'lucide-angular';

@Component({
  selector: 'app-contact',

  imports: [CommonModule, LucideAngularModule],

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export default class ContactComponent {
  readonly House = House;
  readonly MapPin = MapPin;
  contactInfo = [
    {
      icon: House,
      title: 'Dirección',
      details: [
        'Universidad Nacional de Colombia',
        'Facultad de Ingeniería',
        'Edificio 453, Oficina 201',
        'Ciudad Universitaria, Bogotá',
      ],
    },
    {
      icon: 'Phone',
      title: 'Teléfonos',
      details: [
        'Principal: +57 (1) 316 5000 Ext. 14567',
        'Dirección: +57 300 123 4567',
        'Laboratorio: +57 301 234 5678',
        'Fax: +57 (1) 316 5001',
      ],
    },
    {
      icon: 'Mail',
      title: 'Correos Electrónicos',
      details: [
        'General: info@gica.edu.co',
        'Dirección: direccion@gica.edu.co',
        'Proyectos: proyectos@gica.edu.co',
        'Colaboraciones: colaboraciones@gica.edu.co',
      ],
    },
    {
      icon: 'Clock',
      title: 'Horarios de Atención',
      details: [
        'Lunes a Viernes: 8:00 AM - 5:00 PM',
        'Sábados: 8:00 AM - 12:00 PM',
        'Domingos: Cerrado',
        'Atención virtual 24/7',
      ],
    },
  ];

  officeLocations = [
    {
      name: 'Sede Principal - Bogotá',
      address: 'Ciudad Universitaria, Bogotá',
      coordinates: { lat: 4.6361, lng: -74.0839 },
      type: 'principal',
    },
    {
      name: 'Laboratorio de Campo - Ilo',
      address: 'Ilo, Moquegua, Perú',
      coordinates: { lat: -17.6406, lng: -71.3369 },
      type: 'laboratorio',
    },
  ];
}
