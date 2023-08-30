const elementoInserirLivros = document.getElementById('livros')
const elementoValorTotal = document.getElementById('valor_total_livros_disponiveis')

function exibirLivrosTela (listaDeLivros){
  elementoValorTotal.innerHTML = ''
    elementoInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livros => {
        let disponibilidade = verificarDisponibilidade(livros)
        elementoInserirLivros.innerHTML += ` 
        <div class="livro">
        <img class="${disponibilidade}" src="${livros.imagem}"
          alt="${livros.alt}" />
        <h2 class="livro__titulo">
          ${livros.titulo}
        </h2>
        <p class="livro__descricao">${livros.autor}</p>
        <p class="livro__preco" id="preco">R$${livros.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livros.categoria}</span>
        </div>
      </div>
  `
    });
}

function verificarDisponibilidade(livros) {
  if (livros.quantidade > 0) {
    return 'livro__imagens'
  } else {
    return 'livro__imagens indisponivel'
  }
}