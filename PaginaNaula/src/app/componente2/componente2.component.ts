import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {
  
  resultado:any
  mensaje:any
  suma:number=0;
  constructor() { }

  ngOnInit(): void {
    this.recup()
  }

  recup(){
    this.resultado = localStorage.getItem('nombre')
    this.resultado = localStorage.getItem('mail')
    this.resultado = localStorage.getItem('contraseña')
    this.resultado = localStorage.getItem('contraseñaRep')
    this.resultado = localStorage.getItem('telefono')
  }
}
