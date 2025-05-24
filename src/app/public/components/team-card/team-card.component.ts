import { Component } from '@angular/core';

import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-team-card',
  imports: [CommonModule],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.css',
})
export class TeamCardComponent {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() role: string = '';
  @Input() socialLinks: { icon: string; url: string }[] = [];
}
