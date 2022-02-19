import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiModeModule, TuiButtonModule } from '@taiga-ui/core';
const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiModeModule,
    TuiButtonModule,
  ],
  declarations: [RegisterComponent],
})
export class AuthModule {}
