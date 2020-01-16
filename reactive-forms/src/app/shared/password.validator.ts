import { AbstractControl } from '@angular/forms';
import { ifStmt } from '@angular/compiler/src/output/output_ast';

export function PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password.pristine || confirmPassword.pristine) {
        return null;
    }

    return password && confirmPassword && password.value != confirmPassword.value ?
        { 'misMatch': true } : null;
}