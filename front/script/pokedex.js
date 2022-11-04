const uri = 'https://pokeapi.co/api/v2/pokemon/';

function carregar() {
    fetch(uri)
        .then(resp => resp.json())
        .then(resp => {
            data = resp;
            preecherTabela();
        })
        .catch(err => console.error(err));
}