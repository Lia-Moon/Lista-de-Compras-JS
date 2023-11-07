
// Adicionar itens na lista de compras
var itemLista = document.querySelector(".main__content--itens-lista");
var addButton = document.querySelector("#botaoAdicionarProduto");
var novoProduto = document.querySelector("#novoProduto");

addButton.addEventListener("click", adicionarProduto);

function adicionarProduto() {
    if(novoProduto.value != '') {
        var itemAdicionado = '<li> <i class="fa-regular fa-circle"></i><i class="fa-solid fa-circle"></i>' + novoProduto.value + '</li><button><i class="fa-solid fa-circle-minus"></i></button>';
        itemLista.innerHTML += itemAdicionado;
        novoProduto.value = '';
        novoProduto.focus();
    }
}

novoProduto.addEventListener('keyup', (teclaPressionada) => {
    if((teclaPressionada.code === 'NumpadEnter' || teclaPressionada.code  === 'NumpadAdd' || teclaPressionada.code  === 'Enter') && novoProduto.value != '') {
        adicionarProduto();
    }
})

// Remover itens da lista de compras
var removeButton = document.querySelector("#botaoRemoverProduto");

removeButton.addEventListener("click", removerProduto);

function removerProduto() {
    var itemAdicionado = '<li> <i class="fa-regular fa-circle"></i><i class="fa-solid fa-circle"></i>' + value + '</li><button><i class="fa-solid fa-circle-minus"></i></button>';
        itemLista.innerHTML -= itemAdicionado;
}