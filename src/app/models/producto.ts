export class Producto {
  descripcion?: string;
  precio?: number;
  stock?: number;
  paisOrigen?: string;
  comestible?: boolean;
}

export class ProductoId extends Producto {
  codigo?: string;
}
