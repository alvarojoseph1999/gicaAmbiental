import { Component, ElementRef, ViewChild } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../../public/components/footer/footer.component';
import { NavbarComponent } from '../../../public/components/navbar/navbar.component';

import { LucideAngularModule } from 'lucide-angular';
import { LogIn } from 'lucide-angular';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    FooterComponent,
    NavbarComponent,
    LucideAngularModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export default class LoginComponent {
  readonly LogIn = LogIn;
  // Login form
  // email = '';
  // password = '';
  showPassword = false;

  // Register form
  firstName = '';
  lastName = '';
  registerEmail = '';
  registerPassword = '';

  // // UI state
  isRegisterMode = false;

  activateRegister() {
    this.isRegisterMode = true;
  }

  activateLogin() {
    this.isRegisterMode = false;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  submit() {
    if (this.email === 'admin' && this.password === 'admin') {
      console.log('Login attempt:', {
        email: this.email,
        password: this.password,
      });
      this.router.navigate(['/administrador/dashboard_admin']);
      // Implement login logic here
    }
    if (this.email === 'admi' && this.password === 'admi') {
      console.log('Login attempt:', {
        email: this.email,
        password: this.password,
      });
      this.router.navigate(['dashboard']);
      // Implement login logic here
    }
  }

  submitRegister() {
    if (
      this.firstName &&
      this.lastName &&
      this.registerEmail &&
      this.registerPassword
    ) {
      console.log('Register attempt:', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.registerEmail,
        password: this.registerPassword,
      });
      // Implement register logic here
    }
  }

  email: string = '';
  password: string = '';
  @ViewChild('containerRef') container!: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private http: HttpClient) {}

  // submit() {
  //   // 🔐 Validación temporal para pruebas: admin / admin
  //   if (this.email === 'admin' && this.password === 'admin') {
  //     // Redireccionar al dashboard
  //     this.router.navigate(['/dashboard']);
  //   } else {
  //     // 👇 Aquí iría la conexión con Laravel usando JSON
  //     /*
  //     const loginData = {
  //       email: this.email,
  //       password: this.password,
  //     };

  //     this.http.post('http://localhost:8000/api/login', loginData)
  //       .subscribe(
  //         (response: any) => {
  //           // Aquí podrías guardar el token y redirigir
  //           localStorage.setItem('token', response.token);
  //           this.router.navigate(['/dashboard']);
  //         },
  //         (error) => {
  //           console.error('Error de autenticación:', error);
  //         }
  //       );
  //     */
  //     alert('Usuario o contraseña incorrectos');
  //   }
  // }

  // activateRegister(): void {
  //   this.container.nativeElement.classList.add('active');
  // }

  // activateLogin(): void {
  //   this.container.nativeElement.classList.remove('active');
  // }
}
