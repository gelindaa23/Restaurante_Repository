import {Funcionario} from "./Funcionario";

export class Freelance extends Funcionario{
    salarioHora: number;
    horasTrabalhadas: number;
    dataLimite: Date;
    
    constructor(salarioHora:number, horasTrabalhadas:number, dataLimite:Date, nome:string, sexo:string, dataContratacao:Date, CPF:number, RG:number){
        super(nome, sexo, dataContratacao, CPF, RG)
        this.salarioHora = salarioHora;
        this.horasTrabalhadas = horasTrabalhadas;
        this.dataLimite = dataLimite;
    }

}