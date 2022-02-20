import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ValidationErrorsComponent } from './components/validationErrors/validationErrors.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ValidationErrorsComponent],
  exports: [ValidationErrorsComponent],
})
export class BackendErrorsMessagesModule {}
