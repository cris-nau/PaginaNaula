import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  numero:any;
  constructor() { }

  sueldos=[1700, 1600, 1900, 1800, 2000, 4555]
  ngOnInit(): void {
    this.numero=3;
  }

}
