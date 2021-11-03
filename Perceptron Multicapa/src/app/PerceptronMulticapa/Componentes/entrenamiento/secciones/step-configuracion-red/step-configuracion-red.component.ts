import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ConfiguracionRed } from 'src/app/PerceptronMulticapa/Modelos/configuracionRed';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-step-configuracion-red',
  templateUrl: './step-configuracion-red.component.html',
  styleUrls: ['./step-configuracion-red.component.css']
})
export class StepConfiguracionRedComponent implements OnInit {
  configuracionRed: ConfiguracionRed;
  @Output() reloadTraining = new EventEmitter<unknown>();

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.configuracionRed = new ConfiguracionRed();
    this.formConfiguracionRed = this.builder.group({
      numeroCapasIntermedias: [1, Validators.required],
      funcionActivacionCapaSalida: ['Lineal', Validators.required]
    });
  }

  // Operaciones de reinicio de valores

  reiniciarStepConfiguracionRed() {
    this.configuracionRed = new ConfiguracionRed();
  }

  // Eventos de reinicio y actualizacion de valores

  reiniciarEntrenamiento() {
    this.reloadTraining.emit();
  }

  formConfiguracionRed: FormGroup;

  funcionesActivacionCapaIntermedia = ['Sigmoide', 'Gausiana', 'Tangente Hiperbolica'];
  funcionesActivacionCapaSalida = ['Sigmoide', 'Gausiana', 'Tangente Hiperbolica', 'Lineal'];
  funcionActivacionCapaSalida: string;

}
