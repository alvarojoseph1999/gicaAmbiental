import {
  Component,
  Input,
  Output,
  EventEmitter,
  type OnInit,
} from '@angular/core';

import { ComponentsService } from '../../components.service';
import { CommonModule, NgClass } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterModule } from '@angular/router'; // <-- Asegúrate de esto
import { NavigationService } from '../../../layouts/navigation.service';
import { SidebarService } from '../../../layouts/sidebar.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  selected: string = '';

  toggleSelected(item: string): void {
    this.selected = this.selected === item ? '' : item;
  }
  // Navega a una subpágina (como ecommerce)
  selectedMenu: string | null = null;

  toggleMenu(menu: string) {
    this.selectedMenu = this.selectedMenu === menu ? null : menu;
  }

  // isSelected(item: string): boolean {
  //   return this.selected === item;
  // }
  isSidebarOpen: boolean = false;

  isSidebarCompact = false; // 👈 modo compacto cuando es true

  constructor(private sidebarService: SidebarService, private router: Router) {
    // this.router.events.subscribe((event) => {
    //   console.log('Router event:', event);
    // });
  }

  ngOnInit(): void {
    this.sidebarService.sidebarState$.subscribe((state) => {
      this.isSidebarCompact = !state; // si el sidebar está cerrado, mostramos solo el logo
    });

    // Detecta la ruta actual incluso después de recargar o navegar directamente
    // this.router.events
    //   .pipe(filter((event) => event instanceof NavigationEnd))
    //   .subscribe((event: any) => {
    //     const currentUrl = event.urlAfterRedirects;

    //     if (currentUrl.includes('/dashboard/gica/principal')) {
    //       this.selected = 'principal';
    //     } else if (
    //       currentUrl === '/dashboard/gica/clima' ||
    //       currentUrl.includes('')
    //     ) {
    //       this.selected = 'clima';
    //     } else if (
    //       currentUrl === '/dashboard/gica/temperatura' ||
    //       currentUrl.includes('')
    //     ) {
    //       this.selected = 'temperatura';
    //     } else {
    //       this.selected = ''; // O el que corresponda
    //     }
    //   });
  }

  page: string = '';
  sidebarToggle: boolean = false;

  // Cambia la selección del menú
  // toggleSelecteds(menu: string): void {
  //   this.selected = this.selected === menu ? '' : menu;
  // }

  // Navega a una subpágina (como ecommerce)
  // navigateToPage(subPage: string): void {
  //   this.page = subPage;

  //   // Aquí podrías redireccionar a otra ruta si usas Angular Router
  //   // this.router.navigate(['/dashboard', subPage]);
  // }
  // irADetalle() {
  //   this.router.navigate(['/dashboard']);
  // }
  // irClima() {
  //   // this.router.navigate(['/clima']);
  //   this.router.navigate(['/dashboard/clima']);
  // }
  // handleClick(menuItem: string): void {
  //   // this.toggleSelecteds(menuItem);
  //   this.selected = menuItem;
  //   switch (menuItem) {
  //     case 'Dashboard':
  //       this.irADetalle();
  //       break;
  //     case 'clima':
  //       this.irClima();
  //       break;
  //     // Agrega más casos si tienes más menús
  //   }
  // }
}
