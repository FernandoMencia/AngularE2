import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {
  datosPersonalizados = [
    { nombre: 'Juan', edad: 25, ciudad: 'Madrid', profesion: 'Ingeniero', salario: 50000, estadoCivil: 'Soltero' },
    { nombre: 'María', edad: 30, ciudad: 'Barcelona', profesion: 'Arquitecta', salario: 60000, estadoCivil: 'Casada' },
    { nombre: 'Pedro', edad: 35, ciudad: 'Sevilla', profesion: 'Abogado', salario: 70000, estadoCivil: 'Divorciado' },
    { nombre: 'Ana', edad: 28, ciudad: 'Valencia', profesion: 'Médico', salario: 80000, estadoCivil: 'Soltera' },
    { nombre: 'Luis', edad: 40, ciudad: 'Bilbao', profesion: 'Profesor', salario: 55000, estadoCivil: 'Casado' },
    { nombre: 'Elena', edad: 33, ciudad: 'Málaga', profesion: 'Diseñadora', salario: 45000, estadoCivil: 'Soltera' },
    { nombre: 'Pablo', edad: 32, ciudad: 'Madrid', profesion: 'Ingeniero', salario: 52000, estadoCivil: 'Casado' },
    { nombre: 'Carmen', edad: 29, ciudad: 'Barcelona', profesion: 'Programadora', salario: 65000, estadoCivil: 'Soltera' },
    { nombre: 'David', edad: 38, ciudad: 'Sevilla', profesion: 'Médico', salario: 72000, estadoCivil: 'Divorciado' },
    { nombre: 'Laura', edad: 31, ciudad: 'Valencia', profesion: 'Abogada', salario: 75000, estadoCivil: 'Soltera' },
    { nombre: 'Sergio', edad: 36, ciudad: 'Bilbao', profesion: 'Arquitecto', salario: 68000, estadoCivil: 'Casado' },
    { nombre: 'Natalia', edad: 27, ciudad: 'Málaga', profesion: 'Profesora', salario: 50000, estadoCivil: 'Soltera' },
    { nombre: 'Javier', edad: 34, ciudad: 'Madrid', profesion: 'Diseñador', salario: 47000, estadoCivil: 'Casado' },
    { nombre: 'Isabel', edad: 39, ciudad: 'Barcelona', profesion: 'Ingeniera', salario: 71000, estadoCivil: 'Divorciada' },
    { nombre: 'Daniel', edad: 26, ciudad: 'Sevilla', profesion: 'Programador', salario: 59000, estadoCivil: 'Soltero' }
  ];

  estiloEncabezadoCambiado = false;
  mostrarColumnas = true;

  cambiarEstiloEncabezado() {
    this.estiloEncabezadoCambiado = !this.estiloEncabezadoCambiado;
    this.mostrarColumnas = !this.mostrarColumnas;
  }
}
