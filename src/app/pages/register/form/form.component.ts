import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { comparePassword } from 'src/app/utils/validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public userRegisterForm!: FormGroup;
  public nameFormControl!: FormControl;
  public passwordFormControl!: FormControl;
  public passwordRepeatFormControl!: FormControl;

  public submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}


  ngOnInit(){
    this.initForm();
  }

  private initForm(): void {
  //Form Group
    this.userRegisterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      passwordRepeat: ['', [Validators.required, Validators.maxLength(20)]],
    },
    {
      validator:comparePassword('password', 'passwordRepeat')
    });

    //Form Control
    this.nameFormControl = this.userRegisterForm.get('name') as FormControl;
    this.passwordFormControl = this.userRegisterForm.get('password') as FormControl;
    this.passwordRepeatFormControl = this.userRegisterForm.get('passwordRepeat') as FormControl;
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.userRegisterForm);
    this.userRegisterForm.reset();

  }

}
