import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CadastroService } from '../../services/cadastro.service';
import { Professor } from '../../models/professor';
import { Aluno } from '../../models/aluno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms-login',
  imports: [ReactiveFormsModule],
  templateUrl: './forms-login.component.html',
  styleUrl: './forms-login.component.css'
})
export class FormsLoginComponent {
  alunoForm: FormGroup;
  professorForm: FormGroup;

  professorCadastrado?: Professor

  constructor(private cadastroService: CadastroService, private router: Router) {
    this.alunoForm = new FormGroup({
      nome_do_aluno: new FormControl('', Validators.required),
      cpf_do_aluno: new FormControl('', Validators.required),
      data_nascimento_do_aluno: new FormControl('', Validators.required),
      endereco_do_aluno: new FormControl('', Validators.required),
      curso_do_aluno: new FormControl('', Validators.required),
      nota_do_aluno: new FormControl('', Validators.required),
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
  }
  cadastroProfessor(): void {
    if (!this.professorForm.valid) {
      console.error('Não foi cadastrado nenhum professor');
      return;
    } else {
      const professor = new Professor(
        this.professorForm.value.nome_do_professor,
        this.professorForm.value.cpf_do_professor,
        new Date(this.professorForm.value.data_nascimento_do_professor),
        this.professorForm.value.endereco_do_professor,
        Number(this.professorForm.value.salario_do_professor),
        this.professorForm.value.especializacao_do_professor,
        this.professorForm.value.disciplinas_ministradas_do_professor,
      )
      alert("Professor cadastrado")
      this.professorCadastrado = professor;
    }
  }

  cadastroAluno(): void {
    if (!this.professorCadastrado) {
      console.error('Nenhum professor cadastrado! Cadastre um professor antes de adicionar um aluno.');
      return;
    }
    if (this.alunoForm.valid) {
      const aluno = new Aluno(
        this.alunoForm.value.nome_do_aluno,
        this.alunoForm.value.cpf_do_aluno,
        new Date(this.alunoForm.value.data_nascimento_do_aluno),
        this.alunoForm.value.endereco_do_aluno,
        this.alunoForm.value.curso_do_aluno,
        Number(this.alunoForm.value.nota_do_aluno),
        this.professorCadastrado
      )
      alert("Professor cadastrado")
      this.cadastroService.addAluno(aluno)
      this.router.navigate(['/home-lista'])
    }
  }

}


