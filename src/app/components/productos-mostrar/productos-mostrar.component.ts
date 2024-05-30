import { Component, inject } from '@angular/core';
import { ListaProductoComponent } from '../lista-producto/lista-producto.component';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';
import { ProductoId } from '../../models/producto';
import { FirestorageService } from '../../services/firestorage.service';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-productos-mostrar',
  standalone: true,
  imports: [ListaProductoComponent, DetalleProductoComponent],
  templateUrl: './productos-mostrar.component.html',
  styleUrl: './productos-mostrar.component.scss',
})
export class ProductosMostrarComponent {
  productos?: ProductoId[];
  producto?: ProductoId;

  listaPaises: any = [];
  pais: any;

  storage = inject(FirestorageService);
  paises = inject(PaisesService);

  ngOnInit(): void {
    this.storage.getUsers().subscribe((data) => {
      this.productos = data;
    });
    this.paises.getData().subscribe((data: any) => {
      this.listaPaises = data;
      console.log(data);
    });
  }

  eventActoresPadre($event: ProductoId) {
    this.producto = $event;
    //Busca el pais
    this.listaPaises.forEach((pais: any) => {
      if (pais.name.common == $event.paisOrigen) {
        this.pais = pais;
      }
    });
  }
}
