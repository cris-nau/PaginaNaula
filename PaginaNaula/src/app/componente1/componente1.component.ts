import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  num1:number=0;
  num2:number=0;
  num3:number=0;
  num4:number=0;
  num5:number=0;
  constructor() { }

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

}
