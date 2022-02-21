import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiModeModule, TuiButtonModule } from '@taiga-ui/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { AuthService } from './services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from './store/effects/register.effect';
import { BackendErrorsMessagesModule } from '../shared/modules/backendErrorsMessages.module';
import { PersistenceService } from '../shared/services/persistence.service';
import { LoginComponent } from './components/login/login.component';
import { LoginEffect } from './store/effects/login.effect';
const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackendErrorsMessagesModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
