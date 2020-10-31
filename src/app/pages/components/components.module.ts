import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { RegisterComponent } from './register/register.component';
import { ComponentsRouterModule } from './componets.routes';



@NgModule({
  declarations: [ComponentsComponent, ButtonsComponent, CardsComponent, RegisterComponent],
  imports: [
    CommonModule,
    ComponentsRouterModule
  ]
})
export class ComponentsModule { }
