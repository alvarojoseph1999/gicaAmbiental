import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gicadashboard',
  imports: [CommonModule],
  templateUrl: './gicadashboard.component.html',
  styleUrl: './gicadashboard.component.css',
})
export class GicadashboardComponent {
  openDropDown: boolean = false;

  // @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  initializeMap(): void {
    // const map = new jsVectorMap({
    //   selector: this.mapContainer.nativeElement,
    //   map: 'world',
    //   zoomButtons: false,
    //   regionStyle: {
    //     initial: {
    //       fontFamily: 'Outfit',
    //       fill: '#D9D9D9',
    //     },
    //     hover: {
    //       fillOpacity: 1,
    //       fill: '#465fff',
    //     },
    //   },
    //   markers: [
    //     { name: 'Egypt', coords: [26.8206, 30.8025] },
    //     { name: 'United Kingdom', coords: [55.3781, -3.436] },
    //     { name: 'United States', coords: [37.0902, -95.7129] },
    //   ],
    //   markerStyle: {
    //     initial: {
    //       strokeWidth: 1,
    //       fill: '#465fff',
    //       fillOpacity: 1,
    //       r: 4,
    //     },
    //     hover: {
    //       fill: '#465fff',
    //       fillOpacity: 1,
    //     },
    //     selected: {},
    //     selectedHover: {},
    //   },
    //   onRegionTooltipShow: (tooltip: any, code: string) => {
    //     // Muestra un mensaje personalizado solo para Egipto
    //     if (code === 'EG') {
    //       tooltip.selector.innerHTML = `${tooltip.text()} <b>(Hello Egypt)</b>`;
    //     }
    //   },
    //   onMarkerTooltipShow: (tooltip: any, index: number) => {
    //     const marker = tooltip.marker;
    //     const markerName = marker.config.name;
    //     tooltip.selector.innerHTML = `<strong>${markerName}</strong> - Click for more info`;
    //   },
    // });
  }
}
