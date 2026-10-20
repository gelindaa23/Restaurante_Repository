import {Contratado} from "../models/Contratado"

class fixoRepository{

    private Contratados: Contratado[] = []

    salvar(contratado:Contratado):void{

        this.Contratados.push(
            {
                salarioFixo: contratado.salarioFixo,
                nome: contratado.nome,
                sexo: contratado.sexo,
                dataContratacao: contratado.dataContratacao,
                CPF: contratado.CPF,
                RG: contratado.RG
            }
        )
    };

    consultarContratos():void{
        console.log(this.Contratados)
    }
}