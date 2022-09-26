var pesquisar__campo = document.querySelector(".pesquisar__campo")
pesquisar__campo.addEventListener("input", function () {
    nomeFiltro = this.value;
    var titulos = document.querySelectorAll(".titulo__noticia")
    if (nomeFiltro.length > 0) {
        titulos.forEach(function (titulo) {
            var tituloPai = titulo.parentNode;
            var tituloNoticia = titulo.textContent;
            var expressao = new RegExp(nomeFiltro, "i");
            if (!expressao.test(tituloNoticia)) {
                tituloPai.classList.add("invisivel")
            }
            else {
                tituloPai.classList.remove("invisivel");
            }
        });
    }
    else {
        titulos.forEach(function (titulo) {
            var tituloPai = titulo.parentNode;
            tituloPai.classList.remove("invisivel");
        });
    }

})