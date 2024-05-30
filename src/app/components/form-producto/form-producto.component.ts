import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-producto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-producto.component.html',
  styleUrl: './form-producto.component.scss',
})
export class FormProductoComponent {
  fb = inject(FormBuilder);
  toastr = inject(ToastrService);

  form = this.fb.nonNullable.group({
    descripcion: ['', Validators.required],
    precio: ['', [Validators.required, Validators.min(0)]],
    stock: ['', [Validators.required, Validators.min(0)]],
    comestible: ['true', Validators.required],
  });

  formValue: any;

  @Output() eventForm = new EventEmitter<any>();

  onSubmit() {
    if (this.form.valid) {
      const value = this.form.getRawValue();
      const aux = {
        descripcion: value.descripcion,
        precio: value.precio,
        stock: value.stock,
        comestible: value.comestible,
      };
      this.eventForm.emit(aux);
    }
  }
}
