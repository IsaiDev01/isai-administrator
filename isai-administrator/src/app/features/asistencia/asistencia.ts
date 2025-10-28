import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsistenciaModel } from '../../core/models/asistencia';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-asistencia',
  imports: [CommonModule, RouterModule],
  templateUrl: './asistencia.html',
  styleUrl: './asistencia.css'
})
export class Asistencia {

  ASISTENCIAS: AsistenciaModel[] = [
  {
    id: 1,
    user_check: 'Matías Aguiar',
    date_created: '2025-09-11T09:00:00',
    day: '11',
    month: '09',
    year: '2025',
    attendance_one: 1,
    attendance_two: 1,
    attendance_total: 2,
    salab: 101,
    hora1: '09:00',
    hora2: '12:00',
    day_name: 'miércoles',
  },
  {
    id: 2,
    user_check: 'Lucía Torres',
    date_created: '2025-09-10T14:30:00',
    day: '10',
    month: '09',
    year: '2025',
    attendance_one: 1,
    attendance_two: 0,
    attendance_total: 1,
    salab: 203,
    hora1: '14:30',
    hora2: '',
    day_name: 'martes',
  },
  {
    id: 3,
    user_check: 'Carlos Mendoza',
    date_created: '2025-09-09T08:45:00',
    day: '09',
    month: '09',
    year: '2025',
    attendance_one: 1,
    attendance_two: 1,
    attendance_total: 2,
    salab: 105,
    hora1: '08:45',
    hora2: '11:15',
    day_name: 'lunes',
  },
];

}
