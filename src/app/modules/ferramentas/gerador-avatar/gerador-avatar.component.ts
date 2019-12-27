import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gerador-avatar',
  templateUrl: './gerador-avatar.component.html',
  styleUrls: ['./gerador-avatar.component.css']
})
export class GeradorAvatarComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    cor: new FormControl(),
    label: new FormControl(),
    corText: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}
