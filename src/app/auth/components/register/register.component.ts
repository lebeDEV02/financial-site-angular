import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {
  tuiInputPasswordOptionsProvider,
  TUI_PASSWORD_TEXTS,
} from '@taiga-ui/kit';
import { of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    tuiInputPasswordOptionsProvider({
      icons: {
        hide: 'tuiIconLockLarge',
        show: 'tuiIconLockOpenLarge',
      },
    }),
    {
      provide: TUI_PASSWORD_TEXTS,
      useValue: of(['']),
    },
  ],
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(this.userForm.value);
  }

  initializeForm(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }
}
