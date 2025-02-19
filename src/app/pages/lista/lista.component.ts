import { Component } from '@angular/core';
import { CadastroService } from '../../services/cadastro.service';
import { Aluno } from '../../models/aluno';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  
  pessoas : Aluno[] = []

  constructor(cadastroService : CadastroService){
    this.pessoas = cadastroService.getAluno()
  }
}
