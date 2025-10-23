import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  LucideAngularModule,
  Plus,
  Search,
  Edit,
  Trash2,
  MoreHorizontal,
  Shield,
  UserIcon,
  UserCheck,
} from 'lucide-angular';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'moderator' | 'user';
  status: 'active' | 'inactive';
  lastLogin: string;
  avatar?: string;
}
@Component({
  selector: 'app-user-admin',
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './user-admin.component.html',
  styleUrl: './user-admin.component.css',
})
export class UserAdminComponent {
  readonly Plus = Plus;
  readonly Search = Search;
  readonly Edit = Edit;
  readonly Trash2 = Trash2;
  readonly MoreHorizontal = MoreHorizontal;
  readonly Shield = Shield;
  readonly UserIcon = UserIcon;
  readonly UserCheck = UserCheck;

  searchTerm = '';
  showUserModal = signal(false);
  selectedUser = signal<User | null>(null);

  userForm = {
    name: '',
    email: '',
    role: 'user' as 'admin' | 'moderator' | 'user',
    status: 'active' as 'active' | 'inactive',
  };

  users: User[] = [
    {
      id: 1,
      name: 'Dr. María González',
      email: 'maria.gonzalez@eco.com',
      role: 'admin',
      status: 'active',
      lastLogin: '2024-01-15 10:30',
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      email: 'carlos.rodriguez@eco.com',
      role: 'moderator',
      status: 'active',
      lastLogin: '2024-01-14 16:45',
    },
    {
      id: 3,
      name: 'Ana Martínez',
      email: 'ana.martinez@eco.com',
      role: 'user',
      status: 'inactive',
      lastLogin: '2024-01-10 09:15',
    },
  ];

  filteredUsers() {
    if (!this.searchTerm) return this.users;
    return this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  getRoleIcon(role: string) {
    switch (role) {
      case 'admin':
        return this.Shield;
      case 'moderator':
        return this.UserCheck;
      default:
        return this.UserIcon;
    }
  }

  getRoleColor(role: string) {
    switch (role) {
      case 'admin':
        return 'text-red-600';
      case 'moderator':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  }

  getRoleLabel(role: string) {
    switch (role) {
      case 'admin':
        return 'Administrador';
      case 'moderator':
        return 'Moderador';
      default:
        return 'Usuario';
    }
  }

  getStatusClass(status: string) {
    return status === 'active'
      ? 'bg-green-100 text-green-800'
      : 'bg-red-100 text-red-800';
  }

  openUserModal(user?: User) {
    if (user) {
      this.selectedUser.set(user);
      this.userForm = {
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
      };
    } else {
      this.selectedUser.set(null);
      this.userForm = {
        name: '',
        email: '',
        role: 'user',
        status: 'active',
      };
    }
    this.showUserModal.set(true);
  }

  closeUserModal() {
    this.showUserModal.set(false);
    this.selectedUser.set(null);
  }

  editUser(user: User) {
    this.openUserModal(user);
  }

  resetPassword(user: User) {
    alert(`Restablecer contraseña para ${user.name}`);
  }

  deleteUser(user: User) {
    if (confirm(`¿Estás seguro de eliminar a ${user.name}?`)) {
      this.users = this.users.filter((u) => u.id !== user.id);
    }
  }

  saveUser() {
    if (this.selectedUser()) {
      // Update existing user
      const index = this.users.findIndex(
        (u) => u.id === this.selectedUser()!.id
      );
      if (index !== -1) {
        this.users[index] = { ...this.users[index], ...this.userForm };
      }
    } else {
      // Create new user
      const newUser: User = {
        id: Math.max(...this.users.map((u) => u.id)) + 1,
        ...this.userForm,
        lastLogin: 'Nunca',
      };
      this.users.push(newUser);
    }
    this.closeUserModal();
  }
}
