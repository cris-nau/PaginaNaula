import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  num1:number;
  num2:number;
  num3:number;
  num4:number;
  num5:number;

  constructor(private router:Router) { }

  ngOnInit(): void {
    localStorage.clear()
  }

  almacenar(){
    localStorage.setItem('nombre', this.num1.toString())
    localStorage.setItem('mail', this.num2.toString())
    localStorage.setItem('contraseña', this.num3.toString())
    localStorage.setItem('contraseñaRep', this.num4.toString())
    localStorage.setItem('telefono', this.num5.toString())
  }

  navegacion(){
    this.router.navigate(["web2"])
  }

}
