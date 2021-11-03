import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ConfiguracionRed } from 'src/app/PerceptronMulticapa/Modelos/configuracionRed';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'step-configuracion-red',
  templateUrl: './step-configuracion-red.component.html',
  styleUrls: ['./step-configuracion-red.component.css']
})
export class StepConfiguracionRedComponent implements OnInit {
  configuracionRed: ConfiguracionRed;
  @Output() reloadTraining = new EventEmitter<unknown>();

  constructor() { }

  ngOnInit(): void {
    this.configuracionRed = new ConfiguracionRed();
  }

  // Operaciones de reinicio de valores

  reiniciarStepConfiguracionRed() {
    this.configuracionRed = new ConfiguracionRed();
  }

  // Eventos de reinicio y actualizacion de valores

  reiniciarEntrenamiento() {
    this.reloadTraining.emit();
  }
}
