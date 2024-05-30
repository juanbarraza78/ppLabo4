import { Component, Input } from '@angular/core';
import { ProductoId } from '../../models/producto';

@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.scss',
})
export class DetalleProductoComponent {
  @Input() producto?: ProductoId;
}
