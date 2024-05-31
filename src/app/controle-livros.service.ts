import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  codigoGeral = 0;
  livros: Livro[];
  constructor() {
    this.livros = [
      new Livro(0, 2, 'Harry Potter', 'jrigjrhjrojn', ['Jk', 'Mj']),
      new Livro(1, 0, 'Harry Potter 2', 'jrigjrhjrojn', ['Jk']),
      new Livro(2, 1, 'Harry Potter 3', 'jrigjrhjrojn', ['Jk']),
    ]
  }

  obterLivros() {
    return this.livros;
  }

  incluir(livro: Livro){
    this.codigoGeral+=1
    livro.codigo = this.codigoGeral
    this.livros.push(livro)
  }
  
  excluir(codigo: number){
    const ind = this.livros.findIndex(item => item.codigo == codigo)
    this.livros.splice(ind, 1)    
  }

}
