import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-programa-servicio',
  imports: [CommonModule],
  templateUrl: './tabla-programa-servicio.html',
  styleUrl: './tabla-programa-servicio.css'
})
export class TablaProgramaServicio implements OnInit {

  constructor(){}

  ngOnInit(): void {
      
  }

    programas = [
    {
      id: 1,
      fechaHora: '2025-08-28 10:00 AM',
      tipo: 'Predicación pública',
      lugar: 'Parque Central',
      capitanes: 'Juan Pérez, María López',
    },
    {
      id: 2,
      fechaHora: '2025-08-29 4:00 PM',
      tipo: 'Casa en casa',
      lugar: 'Colonia Los Pinos',
      capitanes: 'Carlos Ruiz',
    },
    {
      id: 3,
      fechaHora: '2025-08-30 9:30 AM',
      tipo: 'Campaña especial',
      lugar: 'Mercado Municipal',
      capitanes: 'Ana Torres, Luis Díaz',
    },
  ];


}
