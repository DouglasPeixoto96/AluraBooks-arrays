function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosDesconto = livros.map(livros => {
        return {...livros, preco: livros.preco - (livros.preco * desconto) }
    })
    return livrosDesconto
}