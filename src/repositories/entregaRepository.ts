import {Entrega} from "../models/Entrega"

class entregaRepository{

    private Entregas: Entrega[] = []

    salvar(entrega:Entrega):void{

        this.Entregas.push(
            {
                dataSaida: entrega.dataSaida,
                horaSaida: entrega.horaSaida,
                numPedido: entrega.numPedido,
                enderecoEntrega: entrega.enderecoEntrega
            }
        )
    };

    consultarEntregas():void{
        console.log(this.Entregas)
    }
}