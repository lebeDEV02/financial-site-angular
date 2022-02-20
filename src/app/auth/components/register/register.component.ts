import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ValidationErrorsInterface } from 'src/app/shared/types/validationErrors.interface';
import { registerAction } from '../../store/actions/register.action/register.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { RegisterRequestInterface } from '../../types/registerRequest.interface.';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  isSubmitting$: Observable<boolean>;
  validationErrors$: Observable<ValidationErrorsInterface>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  onSubmit(): void {
    const request: RegisterRequestInterface = {
      user: this.userForm.value,
    };
    this.store.dispatch(registerAction({ request }));
  }

  initializeForm(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
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
