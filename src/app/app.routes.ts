import { Routes } from '@angular/router';
import { FormsLoginComponent } from './pages/forms-login/forms-login.component';
import { ListaComponent } from './pages/lista/lista.component';

export const routes: Routes = [
    {
        path : 'cadastro' ,
        title: 'Cadastro' ,
        component : FormsLoginComponent
    },
    {
        path: 'home-lista',
        title: 'Home',
        component : ListaComponent
    },

    {path : '', redirectTo:'/cadastro', pathMatch : 'full'}

];
