import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { MatrizPesosSinapticos } from "../Modelos/matrizPesosSinapticos";
import { ParametrosEntrada } from "../Modelos/parametrosEntrada";
import { Umbrales } from "../Modelos/umbrales";

@Injectable({
  providedIn: 'root'
})
export class ValidacionesService {

  constructor() { }

  checkConfiguracionRed(parametrosEntrada: ParametrosEntrada, pesosSinapticos: MatrizPesosSinapticos, umbrales: Umbrales,
    checkDelta: boolean, checkDeltaModificada: boolean, numeroIteraciones: any, rataAprendizaje: any, errorMaximoPermitido: any) {
    return this.checkParametrosEntrada(parametrosEntrada) && this.checkAlgoritmTraining(checkDelta, checkDeltaModificada) &&
      this.checkParametrosEntrenamiento(numeroIteraciones, rataAprendizaje, errorMaximoPermitido) &&
      this.checkPesosYUmbrales(pesosSinapticos, umbrales);
  }

  checkParametrosEntrada(parametrosEntrada: ParametrosEntrada) {
    return !(parametrosEntrada.numeroEntradas == 'N/A' || parametrosEntrada.numeroSalidas == 'N/A');
  }

  checkPesosYUmbrales(pesosSinapticos: MatrizPesosSinapticos, umbrales: Umbrales) {
    return this.checkPesos(pesosSinapticos) && this.checkUmbrales(umbrales);
  }

  checkPesos(pesosSinapticos: MatrizPesosSinapticos) {
    return pesosSinapticos.filas[0].columnas[0] != 'N/A';
  }

  checkUmbrales(umbrales: Umbrales) {
    return umbrales.valores[0] != 'N/A';
  }

  checkAlgoritmTraining(checkDelta: boolean, checkDeltaModificada: boolean) {
    return checkDelta || checkDeltaModificada;
  }

  checkParametrosEntrenamiento(numeroIteraciones: any, rataAprendizaje: any, errorMaximoPermitido: any) {
    return this.checkNumeroIteraciones(numeroIteraciones) && this.checkRataAprendizaje(rataAprendizaje) &&
      this.checkErrorMaximoPermitido(errorMaximoPermitido);
  }

  checkNumeroIteraciones(numeroIteraciones: any) {
    return !(numeroIteraciones <= 0 || numeroIteraciones == null || false);
  }

  checkRataAprendizaje(rataAprendizaje: any) {
    return !(parseFloat(rataAprendizaje) <= 0 || parseFloat(rataAprendizaje) > 1 ||
      rataAprendizaje == null || false);
  }

  checkErrorMaximoPermitido(errorMaximoPermitido: any) {
    return !(parseFloat(errorMaximoPermitido) < 0 || errorMaximoPermitido == null || false);
  }

}
