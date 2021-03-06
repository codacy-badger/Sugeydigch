import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../../models/cliente';
import { Reserva } from '../../../models/reserva';
import { ClienteService } from '../../../services/cliente.service'
import { ReservaService } from '../../../services/reserva.service'
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import{ DescuentosReservaComponent} from '../descuentos-reserva/descuentos-reserva.component'
import{ ServiciosReservaComponent} from '../servicios-reserva/servicios-reserva.component'
import{ AcompanantesComponent} from '../acompanantes/acompanantes.component'
import{ FacturaReservaComponent} from '../factura-reserva/factura-reserva.component'



@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    ) { }

  modal : NgbModalRef;
  registerForm: FormGroup;

  @Input() reserva: Reserva;
  @Input() cliente: Cliente;
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      idCliente: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      fechaSalida: ['', Validators.required],
      habitaciones: ['', Validators.required],
      estado:  ['', Validators.required],
      diasEstadia: ['', Validators.required],
      
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      genero: ['', Validators.required],
      fechaNacimiento:  ['', Validators.required], 
      correo: [''],
      telefono:  [''],
    });
  }


  Acompanantes(){
    const modalRef =  this.modalService.open(AcompanantesComponent, { size: 'xl' });
    modalRef.componentInstance.reserva = this.reserva;
    this.activeModal.close();
  }

  Servicios(){
    const modalRef =  this.modalService.open(ServiciosReservaComponent, { size: 'xl' });
    modalRef.componentInstance.reserva = this.reserva;
    this.activeModal.close();
  }

  Descuentos(){
    const modalRef =  this.modalService.open(DescuentosReservaComponent, { size: 'xl' });
    modalRef.componentInstance.reserva = this.reserva;
    this.activeModal.close();
  }

  Factura(){
    const modalRef =  this.modalService.open(FacturaReservaComponent, { size: 'xl' });
    modalRef.componentInstance.reserva = this.reserva;
    modalRef.componentInstance.cliente = this.cliente;
  }
 

}
