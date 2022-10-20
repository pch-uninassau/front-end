var noticia = {
  noticias: [
    {
      titulo: "TITULO1",
      descricao: "lorem ipsum 1",
      img :"/assets/bg-01.jpg"
    },
    {
      titulo: "TITULO2",
      descricao: "lorem ipsum 2",
      img :"/assets/fotoNoticia.svg"
    },
    {
      titulo: "TITULO3",
      descricao: "lorem ipsum 3 ",
      img :"/assets/bg-01.jpg"
    },
    {
      titulo: "TITULO4",
      descricao: "lorem ipsum 4",
      img :"/assets/bg-01.jpg"
    },
  ],
};
const urlParams = new URLSearchParams(window.location.search);
const id_usuario = urlParams.get("id");

noticia = noticia.noticias.filter((obj) => obj.titulo == id_usuario)[0];

var titulo = document.querySelector(".titulo__noticia").textContent = noticia.titulo;

var descricao = document.querySelector(".paragrafo__noticia").textContent = noticia.descricao;
 
var noticiasImagem = document.querySelector(".NoticiaImagem").src = noticia.img;
console.log(noticiasImagem)