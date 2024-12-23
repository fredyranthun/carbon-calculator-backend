import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { ZipCodesService } from './zip-codes.service';

@ValidatorConstraint({ async: true })
export class IsValidZipCodeConstraint implements ValidatorConstraintInterface {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(zipCode: string, args: ValidationArguments) {
    return new ZipCodesService().findByZipCode(zipCode) !== undefined;
  }
}

export function IsValidZipCode(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidZipCodeConstraint,
    });
  };
}
