import { Component } from '@angular/core';
import { CadastroService } from '../../services/cadastro.service';
import { Aluno } from '../../models/aluno';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista',
  imports: [DatePipe],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent  {
  
  pessoas : Aluno[] = []

  constructor( private cadastroService : CadastroService){
    this.pessoas = this.cadastroService.getAluno();
    }
    professorJaListado(index: number, professorCpf: string | undefined): boolean {
      return this.pessoas.slice(0, index).some(p => p.professor?.cpf === professorCpf);
    }

    alunoJaListado(index : number,alunoCpf : string | undefined) : boolean{
      return this.pessoas.slice(0,index).some(a => a.cpf === alunoCpf);
    }
 
}
