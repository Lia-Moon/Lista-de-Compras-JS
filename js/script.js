
// Adicionar itens na lista de compras
var itemLista = document.querySelector(".main__content--itens-lista");
var addButton = document.querySelector("#botaoAdicionarProduto");
var novoProduto = document.querySelector("#novoProduto");

var indicacaoDoProdutoNaListaLinha1 = '<div class="main__content--itens-lista--produto"> <li> <i class="fa-regular fa-circle"></i><i class="fa-solid fa-circle"></i>';
var indicacaoDoProdutoNaListaLinha2 = '</li><button class="botaoRemoverProduto"><i class="fa-solid fa-circle-minus"></i></button>';

addButton.addEventListener("click", adicionarProduto);

function adicionarProduto() {
    if(novoProduto.value != '') {
        var itemAdicionado = indicacaoDoProdutoNaListaLinha1 + novoProduto.value + indicacaoDoProdutoNaListaLinha2;
        itemLista.innerHTML += itemAdicionado;
        novoProduto.value = '';
        novoProduto.focus();
        adicionarEventoCliqueAosBotoes(); // Chame a função para adicionar evento de clique aos novos botões
    }
}

novoProduto.addEventListener('keyup', (teclaPressionada) => {
    if((teclaPressionada.code === 'NumpadEnter' || teclaPressionada.code  === 'NumpadAdd' || teclaPressionada.code  === 'Enter') && novoProduto.value != '') {
        adicionarProduto();
    }
})

// Função para adicionar evento de clique aos botões de remoção
function adicionarEventoCliqueAosBotoes() {
    // Encontra todos os botões de remoção
    var removeButtons = document.querySelectorAll(".botaoRemoverProduto");
    // Adiciona um evento de clique a cada botão de remoção
    removeButtons.forEach(function (button) {
        button.addEventListener("click", function() {
            // Encontra a div pai do botão clicado e remove-a
            var divParaRemover = this.parentNode;
            divParaRemover.remove();
        });
    });
}

// Chame a função após o carregamento inicial da página para garantir que os botões existentes tenham eventos de clique
adicionarEventoCliqueAosBotoes();