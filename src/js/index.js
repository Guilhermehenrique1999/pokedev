/*
Objetivo quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto e mostra o cartão corespondente ao que foi selecionado da listagem 
PASSO 1 - Precisamos criar uma variavel no JS pra trabalhar com a listagem de pokedevs
PASSO 2 - Identificar o evento de clique no elemento das listagem 
PASSO 3 - Remover a classe aberto so do cartão que esta aberto 
PASSO 4 - Ao clicar em um pokedev da lista pegamos o id desse pokedev para saber qual cartão abrir
PASSO 5 - Remover a classe ativo que marca o pokedev selecionado da listagem 
PASSO 6 - adicionar a clase ativo no pokedev selecionado da listagem 
*/

//PASSO 1 - Precisamos criar uma variavel no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log(listaSelecaoPokedevs);

//PASSO 2 - Identificar o evento de clique no elemento das listagem
listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", () =>{
        //PASSO 3 - Remover a classe aberto so do cartão que esta aberto
        const cartaoPokedevAberto = document.querySelector(".aberto");
        cartaoPokedevAberto.classList.remove("aberto");

        //PASSO 4 - Ao clicar em um pokedev da lista pegamos o id desse pokedev para saber qual cartão abrir
        const idPokedevSelecionado = pokedev.attributes.id.value;
        const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
        const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
        cartaoPokedevParaAbrir.classList.add("aberto");

        //PASSO 5 - Remover a classe ativo que marca o pokedev selecionado da listagem
        const pokedevAtivoNaListagem = document.querySelector(".ativo");
        pokedevAtivoNaListagem.classList.remove("ativo")

        //PASSO 6 - adicionar a clase ativo no pokedev selecionado da listagem 
        const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
        pokedevSelecionadoNaListagem.classList.add("ativo")
         
    })
})


