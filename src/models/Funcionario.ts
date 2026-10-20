export class Funcionario{
    nome: string;
    sexo: string;
    dataContratacao: Date;
    CPF: number;
    RG: number;

    constructor(nome:string, sexo:string, dataContratacao:Date, CPF:number, RG:number){
        this.nome = nome;
        this.sexo = sexo;
        this.dataContratacao = dataContratacao;
        this.CPF = CPF;
        this.RG = RG;
    }
}