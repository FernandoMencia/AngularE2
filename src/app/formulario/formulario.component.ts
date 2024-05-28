import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  userForm = new FormGroup({
    firstName : new FormControl('', [Validators.required]),
    lastName : new FormControl('', [Validators.required]),
    userName : new FormControl('', [Validators.required]),
    nationality : new FormControl('', [Validators.required]),
    city : new FormControl('', [Validators.required]),
    country : new FormControl('', [Validators.required]),
    job : new FormControl('', [Validators.required]),
      })

  onSubmit() { console.log(this.userForm.value)};
}
