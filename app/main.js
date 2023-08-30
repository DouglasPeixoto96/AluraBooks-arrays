let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosAPI ()

async function getBuscarLivrosAPI() {
    const resposta = await fetch(endpointDaAPI)
    livros = await resposta.json()
    let livrosDesconto = aplicarDesconto(livros)
    exibirLivrosTela (livrosDesconto)
}

