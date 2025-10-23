import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Importa FormsModule

@Component({
  selector: 'app-clima',
  imports: [CommonModule, FormsModule],
  templateUrl: './clima.component.html',
  styleUrl: './clima.component.css',
})
export class ClimaComponent {
  selectedStation: string = 'todas';
  dateRange: string = '24h';

  climateStations = [
    {
      id: 1,
      name: 'Lima Centro',
      temp: 22.5,
      humidity: 75,
      status: 'activa',
      lat: -12.0464,
      lon: -77.0428,
    },
    {
      id: 2,
      name: 'Callao',
      temp: 21.8,
      humidity: 78,
      status: 'activa',
      lat: -12.0566,
      lon: -77.1181,
    },
    {
      id: 3,
      name: 'San Isidro',
      temp: 23.2,
      humidity: 72,
      status: 'activa',
      lat: -12.0988,
      lon: -77.0347,
    },
    {
      id: 4,
      name: 'Miraflores',
      temp: 22.9,
      humidity: 74,
      status: 'mantenimiento',
      lat: -12.1211,
      lon: -77.0282,
    },
    {
      id: 5,
      name: 'Barranco',
      temp: 23.1,
      humidity: 76,
      status: 'activa',
      lat: -12.1404,
      lon: -77.0196,
    },
  ];

  get filteredStations() {
    return this.selectedStation === 'todas'
      ? this.climateStations
      : this.climateStations.filter(
          (station) => station.id.toString() === this.selectedStation
        );
  }
}
