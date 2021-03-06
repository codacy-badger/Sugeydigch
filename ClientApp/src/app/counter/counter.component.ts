import { Component,  OnInit, ViewEncapsulation} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrarseComponent } from '../Inicio/NavBar/registrarse/registrarse.component';
import { ClienteService} from '../services/cliente.service'
import { LoginService} from '../services/login.service'
import { Cliente } from '../models/cliente'
import { Login } from '../models/login'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginComponent} from '../Inicio/login/login.component'
import { ServiciosComponent} from '../Inicio/servicios/servicios.component'
import { HabitacionesComponent } from '../Inicio/habitaciones/habitaciones.component';
import { ContactenosComponent } from '../Inicio/contactenos/contactenos.component';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'], 
  encapsulation: ViewEncapsulation.None
})
export class CounterComponent {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private modalService: NgbModal, 
    private clienteservice: ClienteService, 
    private formBuilder: FormBuilder,
    private loginServce: LoginService,
    ){}
  
  cliente: Cliente;
  login: Login;
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      identificacion: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      //genero: ['', Validators.required],
      fechaNacimiento:  ['', Validators.required], 
      correo: [''],
      telefono:  [''],

      usuario: ['', Validators.required],
      clave: ['', Validators.required],
    });
    
    this.login = new Login();
    this.cliente = new Cliente();
  }

  add() {
    
    this.clienteservice.add(this.cliente).subscribe();

    this.login.identificacion=this.cliente.identificacion;
    this.login.rol="CLIENTE";

    this.loginServce.addLogin(this.login).subscribe();

    this.onReset();
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.add();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  
  
  openLogin(){
    //this.modalService.open(RegistrarseComponent, {centered:true});
    this.modalService.open(LoginComponent, { centered: true });
    //modalRef.componentInstance.docente = docente;
  }

  openServicios(){
    //this.modalService.open(RegistrarseComponent, {centered:true});
    this.modalService.open(ServiciosComponent, { size: 'xl' });
    //modalRef.componentInstance.docente = docente;
  }

  openHabitaciones(){
    this.modalService.open(HabitacionesComponent, { size: 'xl' });
  }

  openContactenos(){
    this.modalService.open(ContactenosComponent, { size: 'lg' });
  }

}
