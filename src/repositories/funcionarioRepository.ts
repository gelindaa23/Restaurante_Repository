import {Funcionario} from "../models/Funcionario";

class funcionarioRepository{

    private Funcionarios: Funcionario[] = []

    salvar(Funcionario:Funcionario):void{

        this.Funcionarios.push(
          {
            nome: Funcionario.nome,
            sexo: Funcionario.sexo,
            dataContratacao: Funcionario.dataContratacao,
            CPF: Funcionario.CPF,
            RG: Funcionario.RG
          }
        )
    };

    consultarFuncionarios():void{
        console.log(this.Funcionarios)
    }
}