import { CommonModule } from '@angular/common';
// import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  LucideAngularModule,
  FileIcon,
  UsersIcon,
  BookOpenIcon,
  AwardIcon,
  TrendingUpIcon,
  LeafIcon,
} from 'lucide-angular';
import { Component, Input, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-card-dashboard',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './card-dashboard.component.html',
  styleUrl: './card-dashboard.component.css',
})
export class CardDashboardComponent {
  // @Input() title!: string;
  // @Input() porcentaje!: number;
  // @Input() chartId!: string;
  // isOpen: boolean = false;

  // toggleDropdown() {
  //   this.isOpen = !this.isOpen;
  // }

  //readonly FileIcon = FileIcon; // puedes cambiarlo por otro si deseas
  @Input() title!: string;
  @Input() porcentaje!: number;
  @Input() chartId!: string;

  constructor(private el: ElementRef, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    // Asegura que el DOM esté renderizado antes de iniciar el gráfico
    setTimeout(() => {
      this.initChart();
      this.cdr.detectChanges();
    });
  }

  initChart() {
    const chartEl = this.el.nativeElement.querySelector(`#${this.chartId}`);
    if (chartEl) {
      chartEl.innerHTML = `<div class="text-gray-500">📊 Gráfico para: ${this.chartId}</div>`;
    } else {
      console.warn('No se encontró el chartId:', this.chartId);
    }
  }
}
