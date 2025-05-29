import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../dashboard/components/sidebar/sidebar.component';
import { HeaderComponent } from '../../dashboard/components/header/header.component';
import { OverlayComponent } from '../../dashboard/components/overlay/overlay.component';

import { SidebarService } from '../sidebar.service';
@Component({
  standalone: true,
  selector: 'app-dashboard-layout',
  imports: [
    SidebarComponent,
    SidebarComponent,
    HeaderComponent,
    CommonModule,
    RouterModule,
    OverlayComponent,
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export default class DashboardLayoutComponent {}
