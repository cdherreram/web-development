import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  private _nombre = "Mauricio";
  private _apellido = "León";
  private _edad = 12;
  private _empresa = "Avon";

  constructor() { }

  ngOnInit(): void {
  }

  public get nombre(){
    return this._nombre;
  }

  public get apellido(){
    return this._apellido;
  }

  public get edad(){
    return this._edad;
  }

  public get empresa(){
    return this._empresa;
  }

  public get fullName(): string{
    return `${this._nombre}  ${this._apellido}`;
  }
}
