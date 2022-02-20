import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { ValidationErrorsInterface } from 'src/app/shared/types/validationErrors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: ValidationErrorsInterface | null;
}
