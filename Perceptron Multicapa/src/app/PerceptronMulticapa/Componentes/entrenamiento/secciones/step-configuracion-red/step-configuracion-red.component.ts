import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-step-configuracion-red',
  templateUrl: './step-configuracion-red.component.html',
  styleUrls: ['./step-configuracion-red.component.css']
})
export class StepConfiguracionRedComponent implements OnInit {

  formConfiguracionRed: FormGroup;

  funcionesActivacionCapaIntermedia = ['Sigmoide', 'Gausiana', 'Tangente Hiperbolica'];
  funcionesActivacionCapaSalida = ['Sigmoide', 'Gausiana', 'Tangente Hiperbolica', 'Lineal'];
  funcionActivacionCapaSalida: string;
  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
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

}
