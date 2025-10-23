import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperatura',
  imports: [FormsModule, CommonModule],
  templateUrl: './temperatura.component.html',
  styleUrl: './temperatura.component.css',
})
export class TemperaturaComponent {
  selectedPeriod: string = 'hoy';
  selectedMetric: string = 'radiacion';

  solarStations = [
    {
      id: 1,
      name: 'Lima Norte',
      radiation: 850,
      uvIndex: 9.2,
      status: 'alta',
      efficiency: 92,
    },
    {
      id: 2,
      name: 'Lima Sur',
      radiation: 780,
      uvIndex: 8.5,
      status: 'alta',
      efficiency: 88,
    },
    {
      id: 3,
      name: 'Lima Este',
      radiation: 720,
      uvIndex: 7.8,
      status: 'moderada',
      efficiency: 85,
    },
    {
      id: 4,
      name: 'Lima Oeste',
      radiation: 690,
      uvIndex: 7.2,
      status: 'moderada',
      efficiency: 82,
    },
  ];
}
