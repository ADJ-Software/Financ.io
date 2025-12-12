import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-box-component',
  imports: [],
  providers: [],
  templateUrl: './input-box-component.html',
  styleUrl: './input-box-component.scss',
})
export class InputBoxComponent implements ControlValueAccessor, OnInit {
  @Input() label: string = '';
  @Input() inputType: 'text' | 'date' = 'text';
  @Input() isDisabled: boolean = false;
  @Input() placeholderText: string = '';
  @Input() inputId :string = "defaultId"
  
  value: string = '';
  onChangeFn: (value: any) => void = () => {};
  onTouchedFn: () => void = () => {};

  //@param ngControl
  constructor(@Self() @Optional() public ngControl: NgControl) {
    if (!ngControl) {
      throw Error(
        'The input box component should be used inside a form, with the reactive forms module'
      );
    } else {
      //configure the value administrator for the form control to the own component
      this.ngControl.valueAccessor = this;
    }
  }

  get errorMessage() {
    if (this.ngControl.control?.hasError('required') && this.control?.touched) {
      return 'Esse campo é obrigatorio';
    }
    if (this.ngControl.control?.hasError('min')) {
      return `O valor mínimo é ${this.controlErrors?.['min'].min}`;
    }
    if (this.ngControl.control?.hasError('max')) {
      return `O valor máximo é ${this.controlErrors?.['max'].max}`;
    }
    if (this.ngControl.control?.hasError('email')) {
      return 'O Email deve ser válido';
    }
    if (this.ngControl.control?.hasError('minLength')) {
      return  `O tamanho minímo do valor é ${this.controlErrors!['minlength'].requiredLength}`
    }
    if (this.ngControl.control?.hasError('maxLength')) {
      return  `O tamanho minímo do valor é ${this.controlErrors!['minlength'].requiredLength}`
    }
    else{
      return "Error message not implemented"
    }
  }

  get controlErrors(){
    return this.control?.errors!
  }
  get control(){
    return this.ngControl.control
  }
  get requiredValidator() {
    return Validators.required;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  //registers the callback function to notify changes to angular
  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }
  //registers the callback function to notify onTouch to angular

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  ngOnInit(): void {}

  handleChange(event: Event): void {
    const inputVal = (event.target as HTMLInputElement).value;
    this.value = inputVal;
    this.onChangeFn(inputVal);
  }

  onBlur(): void {
    this.onTouchedFn(); // Set touched = true
  }
}
