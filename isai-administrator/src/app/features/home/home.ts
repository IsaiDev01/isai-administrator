import { Component, OnInit } from '@angular/core';
import { mainModel } from '../../core/models/menu';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  nombreUsuario = 'Matías';
  menuList: mainModel[] = []

  constructor(){}

  ngOnInit(): void {
      this.init();
  }

  init(){
    this.menuList = [
      {
        id: 0,
        name: "Programa del servicio",
        descrip: "Revisa los programas registrados",
        icon: "📋",
        labelBtn: "Ir a la pagina",
        route: "/programa-servicio"
        
      },
       {
        id: 1,
        name: "Asistencia reunion",
        descrip: "Registro de asistencia en las reuniones",
        icon: "👥",
        labelBtn: "Ir a la pagina",
         route: ""
      },
       {
        id: 2,
        name: "Configuraciones",
        descrip: "Sección en construcción",
        icon: "⚙️",
        labelBtn: "Ir a la pagina",
        route: ""
      }
    ]
  }

  

}
