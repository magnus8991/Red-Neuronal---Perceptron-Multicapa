import { CapaIntermedia } from "./capaIntermedia";
import { CapaSalida } from "./capaSalida";

export class ConfiguracionRed {
    numeroCapasIntermedias: number = 0;
    capasIntermedias: CapaIntermedia[] = [];
    capaSalida: CapaSalida = new CapaSalida();
}