import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  
  nombre:any
  mail:any
  contrasena:any
  contrasenaRep:any
  telefono:any

  constructor() { }

  ngOnInit(): void {
    this.recup()
  }

  recup(){
    this.nombre = localStorage.getItem('nombre')
    this.mail = localStorage.getItem('mail')
    this.contrasena = localStorage.getItem('contraseña')
    this.contrasenaRep = localStorage.getItem('contraseñaRep')
    this.telefono = localStorage.getItem('telefono')
  }
}
