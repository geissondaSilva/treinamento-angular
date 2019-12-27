import { ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';

export const NomeValidator: ValidatorFn = (control: FormControl): ValidationErrors => {
    if (control.value === 'Heloize') {
        return { invalid: { message: 'Este nome não existe no planeta terra' } };
    }
    return null;
};
