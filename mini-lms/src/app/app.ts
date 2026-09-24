import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// La misma forma de datos del Mini-LMS, ahora en un componente Angular.
interface Estudiante {
  nombre: string;
  creditos: number;
  edad: number;
}
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = 'Mini-LMS · Lista de estudiantes';
  estudiantes: Estudiante[] = [
    { nombre: 'María Torres', edad: 15, creditos: 18 },
    { nombre: 'Luis Pérez', edad: 20,creditos: 8 },
    { nombre: 'Ana Ruiz', edad: 18, creditos: 14 }
  ];

  // Misma regla de matrícula de la Unidad 1, ahora como método del componente
  estado(creditos: number): string {
    if (creditos < 1 || creditos > 24) {
      return 'Créditos inválidos';
    } else if (creditos >= 12) {
      return 'Matriculado';
    }
    return 'Pendiente';
  }
  validarEdad(edad: number) : String {
    if (edad < 1) {
      return 'Edad inválida';
    } else if (edad >= 18) {
      return 'Mayor de edad';
    }{
      return 'Menor de edad';
    }
  }
}
