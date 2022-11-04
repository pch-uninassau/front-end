var noticia = {
  noticias: [
    {
      titulo: "TITULO1",
      titulo_noticia:"O que é crise hidrica?",
      descricao: "Uma crise hídrica ocorre quando uma área não tem água potável suficiente para atender às necessidades locais. Com isso em mente, vamos repassar alguns conceitos Em primeiro lugar, a água é um recurso reutilizável, portanto, dependendo da forma de uso, pode ser reutilizada para outras funções, economizando água. No uso doméstico, por exemplo, a água da lavanderia pode ser usada para limpar as calçadas, a água do banho pode ser reutilizada na descarga e, com a coleta da água da chuva, os jardins podem ser regados. Em segundo lugar, a água é um recurso finito. Isso significa que, sem consumo responsável, o planeta pode ficar sem água potável. Além disso, embora seja reutilizável - como mencionamos - a água reutilizada é recomendada para usos não potáveis. Isso significa que ainda não está disponível para consumo humano,",
      img :"/assets/bg-01.jpg"
    },
    {
      titulo: "TITULO2",
      titulo_noticia:"Quais as causas de uma crise hidrica",
      descricao: "As crises hídricas podem ter muitas causas, mas na maioria das vezes são causadas pela má gestão da água e negligência do governo. De acordo com um comunicado do Global Waste Institute, em 2019, 17 países (cerca de um quarto da população mundial) já enfrentavam escassez de água e 44 países enfrentavam grave escassez de água. Além disso, vale lembrar que com a tendência de crescimento populacional, a demanda por água também tende a aumentar. Como resultado, essa disparidade entre oferta e demanda torna os países cada vez mais vulneráveis ​​às crises hídricas.A seguir, veremos quais setores usam mais água, como e por que esse uso contribui para a crise hídrica.De acordo com a Organização das Nações Unidas para Agricultura e Alimentação (FAO), a atividade que mais consome água é o setor agrícola – incluindo pecuária, produção de alimentos e irrigação – que responde por 70% do uso humano de água.",
      img :"/assets/fotoNoticia.svg"
    },
    {
      titulo: "TITULO3",
      titulo_noticia:"Consequências da crise hidrica",
      descricao: "As consequências da crise hídrica são econômicas, sociais, políticas e ambientais.Como mencionado anteriormente, as crises hídricas terão impactos ambientais ao afetar os ecossistemas. Por exemplo, em Pocone, berço do Pantanal Mato-grossense, um dos principais rios da região, o Bento Gómez, enfrentou uma seca anterior devido à redução das chuvas. Secas fora da estação natural afetam ecossistemas locais inteiros, como flora e fauna; as árvores param de dar frutos, os animais começam a morrer de fome ou os pântanos secam e a vida aquática é prejudicada, impedindo que outros animais, como crocodilos, se alimentem. Esse efeito se estende à população local, que enfrenta o baixo nível do reservatório local, afetando a população ao longo do dia.Em relação às consequências econômicas e sociais, os efeitos da crise hídrica podem ser sentidos na pecuária brasileira nesta reportagem da BBC Brasil, conforme mostra pesquisa realizada na USP Ribeirão Preto, ",
      img :"/assets/bg-01.jpg"
    },
    {
      titulo: "TITULO4",
      titulo_noticia:"Como é o cenário brasileiro diante das crises hídricas?",
      descricao: "As consequências da crise hídrica são econômicas, sociais, políticas e ambientais.Como mencionado anteriormente, as crises hídricas terão impactos ambientais ao afetar os ecossistemas. Por exemplo, em Pocone, berço do Pantanal Mato-grossense, um dos principais rios da região, o Bento Gómez, enfrentou uma seca anterior devido à redução das chuvas. Secas fora da estação natural afetam ecossistemas locais inteiros, como flora e fauna; as árvores param de dar frutos, os animais começam a morrer de fome ou os pântanos secam e a vida aquática é prejudicada, impedindo que outros animais, como crocodilos, se alimentem. Esse efeito se estende à população local, que enfrenta o baixo nível do reservatório local, afetando a população ao longo do dia.Em relação às consequências econômicas e sociais, os efeitos da crise hídrica podem ser sentidos na pecuária brasileira nesta reportagem da BBC Brasil, conforme mostra pesquisa realizada na USP Ribeirão Preto,",
      img :"/assets/bg-01.jpg"
    },
  ],
};
const urlParams = new URLSearchParams(window.location.search);
const id_usuario = urlParams.get("id");

noticia = noticia.noticias.filter((obj) => obj.titulo == id_usuario)[0];

var titulo = document.querySelector(".titulo__noticia").textContent = noticia.titulo_noticia;

var descricao = document.querySelector(".paragrafo__noticia").textContent = noticia.descricao;
 
var noticiasImagem = document.querySelector(".NoticiaImagem").src = noticia.img;
console.log(noticiasImagem)