import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../../services/cadastro.service';
import { Professor } from '../../models/professor';

@Component({
  selector: 'app-forms-login',
  imports: [],
  templateUrl: './forms-login.component.html',
  styleUrl: './forms-login.component.css'
})
export class FormsLoginComponent {
  alunoForm : FormGroup;
  professorForm : FormGroup;
  
  constructor(private cadastroService : CadastroService){
    this.alunoForm = new FormGroup({
      nome_do_aluno : new FormControl('',Validators.required),
      cpf_do_aluno : new FormControl('',Validators.required),
      data_nascimento_do_aluno : new FormControl('', Validators.required),
      endereco_do_aluno : new FormControl('',Validators.required),
      curso_do_aluno : new FormControl('',Validators.required),
      nota_do_aluno : new FormControl('',Validators.required),
    }),
    this.professorForm = new FormGroup({
      nome_do_professor : new FormControl('',Validators.required),
      cpf_do_professor : new FormControl('',Validators.required),
      data_nascimento_do_professor : new FormControl('', Validators.required),
      endereco_do_professor : new FormControl('',Validators.required),
      salario_do_profesor : new FormControl('',Validators.required),
      especializacao_do_professor : new FormControl('',Validators.required),
      disciplinas_ministradas_do_professor : new FormControl('',Validators.required)
    })
  }

  
}
