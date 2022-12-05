import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  num:number;
  sueldos=[1700, 1600, 1900, 1800, 2000, 4555]
  constructor() { }

  ngOnInit(): void {
    this.num=0;
  }

}
