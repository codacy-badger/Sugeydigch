import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarseComponent } from '../app/Inicio/NavBar/registrarse/registrarse.component';
import { HomeComponent } from '../app/home/home.component';
import { RecepcionistaComponent } from '../app/recepcionista/recepcionista.component'
import { ReservaComponent } from '../app/reserva/reserva.component'
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CounterComponent } from './counter/counter.component';
import { LoginComponent} from './Inicio/login/login.component';
import { ServiciosComponent} from './Inicio/servicios/servicios.component'
import { ConsultarClienteComponent } from './Cliente/consultar-cliente/consultar-cliente.component'
import { ModificarClienteComponent } from './Cliente/modificar-cliente/modificar-cliente.component'
import { NavMenuComponent } from './nav-menu/nav-menu.component'
import { ConsultarHabitacionesComponent} from './Habitaciones/consultar-habitaciones/consultar-habitaciones.component'

const routes: Routes = [

  { path:'', component:  CounterComponent, pathMatch: 'full' },
  { path:'Recepcionista', component:RecepcionistaComponent  },
  { path:'Recepcionista/Reserva', component:ReservaComponent  },
  { path:'Recepcionista/ConsultarClientes', component:ConsultarClienteComponent },
  { path:'Recepcionista/ModificarCliente/:id', component:ModificarClienteComponent  },
  { path:'Recepcionista/NavMenu', component:NavMenuComponent },
  { path:'Recepcionista/ConsultarHabitaciones', component:ConsultarHabitacionesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
