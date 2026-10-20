export class Entrega{
    dataSaida: Date;
    horaSaida: number;
    numPedido: number;
    enderecoEntrega: string;

    constructor(dataSaida:Date, horaSaida:number, numPedido:number, enderecoEntrega:string){
        this.dataSaida = dataSaida;
        this.horaSaida = horaSaida;
        this.numPedido = numPedido;
        this.enderecoEntrega = enderecoEntrega;
    }
}