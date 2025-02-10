import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from '../../services/cadastro.service';

@Component({
  selector: 'app-forms-login',
  imports: [],
  templateUrl: './forms-login.component.html',
  styleUrl: './forms-login.component.css'
})
export class FormsLoginComponent {
  userForm : FormGroup;
  
  constructor(private cadastroService : CadastroService){
    this.userForm = new FormGroup({
      name : new FormControl('',Validators.required),
      

    })
  }
}
