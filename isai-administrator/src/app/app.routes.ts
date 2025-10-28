import { Routes } from '@angular/router';
import { TablaProgramaServicio } from './features/tabla-programa-servicio/tabla-programa-servicio';
import { Home } from './features/home/home';
import { NotFound } from './features/not-found/not-found';
import { Asistencia } from './features/asistencia/asistencia';
import { RealizarAsistencia } from './features/asistencia/realizar-asistencia/realizar-asistencia';

export const routes: Routes = [
    { path: 'programa-servicio', component: TablaProgramaServicio },
    { path: 'home', component: Home },
    { path: 'asistencia', component: Asistencia },
    { path: 'asistencia/agregar', component: RealizarAsistencia},
    { path: '**', component: NotFound},
];
