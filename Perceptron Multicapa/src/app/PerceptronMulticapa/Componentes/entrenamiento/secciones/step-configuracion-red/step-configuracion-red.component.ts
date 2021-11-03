import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ConfiguracionRed } from 'src/app/PerceptronMulticapa/Modelos/configuracionRed';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'step-configuracion-red',
  templateUrl: './step-configuracion-red.component.html',
  styleUrls: ['./step-configuracion-red.component.css']
})
export class StepConfiguracionRedComponent implements OnInit {
  formConfiguracionRed: FormGroup;
  funcionesActivacionCapaIntermedia = ['Sigmoide', 'Gausiana', 'Tangente Hiperbolica'];
  funcionesActivacionCapaSalida = ['Sigmoide', 'Gausiana', 'Tangente Hiperbolica', 'Lineal'];
  funcionActivacionCapaSalida: string;
  configuracionRed: ConfiguracionRed;
  @Output() reloadTraining = new EventEmitter<unknown>();

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.configuracionRed = new ConfiguracionRed();
    this.formConfiguracionRed = this.builder.group({
      numeroCapasIntermedias: [0, Validators.required],
      funcionActivacionCapaSalida: ['Lineal', Validators.required],
      capasIntermedias: this.builder.array([])
    });
  }

  get numeroCapasIntermedias() {
    return this.formConfiguracionRed.get('numeroCapasIntermedias') as FormArray;
  }

  get arrayConfiguracionCapasIntermedias() {
    return this.formConfiguracionRed.get('capasIntermedias') as FormArray;
  }

  generarCamposCapaIntermedia(numeroCapasIntermedias) {
    this.arrayConfiguracionCapasIntermedias.clear();
    for (let i = 0; i < numeroCapasIntermedias; i++) {
      this.arrayConfiguracionCapasIntermedias.push(this.builder.control(1));
    }
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
