import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-realizar-asistencia',
  imports: [CommonModule, RouterModule],
  templateUrl: './realizar-asistencia.html',
  styleUrl: './realizar-asistencia.css',
})
export class RealizarAsistencia implements OnInit {

  
  // Lista de asientos por zona
  zonaIzquierda = this.generarAsientos(1, 40);
  zonaCentral = this.generarAsientos(41, 117);
  zonaDerecha = this.generarAsientos(118, 157);
  

  constructor() {}

  ngOnInit(): void {
    const data = localStorage.getItem('asistencias');
    if (data) {
      const asistencias = JSON.parse(data);
      this.zonaIzquierda = asistencias.izquierda || [];
      this.zonaCentral = asistencias.central || [];
      this.zonaDerecha = asistencias.derecha || [];
    }
  }

  get totalOcupados(): number {
    return [
      ...this.zonaIzquierda,
      ...this.zonaCentral,
      ...this.zonaDerecha,
    ].filter((a) => a.ocupado).length;
  }

  get totalDisponibles(): number {
    return [
      ...this.zonaIzquierda,
      ...this.zonaCentral,
      ...this.zonaDerecha,
    ].filter((a) => !a.ocupado).length;
  }

  generarAsientos(inicio: number, fin: number) {
    const lista = [];
    for (let i = inicio; i <= fin; i++) {
      lista.push({ id: i, ocupado: false });
    }
    return lista;
  }

  reiniciarAsientos() {
    const reiniciar = (zona: any[]) => {
      zona.forEach((a) => (a.ocupado = false));
    };
    reiniciar(this.zonaIzquierda);
    reiniciar(this.zonaCentral);
    reiniciar(this.zonaDerecha);
  }

  guardarAsistencia() {
    const data = {
      izquierda: this.zonaIzquierda,
      central: this.zonaCentral,
      derecha: this.zonaDerecha,
    };

    localStorage.setItem('asistencias', JSON.stringify(data));
    console.log('🧾 Asistencia guardada:', data);

    // Aquí podrías guardar en localStorage, enviar a backend, etc.
    // localStorage.setItem('asistencias', JSON.stringify(data));
  }

  // agrupa los asientos en subarreglos según cantidad por fila
  agruparAsientos(lista: any[], cantidadPorFila: number): any[][] {
    const filas = [];
    for (let i = 0; i < lista.length; i += cantidadPorFila) {
      filas.push(lista.slice(i, i + cantidadPorFila));
    }
    return filas;
  }

  ocuparAsiento(zona: any[], asientoId: number) {
    const asiento = zona.find((a) => a.id === asientoId);
    if (asiento) {
      asiento.ocupado = !asiento.ocupado;
    }
  }

generarTextoParaWhatsapp(): string {
  const ocupado = '[X]';
  const libre = '[ ]';

  // Día completo y fecha
  const hoy = new Date();
  const diaNombre = hoy.toLocaleDateString('es-MX', { weekday: 'long' });
  const fechaCompleta = hoy.toLocaleDateString('es-MX');

  const diaFormateado = `${diaNombre.toUpperCase()}, ${fechaCompleta}`;

  // Parte de asistencia (puedes hacerlo dinámico si necesitas)
  const parte = 'PARTE 1';

  // Simular Zoom por ahora
  const cantidadPresencial = this.totalOcupados;
  const cantidadZoom = 5; // puedes reemplazar con valor real
  const total = cantidadPresencial + cantidadZoom;

  const formatearZona = (
    zona: any[],
    porFila: number,
    nombre: string
  ): string => {
    let texto = `\n${nombre.toUpperCase()}\n------------------------------\n`;
    for (let i = 0; i < zona.length; i++) {
      texto += zona[i].ocupado ? ocupado : libre;
      if ((i + 1) % porFila === 0) {
        texto += '\n';
      }
    }
    return texto.trim();
  };

  const mensaje =
    `============================\n` +
    `        *ASISTENCIA - ${parte}*\n` +
    `============================\n` +
    `DÍA: ${diaFormateado}\n\n` +
    `PRESENCIAL: ${cantidadPresencial}\n` +
    `ZOOM: ${cantidadZoom}\n` +
    `------------------------------\n` +
    `*TOTAL: ${total}*\n\n` +
    formatearZona(this.zonaIzquierda, 4, 'Zona Izquierda') + '\n\n' +
    formatearZona(this.zonaCentral, 7, 'Zona Central') + '\n\n' +
    formatearZona(this.zonaDerecha, 4, 'Zona Derecha');

  return mensaje;
}


capitalizarPrimeraLetra(texto: string): string {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

enviarPorWhatsapp() {
  const mensaje = this.generarTextoParaWhatsapp();
  const url = `https://wa.me/?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}


}
