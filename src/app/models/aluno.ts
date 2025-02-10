import { Pessoa } from "./pessoa";

export class Aluno extends Pessoa {
    curso : string;
    notas : number

    constructor(nome : string, cpf : string, data_nascimento : Date, endereco : string , curso : string, notas : number, ){
        super(nome,cpf,data_nascimento,endereco);
        this.curso = curso;
        this.notas = notas
    }
}
