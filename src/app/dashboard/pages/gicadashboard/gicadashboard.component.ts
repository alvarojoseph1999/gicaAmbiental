import { CommonModule } from '@angular/common';
import { Component, ViewChild, Input } from '@angular/core';
import { CardDashboardComponent } from '../../components/partial/card-dashboard/card-dashboard.component';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-gicadashboard',
  // imports: [CommonModule, CardDashboardComponent],

  imports: [CommonModule],
  templateUrl: './gicadashboard.component.html',
  styleUrl: './gicadashboard.component.css',
})
export class GicadashboardComponent {
  environmentalData = {
    temperature: { current: 24.5, trend: '+2.3°C', status: 'normal' },
    humidity: { current: 68, trend: '-5%', status: 'alto' },
    airQuality: { current: 85, trend: '+12', status: 'bueno' },
    solarRadiation: { current: 750, trend: '+45 W/m²', status: 'alto' },
    precipitation: { current: 12.5, trend: '-8mm', status: 'bajo' },
    windSpeed: { current: 15.2, trend: '+3.1 km/h', status: 'moderado' },
  };

  teamMembers = [
    { name: 'Dr. María González', role: 'Directora Científica', avatar: 'MG' },
    {
      name: 'Ing. Carlos Mendoza',
      role: 'Especialista en Clima',
      avatar: 'CM',
    },
    { name: 'Dra. Ana Vargas', role: 'Investigadora Senior', avatar: 'AV' },
    { name: 'Tec. Luis Quispe', role: 'Técnico de Campo', avatar: 'LQ' },
  ];

  cards = [
    {
      title: 'Card 1',
      porcentaje: 75,
      chartId: 'chart1',
    },
    {
      title: 'Card 2',
      porcentaje: 60,
      chartId: 'chart2',
    },
    {
      title: 'Card 3',
      porcentaje: 85,
      chartId: 'chart3',
    },
    {
      title: 'Card 4',
      porcentaje: 45,
      chartId: 'chart4',
    },
  ];

  // constructor(private cdr: ChangeDetectorRef) {}

  // ngAfterViewInit() {
  //   this.cdr.detectChanges(); // Forzamos detección de cambios manual
  // }
  // initializeMap(): void {
  //   // const map = new jsVectorMap({
  //   //   selector: this.mapContainer.nativeElement,
  //   //   map: 'world',
  //   //   zoomButtons: false,
  //   //   regionStyle: {
  //   //     initial: {
  //   //       fontFamily: 'Outfit',
  //   //       fill: '#D9D9D9',
  //   //     },
  //   //     hover: {
  //   //       fillOpacity: 1,
  //   //       fill: '#465fff',
  //   //     },
  //   //   },
  //   //   markers: [
  //   //     { name: 'Egypt', coords: [26.8206, 30.8025] },
  //   //     { name: 'United Kingdom', coords: [55.3781, -3.436] },
  //   //     { name: 'United States', coords: [37.0902, -95.7129] },
  //   //   ],
  //   //   markerStyle: {
  //   //     initial: {
  //   //       strokeWidth: 1,
  //   //       fill: '#465fff',
  //   //       fillOpacity: 1,
  //   //       r: 4,
  //   //     },
  //   //     hover: {
  //   //       fill: '#465fff',
  //   //       fillOpacity: 1,
  //   //     },
  //   //     selected: {},
  //   //     selectedHover: {},
  //   //   },
  //   //   onRegionTooltipShow: (tooltip: any, code: string) => {
  //   //     // Muestra un mensaje personalizado solo para Egipto
  //   //     if (code === 'EG') {
  //   //       tooltip.selector.innerHTML = `${tooltip.text()} <b>(Hello Egypt)</b>`;
  //   //     }
  //   //   },
  //   //   onMarkerTooltipShow: (tooltip: any, index: number) => {
  //   //     const marker = tooltip.marker;
  //   //     const markerName = marker.config.name;
  //   //     tooltip.selector.innerHTML = `<strong>${markerName}</strong> - Click for more info`;
  //   //   },
  //   // });
  // }
}
