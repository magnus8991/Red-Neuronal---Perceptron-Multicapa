import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ConfiguracionRed } from 'src/app/PerceptronMulticapa/Modelos/configuracionRed';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'step-configuracion-red',
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
      funcionActivacionCapaSalida: ['Lineal', Validators.required],
      capasIntermedias: this.builder.array([])
    });
  }

  get numeroCapasIntermedias() {
    return this.formConfiguracionRed.get('numeroCapasIntermedias') as FormArray;
  }

  get arrayConfiguracionCapasIntermedias() {
    return this.formConfiguracionRed.get('configuracionCapasIntermedias') as FormArray;
  }

  generarCamposCapaIntermedia() {
    this.arrayConfiguracionCapasIntermedias.push(this.builder.control(1));
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
