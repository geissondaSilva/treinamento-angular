import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  public criarForm(): void {
    this.form = this.fb.group({
      razaoSocial: [null],
      fantasia: [null],
      cnpj: [null],
      segmentos: new FormArray([new FormControl()]),
      contatos: this.fb.array([
        this.criarFormContatos()
      ])
    });
  }

  public criarFormContatos(): FormGroup {
    return this.fb.group({
      pessoa: [null],
      telefone: [null]
    });
  }

  public get segmentos(): FormArray {
    return this.form.get('segmentos') as FormArray;
  }

  public get contatos(): FormArray {
    return this.form.get('contatos') as FormArray;
  }

  public novoSegmento() {
    this.segmentos.push(new FormControl());
  }

  public novoContato() {
    this.contatos.push(this.criarFormContatos());
  }
}
