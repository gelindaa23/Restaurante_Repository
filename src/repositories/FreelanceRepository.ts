import {Freelance} from "../models/Freelance"

class freelanceRepository{

    private Freelances: Freelance[] = []
    
    salvar(freelance:Freelance):void{
        
        this.Freelances.push(
           {
            salarioHora: freelance.salarioHora,
            horasTrabalhadas: freelance.horasTrabalhadas,
            dataLimite: freelance.dataLimite,
            nome: freelance.nome, 
            sexo: freelance.sexo, 
            dataContratacao: freelance.dataContratacao, 
            CPF: freelance.CPF, 
            RG: freelance.RG
           }   
        )
    };

    consultarFreelances():void{
        console.log(this.Freelances)
    }
}