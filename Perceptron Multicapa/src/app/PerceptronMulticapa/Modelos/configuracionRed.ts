import { CapaIntermedia } from "./capaIntermedia";
import { CapaSalida } from "./capaSalida";

export class ConfiguracionRed {
    numeroCapasIntermedias: any;
    capasIntermedias: CapaIntermedia[];
    capaSalida: CapaSalida;

    constructor(numeroCapasIntermedias, capasIntermedias: CapaIntermedia[], capaSalida: CapaSalida) {
        this.numeroCapasIntermedias = numeroCapasIntermedias;
        this.capasIntermedias = capasIntermedias;
        this.capaSalida = capaSalida;
    }
}