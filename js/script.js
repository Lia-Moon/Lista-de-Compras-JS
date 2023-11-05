
// Adicionar itens na lista de compras
var addButton = document.querySelector('#botaoAdicionarProduto');
var itemLista = document.querySelector(".main__content--itens-lista");
var novoProduto = document.querySelector("#novoProduto");

addButton.addEventListener("click", adicionarProduto);

function adicionarProduto() {
    var itemAdicionado = '<li>' + novoProduto.value + '</li>';
    itemLista.innerHTML += itemAdicionado;
    novoProduto.value = '';
    novoProduto.focus();
}

novoProduto.addEventListener('keyup', (teclaPressionada) => {
    if(teclaPressionada.code === 'NumpadEnter' || teclaPressionada.code  === 'NumpadAdd' || teclaPressionada.code  === 'Enter') {
        adicionarProduto();
    }
})