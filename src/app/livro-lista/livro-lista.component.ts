import { Component, OnInit } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent implements OnInit {
  editoras: Editora[]=[];
  livros: Livro[]=[];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService) {

  }
  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }
  excluir = (codigo: number)=>{
    this.servLivros.excluir(codigo)
    this.livros = this.servLivros.obterLivros()
  }
  obterNome = (cod: number) => {
    return this.servEditora.getNomeEditora(cod);
  }
}
