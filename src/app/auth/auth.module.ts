import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputPasswordModule, TuiInputModule } from '@taiga-ui/kit';
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
    TuiInputPasswordModule,
    TuiInputModule,
    TuiModeModule,
    TuiButtonModule,
  ],
  declarations: [RegisterComponent],
})
export class AuthModule {}
