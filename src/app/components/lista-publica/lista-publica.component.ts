import { Component, inject } from '@angular/core';
import { ListaProductoComponent } from '../lista-producto/lista-producto.component';
import { FirestorageService } from '../../services/firestorage.service';
import { ProductoId } from '../../models/producto';

@Component({
  selector: 'app-lista-publica',
  standalone: true,
  imports: [ListaProductoComponent],
  templateUrl: './lista-publica.component.html',
  styleUrl: './lista-publica.component.scss',
})
export class ListaPublicaComponent {
  productos?: ProductoId[];
  storage = inject(FirestorageService);
  ngOnInit(): void {
    this.storage.getUsers().subscribe((data) => {
      this.productos = data;
    });
  }
}
