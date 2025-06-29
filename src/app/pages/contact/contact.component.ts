import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Component} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {ApiService} from '../../services/api/api.service';
import {ContactHeaderComponent} from './header/header.component';

@Component({
  selector: 'app-contact',
  imports: [ContactHeaderComponent,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ]
})
export class ContactComponent {

  nameFormGroup = this._formBuilder.group({
    first: ['', Validators.required],
    middle: [''],
    last: ['', Validators.required],
  });
  mailFormGroup = this._formBuilder.group({
    email: ['', Validators.email],
  });
  messageFormGroup = this._formBuilder.group({
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private api: ApiService
  ) {
  }

  capitalizeFirstLetter(s: string) {
    s = s.trim()
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  getName() {
    let name = this.capitalizeFirstLetter(this.nameFormGroup.get('first')?.value!) + ' ';

    if (this.nameFormGroup.get('middle')?.value != '') {
      name += this.capitalizeFirstLetter(this.nameFormGroup.get('middle')?.value!) + ' ';
    }
    return name + this.capitalizeFirstLetter(this.nameFormGroup.get('last')?.value!)
  }

  async submit() {

    const response = await this.api.post('contact', {
      name: this.getName(),
      email: this.mailFormGroup.get('email')?.value,
      subject: this.messageFormGroup.get('subject')?.value,
      message: this.messageFormGroup.get('message')?.value
    })

    if (response.success) {
      this._snackBar.open('Contact form submitted', 'Ok', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    } else {

      this._snackBar.open(response.error.message, 'Ok', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

    }


  }

}
