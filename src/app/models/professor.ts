import { Pessoa } from "./pessoa";

export class Professor extends Pessoa{
    salario : number;
    especializacao : string;
    disciplinas_ministradas : string;

    constructor(nome :string, cpf : string, data_nascimento : Date, endereco : string, salario : number, especializacao : string, disciplinas_ministradas : string){
        super(nome,cpf,data_nascimento,endereco)
        this.salario = salario;
        this.especializacao = especializacao;
        this.disciplinas_ministradas = disciplinas_ministradas;
    }
}
