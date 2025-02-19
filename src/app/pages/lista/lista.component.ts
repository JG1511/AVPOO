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

 
}
