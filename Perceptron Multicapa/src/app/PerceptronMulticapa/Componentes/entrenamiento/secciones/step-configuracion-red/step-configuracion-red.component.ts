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
    this.generarCamposCapaIntermedia(1);
  }

  generarCamposCapaIntermedia(numeroCapasIntermedias) {
    this.arrayConfiguracionCapasIntermedias.clear();
    for (let i = 0; i < numeroCapasIntermedias; i++) {
      this.arrayConfiguracionCapasIntermedias.push(this.nuevaCapaIntermedia());
    }
  }

  get arrayConfiguracionCapasIntermedias() {
    return this.formConfiguracionRed.get('capasIntermedias') as FormArray;
  }

  nuevaCapaIntermedia(): FormGroup {
    return this.builder.group({
      numeroNeuronas: 1,
      funcionActivacion: ''
    });
  }

  onSubmit() {
    console.log(this.formConfiguracionRed.value);
  }

  reiniciarStepConfiguracionRed() {
    this.configuracionRed = new ConfiguracionRed();
  }

  reiniciarEntrenamiento() {
    this.reloadTraining.emit();
  }

  get numeroCapasIntermedias() {
    return this.formConfiguracionRed.get('numeroCapasIntermedias');
  }

  get funcionActivacionCapaSalida() {
    return this.formConfiguracionRed.get('funcionActivacionCapaSalida');
  }

}
