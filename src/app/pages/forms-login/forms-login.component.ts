import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CadastroService } from '../../services/cadastro.service';
import { Professor } from '../../models/professor';
import { Aluno } from '../../models/aluno';

@Component({
  selector: 'app-forms-login',
  imports: [ReactiveFormsModule],
  templateUrl: './forms-login.component.html',
  styleUrl: './forms-login.component.css'
})
export class FormsLoginComponent {
  alunoForm: FormGroup;
  professorForm: FormGroup;

  teste : Aluno[] = []

  constructor(private cadastroService: CadastroService) {
    this.alunoForm = new FormGroup({
      nome_do_aluno: new FormControl('', Validators.required),
      cpf_do_aluno: new FormControl('', Validators.required),
      data_nascimento_do_aluno: new FormControl('', Validators.required),
      endereco_do_aluno: new FormControl('', Validators.required),
      curso_do_aluno: new FormControl('', Validators.required),
      nota_do_aluno: new FormControl('', Validators.required),
      professor: new FormControl('', Validators.required)
    });
      this.professorForm = new FormGroup({
        nome_do_professor: new FormControl('', Validators.required),
        cpf_do_professor: new FormControl('', Validators.required),
        data_nascimento_do_professor: new FormControl('', Validators.required),
        endereco_do_professor: new FormControl('', Validators.required),
        salario_do_professor: new FormControl('', Validators.required),
        especializacao_do_professor: new FormControl('', Validators.required),
        disciplinas_ministradas_do_professor: new FormControl('', Validators.required)
      });
      this.teste = this.cadastroService.getAluno();
  }

  cadastroAluno(): void {
    if (!this.alunoForm.valid) {
      console.error('Não foi cadastrado nenhum aluno');
    } else {

      // Criando o objeto aluno corretamente
      const aluno = new Aluno(
        this.alunoForm.value.nome_do_aluno,
        this.alunoForm.value.cpf_do_aluno,
        new Date(this.alunoForm.value.data_nascimento_do_aluno),
        this.alunoForm.value.endereco_do_aluno,
        this.alunoForm.value.curso_do_aluno,
        Number(this.alunoForm.value.nota_do_aluno),
        this.alunoForm.value.professor
      );
      this.cadastroService.addAluno(aluno)
    }
  }

  cadastroProfessor() : void{
    if(!this.professorForm.valid){
      console.error('Não foi cadastrado nenhum professor');
      
    }
  }

}


// const aluno = new Aluno({
//   nome :this.alunoForm.value.nome_do_aluno,
//   cpf : this.alunoForm.value.cpf_do_aluno,
//   data_nascimento : this.alunoForm.value.data_nascimento_do_aluno,
//   endereco : this.alunoForm.value.endereco_do_aluno,
//   curso : this.alunoForm.value.curso_do_aluno,
//   nota : this.alunoForm.value.nota_do_aluno,
//   professor : this.alunoForm.value.professor
// })