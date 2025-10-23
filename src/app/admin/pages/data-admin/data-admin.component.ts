import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  Upload,
  FileText,
  CheckCircle,
  XCircle,
  Eye,
  Download,
  Trash2,
  Calendar,
  Database,
} from 'lucide-angular';

interface DataFile {
  id: number;
  name: string;
  type: 'climate' | 'solar' | 'weather' | 'air-quality';
  size: string;
  uploadDate: string;
  status: 'pending' | 'verified' | 'rejected';
  records: number;
  lastUpdate: string;
}

@Component({
  selector: 'app-data-admin',
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './data-admin.component.html',
  styleUrl: './data-admin.component.css',
})
export class DataAdminComponent {
  readonly Upload = Upload;
  readonly FileText = FileText;
  readonly CheckCircle = CheckCircle;
  readonly XCircle = XCircle;
  readonly Eye = Eye;
  readonly Download = Download;
  readonly Trash2 = Trash2;
  readonly Calendar = Calendar;
  readonly Database = Database;

  selectedDataType = 'climate';
  statusFilter = '';
  typeFilter = '';

  dataFiles: DataFile[] = [
    {
      id: 1,
      name: 'temperatura_enero_2024.csv',
      type: 'climate',
      size: '2.4 MB',
      uploadDate: '2024-01-15',
      status: 'verified',
      records: 8760,
      lastUpdate: 'Actualizado hace 2 horas',
    },
    {
      id: 2,
      name: 'radiacion_solar_diciembre.json',
      type: 'solar',
      size: '1.8 MB',
      uploadDate: '2024-01-14',
      status: 'pending',
      records: 4320,
      lastUpdate: 'Subido hace 1 día',
    },
    {
      id: 3,
      name: 'calidad_aire_2024.xml',
      type: 'air-quality',
      size: '3.2 MB',
      uploadDate: '2024-01-13',
      status: 'rejected',
      records: 12000,
      lastUpdate: 'Rechazado hace 2 días',
    },
  ];

  filteredFiles() {
    return this.dataFiles.filter((file) => {
      const statusMatch =
        !this.statusFilter || file.status === this.statusFilter;
      const typeMatch = !this.typeFilter || file.type === this.typeFilter;
      return statusMatch && typeMatch;
    });
  }

  getTypeClass(type: string) {
    switch (type) {
      case 'climate':
        return 'bg-blue-100 text-blue-800';
      case 'solar':
        return 'bg-yellow-100 text-yellow-800';
      case 'weather':
        return 'bg-green-100 text-green-800';
      case 'air-quality':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  getTypeLabel(type: string) {
    switch (type) {
      case 'climate':
        return 'Climáticos';
      case 'solar':
        return 'Solar';
      case 'weather':
        return 'Meteorológicos';
      case 'air-quality':
        return 'Calidad del Aire';
      default:
        return 'Desconocido';
    }
  }

  getStatusIcon(status: string) {
    switch (status) {
      case 'verified':
        return CheckCircle;
      case 'rejected':
        return XCircle;
      default:
        return Calendar;
    }
  }

  getStatusColor(status: string) {
    switch (status) {
      case 'verified':
        return 'text-green-600';
      case 'rejected':
        return 'text-red-600';
      default:
        return 'text-yellow-600';
    }
  }

  getStatusLabel(status: string) {
    switch (status) {
      case 'verified':
        return 'Verificado';
      case 'rejected':
        return 'Rechazado';
      default:
        return 'Pendiente';
    }
  }

  getVerifiedCount() {
    return this.dataFiles.filter((f) => f.status === 'verified').length;
  }

  getPendingCount() {
    return this.dataFiles.filter((f) => f.status === 'pending').length;
  }

  onFileSelect(event: any) {
    const files = event.target.files;
    console.log('Archivos seleccionados:', files);
    // Aquí implementarías la lógica de subida
  }

  viewFile(file: DataFile) {
    console.log('Ver archivo:', file);
  }

  downloadFile(file: DataFile) {
    console.log('Descargar archivo:', file);
  }

  deleteFile(file: DataFile) {
    if (confirm(`¿Estás seguro de eliminar ${file.name}?`)) {
      this.dataFiles = this.dataFiles.filter((f) => f.id !== file.id);
    }
  }
}
