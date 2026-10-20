"use strict";
// array de objetos Literais
Object.defineProperty(exports, "__esModule", { value: true });
const livros = []; // isto é um array vazio
//criando um objeto literal
const racionais = {
    id: 0,
    titulo: "Racionais Mcs",
    subtitulo: "sobrevivendo no inferno",
    isbn: "978-85-359-3173-0",
    editora: "Companhia das Letras",
    ano: 2018
};
//adicionando um objeto literal no array
livros.push(racionais);
//console.log(livros)
//adicao direta de um objeto literal
livros.push({
    id: 1,
    titulo: "Harry Potter e a Pedra Filosofal",
    subtitulo: "",
    isbn: "978-8532511010",
    editora: "Rocco",
    ano: 1997
});
//como ficou
console.log(livros);
//encontrando valores especificos
console.log("livro na posicao 0", livros[0]);
console.log("ISBN do livro na posicao 0", livros[0]?.isbn);
console.log("Titulo do livro na posicao 0", livros[1]?.titulo);
// criando a classe livro
class Livro {
    titulo;
    subtitulo;
    isbn;
    editora;
    ano;
    constructor(titulo, subtitulo, isbn, editora, ano) {
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.isbn = isbn;
        this.editora = editora;
        this.ano = ano;
    }
}
//# sourceMappingURL=arrayOL.js.map