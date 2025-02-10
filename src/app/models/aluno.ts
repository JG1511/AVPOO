import { Pessoa } from "./pessoa";
import { Professor } from "./professor";

export class Aluno extends Pessoa {
    curso : string;
    notas : number
    professor : Professor

    constructor(nome : string, cpf : string, data_nascimento : Date, endereco : string , curso : string, notas : number, professor : Professor ){
        super(nome,cpf,data_nascimento,endereco);
        this.curso = curso;
        this.notas = notas
        this.professor = professor
    }
}
