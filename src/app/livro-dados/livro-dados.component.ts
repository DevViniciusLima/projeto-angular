import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { Router, RouterModule } from '@angular/router';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent implements OnInit{

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras()
  }

  public livro: Livro = new Livro(0, 0, '','',[]);
  autoresForm: string = '';
  editoras: Editora[] = [];

  constructor(private servEditora: ControleEditoraService, private servLivros: ControleLivrosService, private router: Router) {}

  incluir = () => {
    this.livro.autores = this.autoresForm.split('\n')
    this.servLivros.incluir(this.livro)
    this.router.navigateByUrl('/lista')
  }

}
