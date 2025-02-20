export class Pessoa {
    nome: string;
    cpf : string;
    data_nascimento : Date;
    endereco : string

    constructor(nome :string, cpf : string, data_nascimento : Date, endereco : string ){
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.endereco = endereco;
    }

    dados () : string{
        return this.nome , this.cpf , this.endereco
    }
}
