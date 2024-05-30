import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductoId } from '../../models/producto';

@Component({
  selector: 'app-lista-producto',
  standalone: true,
  imports: [],
  templateUrl: './lista-producto.component.html',
  styleUrl: './lista-producto.component.scss',
})
export class ListaProductoComponent {
  @Input() productos?: ProductoId[] = [];
  @Output() event = new EventEmitter<ProductoId>();

  mostrarElementos: boolean = true;

  eventoItemLista(pelicula: ProductoId) {
    this.event.emit(pelicula);
  }

  cambiarVista() {
    if (this.mostrarElementos) {
      this.mostrarElementos = false;
    } else {
      this.mostrarElementos = true;
    }
  }
}
