import { Component, inject } from '@angular/core';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';
import { FormProductoComponent } from '../form-producto/form-producto.component';
import { Producto } from '../../models/producto';
import { FirestorageService } from '../../services/firestorage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-alta-producto',
  standalone: true,
  imports: [TablaPaisesComponent, FormProductoComponent],
  templateUrl: './alta-producto.component.html',
  styleUrl: './alta-producto.component.scss',
})
export class AltaProductoComponent {
  nombrePais?: string;
  formValue: any;

  fireStorage = inject(FirestorageService);
  toastr = inject(ToastrService);

  handleNombre($event: string) {
    this.nombrePais = $event;
  }
  handleForm($event: any) {
    this.formValue = $event;
    if (this.nombrePais && this.formValue) {
      const productoAux: Producto = {
        descripcion: this.formValue.descripcion,
        precio: this.formValue.precio,
        stock: this.formValue.stock,
        paisOrigen: this.nombrePais,
        comestible: this.formValue.comestible,
      };
      this.fireStorage
        .createUser(productoAux)
        .then(() => {
          this.toastr.success('Formulario Completado', 'Alta', {
            timeOut: 1000,
            positionClass: 'toast-bottom-right',
          });
        })
        .catch(() => {
          this.toastr.error('Formulario Iconrrecto', 'Firebase', {
            timeOut: 1000,
            positionClass: 'toast-bottom-right',
          });
        });
    }
  }
}
