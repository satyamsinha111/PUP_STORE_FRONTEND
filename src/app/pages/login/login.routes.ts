import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=> import("./login.component").then(c=>c.LoginComponent)
    }
];