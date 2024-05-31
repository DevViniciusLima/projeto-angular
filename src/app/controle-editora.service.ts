import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Editora[];
  constructor() {
    this.editoras = [
      new Editora(0, 'São Brás'),
      new Editora(1, 'Abril'),
      new Editora(2, 'Rocco'),
    ]
  }
  getEditoras() {
    return this.editoras;
  }
  getNomeEditora(codEditora: number) {
    return this.editoras.filter((item) => {
      return item.codEditora == codEditora
    })[0].nome;
  }
}
