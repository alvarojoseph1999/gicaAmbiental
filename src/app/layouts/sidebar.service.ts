import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  // Usamos BehaviorSubject para almacenar el estado del sidebar
  private sidebarSubject = new BehaviorSubject<boolean>(true); // Inicialmente, el sidebar está cerrado
  sidebarState$ = this.sidebarSubject.asObservable(); // Observable para suscribirse

  // Método para alternar el estado del sidebar
  toggleSidebar(): void {
    const currentState = this.sidebarSubject.value;
    this.sidebarSubject.next(!currentState); // Cambia el estado
  }

  // Método para establecer el estado del sidebar directamente
  setSidebarState(state: boolean): void {
    this.sidebarSubject.next(state);
  }
  constructor() {}
}
