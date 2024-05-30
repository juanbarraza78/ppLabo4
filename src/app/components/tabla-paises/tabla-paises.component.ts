import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-paises',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabla-paises.component.html',
  styleUrl: './tabla-paises.component.scss',
})
export class TablaPaisesComponent implements OnInit {
  private paises = inject(PaisesService);
  @Output() eventNombre = new EventEmitter<string>();
  listaPaises: any[] = [];

  selectedItem: number | null = null;
  nombreSeleccionado: string = '';

  selectItem(index: number) {
    this.selectedItem = index;
  }
  seleccionarNombre(nombre: string) {
    this.eventNombre.emit(nombre);
  }

  ngOnInit(): void {
    this.paises.getData().subscribe(
      (data: any) => {
        this.listaPaises = data;
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
