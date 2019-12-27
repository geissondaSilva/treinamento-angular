import { Directive, Input, OnInit, ElementRef, HostBinding, HostListener } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
    selector: '[appAvatar]'
})
export class AvatarDirective implements OnInit {

    /**
     * Entrada de um dado do componente que está utilizando a diretiva
     */
    @Input('appAvatar') public form: FormGroup;

    /**
     * Pega a propriedade do elemento ou componente
     */
    @HostBinding('style.backgroundColor') public colorElement: string;

    /**
     * Pega os eventos que ocorrem no elemento ou componente
     */
    @HostListener('click') public onClick(){
        alert('Clicado!')
    }

    constructor(private element: ElementRef<HTMLDivElement>){

    }

    ngOnInit(){
        this.form.valueChanges.subscribe(value => {
            this.colorElement = value.cor;
            (this.element.nativeElement.firstChild as HTMLElement).style.color = value.corText;
            (this.element.nativeElement.firstChild as HTMLElement).innerText = value.label || '';
        })
    }
}