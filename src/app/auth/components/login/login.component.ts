import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ValidationErrorsInterface } from 'src/app/shared/types/validationErrors.interface';
import { loginAction } from '../../store/actions/login.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  isSubmitting$: Observable<boolean>;
  validationErrors$: Observable<ValidationErrorsInterface>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.userForm.value,
    };
    this.store.dispatch(loginAction({ request }));
  }

  initializeForm(): void {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }
}
