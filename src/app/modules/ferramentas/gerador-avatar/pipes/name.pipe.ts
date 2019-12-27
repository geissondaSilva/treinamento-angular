import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'name'
})
export class NamePipe implements PipeTransform {
    
    transform(value: any, ...args:any[]) {
        let retorno = '';
        value = value || '';
        for(let i = 0;i < args[0];i++){
            retorno += value[i]
        }
        return retorno + ' ' + args[1];
    }

}