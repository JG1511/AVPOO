import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno';
import { Professor } from '../models/professor';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private alunos: Aluno[] = [];
  private professor: Professor[] = [];

  constructor() { }

  getAluno(): Aluno[] {
    return this.alunos;
  }
  getProfessor(): Professor[] {
    return this.professor;
  }
  addAluno(aluno : Aluno): void{
    this.alunos.push(aluno);
  }
  addProfessor(professor1 : Professor){
    this.professor.push(professor1);
  }
}
