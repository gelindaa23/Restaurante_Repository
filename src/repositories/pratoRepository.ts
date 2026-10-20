import {Prato} from "../models/Prato";

class pratoRepository{

    private Pratos: Prato[] = []

    salvar(Prato:Prato):void{

        this.Pratos.push(
            {
                nome: Prato.nome,
                dataValidade: Prato.dataValidade,
                nacionalidade: Prato.nacionalidade
            }
        )
    };

    consultarPratos():void{
        console.log(this.Pratos)
    }
}
