var excluirMenu = document.querySelector(".excluir");
var menuLateral = document.querySelector(".menu-lateral-mobile");
var iconeMenu = document.querySelector(".menu");
excluirMenu.addEventListener("click",()=>{
    console.log("asdasdasd")
    menuLateral.classList.add("menu--escondido");
    menuLateral.classList.remove("menu--ativo");
})



iconeMenu.addEventListener("click",()=>{
    console.log(iconeMenu)
    menuLateral.classList.add("menu--ativo");
    menuLateral.classList.remove("menu--escondido");

})