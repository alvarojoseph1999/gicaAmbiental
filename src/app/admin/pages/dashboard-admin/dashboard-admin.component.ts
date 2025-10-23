import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  Users,
  Database,
  Globe,
  TrendingUp,
  Leaf,
  Sun,
  CloudRain,
  Wind,
} from 'lucide-angular';
@Component({
  selector: 'app-dashboard-admin',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css',
})
export class DashboardAdminComponent {
  readonly Users = Users;
  readonly Database = Database;
  readonly Globe = Globe;
  readonly TrendingUp = TrendingUp;
  readonly Leaf = Leaf;
  readonly Sun = Sun;
  readonly CloudRain = CloudRain;
  readonly Wind = Wind;

  currentDate = new Date();
}
