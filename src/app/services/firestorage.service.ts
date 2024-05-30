import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@angular/fire/storage';
import { Producto, ProductoId } from '../models/producto';

const PATH = 'producto';

@Injectable({
  providedIn: 'root',
})
export class FirestorageService {
  private _firestore = inject(Firestore);
  private storage = inject(Storage);
  private _collection = collection(this._firestore, PATH);

  getUsers() {
    return collectionData(this._collection, { idField: 'id' }) as Observable<
      ProductoId[]
    >;
  }
  createUser(producto: Producto) {
    return addDoc(this._collection, producto);
  }
  updateUser(id: string, producto: Producto) {
    return updateDoc(this.document(id), { ...producto });
  }
  deleteUser(id: string) {
    return deleteDoc(this.document(id));
  }
  private document(id: string) {
    return doc(this._firestore, `${PATH}/${id}`);
  }

  // async agregarPelicula(pelicula: any, foto: File, actores: Array<Actor>) {
  //   //pReferencia: StorageReference
  //   let hora = new Date().getTime(); //obtengo hora actual
  //   let ubicacion = '/' + pelicula.nombre + hora; //le digo la ubicacion de la foto en el firebaseStorage
  //   const imgRef = ref(this.storage, ubicacion);
  //   let retorno = false;
  //   await uploadBytes(imgRef, foto).then(async () => {
  //     const url = await getDownloadURL(imgRef)
  //       .then(async (resultado) => {
  //         let data: Pelicula = {
  //           nombre: pelicula.nombre,
  //           tipo: pelicula.tipo,
  //           fechaDeEstreno: pelicula.fechaDeEstreno,
  //           cantidadDePublico: pelicula.cantidadDePublico,
  //           fotoDeLaPelicula: resultado,
  //           actores: actores,
  //         };
  //         const usuarioRef = collection(this._firestore, 'peliculas');
  //         await addDoc(usuarioRef, data)
  //           .then((resultado) => {
  //             retorno = true;
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //           });
  //       })
  //       .catch((error) => {});
  //   });
  //   return retorno;
  // }

  // getPeliculas() {
  //   const peliculaRef = collection(this._firestore, 'peliculas');
  //   return collectionData(peliculaRef, { idField: 'id' }) as Observable<
  //     PeliculaId[]
  //   >;
  // }
}
