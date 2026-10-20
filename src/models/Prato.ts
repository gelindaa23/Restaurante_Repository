export class Prato{
    nome: string;
    dataValidade: string;
    nacionalidade: string;
    constructor(nome:string, dataValidade:Date, nacionalidade:string){
        this.nome = nome;
        this.dataValidade = dataValidade;
        this.nacionalidade = nacionalidade;
    }
}

const escondidinho = new Prato(
    "Escondidinho de carne",
    "25/10/2026",
    "Brasileiro"
);

const tabelaPratos = new pratoRepository()

tabelaPratos.salvar(escondidinho)
tabelaPratos.consultarPratos()