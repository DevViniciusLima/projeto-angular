export class Livro {
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
    constructor(_codigo:number,_codEditora:number,_titulo:string, _resumo:string,_autores:string[]){
        this.codigo=_codigo;
        this.codEditora=_codEditora;
        this.titulo=_titulo;
        this.resumo=_resumo;
        this.autores=_autores;
    }
}

