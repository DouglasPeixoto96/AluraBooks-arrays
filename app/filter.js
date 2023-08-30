const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponivel() : filtrarCategoria(categoria)
    exibirLivrosTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal =  calcularValorTotalLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalLivros (valorTotal)
    }
}

function filtrarCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarDisponivel() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalLivros (valorTotal) {
    elementoValorTotal.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}