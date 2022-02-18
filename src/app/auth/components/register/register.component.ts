import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
export class RegisterComponent {
  readonly userForm = new FormGroup({
    username: new FormControl('username', Validators.required),
    email: new FormControl('email', Validators.required),
    password: new FormControl('password', Validators.required),
  });

  onSubmit(): void {
    console.log(this.userForm.value);
  }

  initializeForm(): void {}
}
