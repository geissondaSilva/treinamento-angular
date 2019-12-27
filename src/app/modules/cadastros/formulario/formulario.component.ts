import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.criarForm();
  }

  public criarForm(): void {
    this.form = this.fb.group({
      titulo: [null],
      descricao: [null],
      perguntas: this.fb.array([
        this.criarFormPergunta()
      ])
    });
  }

  public criarFormPergunta(): FormGroup {
    return this.fb.group({
      titulo: [null],
      tipo: [null],
      opcoes: this.fb.array([
        this.fb.control([])
      ])
    })
  }

  get perguntas(): FormArray {
    return this.form.get('perguntas') as FormArray;
  }

  public novaPergunta() {
    this.perguntas.push(this.criarFormPergunta());
  }

  getOpcoes(i): FormArray {
    return ((this.form.get('perguntas') as FormArray).at(i) as FormGroup).get('opcoes') as FormArray;
  }

  public novaOpcao(i) {
    (((this.form.get('perguntas') as FormArray).at(i) as FormGroup).get('opcoes') as FormArray).push(new FormControl);
  }




}
