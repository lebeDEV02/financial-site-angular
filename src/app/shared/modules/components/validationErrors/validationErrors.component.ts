import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrorsInterface } from 'src/app/shared/types/validationErrors.interface';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validationErrors.component.html',
  styleUrls: ['./validationErrors.component.scss'],
})
export class ValidationErrorsComponent implements OnInit {
  @Input('validationErrors') validationErrorsProps: ValidationErrorsInterface;

  validationErrors: string[];

  ngOnInit(): void {
    this.validationErrors = Object.keys(this.validationErrorsProps).map(
      (name: string) => {
        const messages = this.validationErrorsProps[name].join(' ');
        return `${name} ${messages}`;
      }
    );
  }
}
