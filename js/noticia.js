var noticia = {
  noticias: [
    {
      titulo: "TITULO1",
      descricao: "lorem ipsum 1",
    },
    {
      titulo: "TITULO2",
      descricao: "lorem ipsum 2",
    },
    {
      titulo: "TITULO3",
      descricao: "lorem ipsum 3 ",
    },
    {
      titulo: "TITULO4",
      descricao: "lorem ipsum 4",
    },
  ],
};
const urlParams = new URLSearchParams(window.location.search);
const id_usuario = urlParams.get("id");

noticia = noticia.noticias.filter((obj) => obj.titulo == id_usuario)[0];

var titulo = document.querySelector(".titulo__noticia").textContent = noticia.titulo;

var descricao = document.querySelector(".paragrafo__noticia").textContent = noticia.descricao;
 

console.log(noticia);