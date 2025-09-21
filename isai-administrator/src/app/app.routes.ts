import { Routes } from '@angular/router';
import { TablaProgramaServicio } from './features/tabla-programa-servicio/tabla-programa-servicio';
import { Home } from './features/home/home';
import { NotFound } from './features/not-found/not-found';

export const routes: Routes = [
    { path: 'programa-servicio', component: TablaProgramaServicio },
    { path: 'home', component: Home },
    { path: '**', component: NotFound}
];
