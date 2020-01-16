import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from './shared/username.validator';
import { PasswordValidator } from './shared/password.validator';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private service: RegistrationService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, { validator: PasswordValidator });

    this.registrationForm.get('subscribe').valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email.setValidators(Validators.required);
        } else {
          email.clearAsyncValidators();
        }
        email.updateValueAndValidity();
      });
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmails() {
    this.alternateEmails.push(this.fb.control(''));
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  /*
  registrationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });
  */

  loadApiData() {
    //all fields is required
    /*this.registrationForm.setValue({
      username: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'City',
        state: 'State',
        postalCode: '123456'
      }
    });*/

    this.registrationForm.patchValue({
      username: 'Bruce',
      password: 'test',
      confirmPassword: 'test',
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.service.register(this.registrationForm.value).subscribe(
      response => console.log('Sucess!', response),
      error => console.log('Error', error)
    );
  }
}
