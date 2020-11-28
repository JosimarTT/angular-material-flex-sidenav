import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared-reactive-input',
  templateUrl: './shared-reactive-input.component.html',
  styleUrls: ['./shared-reactive-input.component.scss'],
})
export class SharedReactiveInputComponent implements OnInit {
  @Input() icon: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() appearance: string;
  @Input() newValue: EventEmitter<string> = new EventEmitter();
  @Input() partialFormControlName: string;
  @Input() prefix = '';
  @Input() textLimit = '';

  @Output() componentReady: EventEmitter<FormGroup> = new EventEmitter<
    FormGroup
  >();
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  componentFormGroup: FormGroup;
  private _required: boolean;
  private _minLength: number;

  @Input()
  get required() {
    return this._required;
  }
  set required(value: any) {
    this._required = coerceBooleanProperty(value);
  }

  @Input()
  get minLength() {
    return this._minLength;
  }
  set minLength(value: any) {
    this._minLength = Number(value);
  }

  constructor(private formBuilder: FormBuilder) {
    this.componentFormGroup = this.formBuilder.group({});
  }

  ngOnInit(): void {
    const validators = [];
    if (this.required) {
      validators.push(Validators.required);
    }
    if (this.minLength > 0) {
      validators.push(Validators.minLength(this.minLength));
    }

    this.componentFormGroup.addControl(
      this.partialFormControlName,
      this.formBuilder.control('', validators),
    );

    this.componentFormGroup
      .get(this.partialFormControlName)
      .valueChanges.subscribe(() =>
        this.valueChange.emit(
          this.componentFormGroup.get(this.partialFormControlName).value,
        ),
      );

    this.componentReady.emit(this.componentFormGroup);
  }
}
