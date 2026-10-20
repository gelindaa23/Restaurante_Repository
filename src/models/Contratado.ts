import {Funcionario} from "./Funcionario";

export class Contratado extends Funcionario{
    salarioFixo: number;

    constructor(salarioFixo:number, nome:string, sexo:string, dataContratacao:Date, CPF:number, RG:number){
        super(nome, sexo, dataContratacao, CPF, RG);
        this.salarioFixo = salarioFixo;
    }

}

