import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ComponentsComponent } from './components.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes =[
  {
    path:'',
    component: ComponentsComponent,
    children: [
      { path: 'buttons', component: ButtonsComponent},
      { path: 'cards', component: CardsComponent},
      { path: 'register', component: RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRouterModule{}
