const pokemonList = document.getElementById("pokemonList")
const randomTeam = document.getElementById('randomTeam')
const btnRandomTeam= document.getElementById('btnRandomTeam')

// fonction permettant d'appeler l'API
async function randomPokemonTeam(){
    let promise = await fetch("https://pokebuildapi.fr/api/v1/random/team/suggest")
    if(promise.ok === true){
        let randomPokemons = await promise.json();
        return randomPokemons;

    }else{
        alert('error, veuillez recharger la page')
    }
}
// fonction permettant d'afficher les pokemons
async function showRandomTeam(randomPokemons){
    randomTeam.innerHTML="";
    for (let randomPokemon of randomPokemons){
        for(let pokemon of randomPokemon) {
            console.log(pokemon)
            const cards = document.createElement('article')
            const imgPokemon = document.createElement('img')
            const infosContainer = document.createElement('div')
            const nameContainer = document.createElement('h3')

            imgPokemon.setAttribute('src', pokemon.image);
            imgPokemon.setAttribute('class', `imgPokemon`);
            cards.setAttribute('class', 'cards')

            const name = document.createTextNode(` ${pokemon.name} #${pokemon.pokedexId}`);

            nameContainer.appendChild(name);
            infosContainer.append(imgPokemon, nameContainer);
            cards.append(infosContainer)

            randomTeam.appendChild(cards)

            const apiTypes = pokemon.apiTypes
            const typeContainer = document.createElement('div')

            typeContainer.setAttribute('class', "type")
        //création d'un hover sur les cards
            const hoverCards = document.createElement('div')
            const hoverStats = document.createElement('div')
            const nameStatsContainer = document.createElement('h3')
            const hpContainer = document.createElement('p')
            const attackContainer = document.createElement('p')
            const defenseContainer = document.createElement('p')
            const speattackContainer = document.createElement('p')
            const spedefenseContainer = document.createElement('p')
            const speedContainer = document.createElement('p')

            const nameStats = document.createTextNode(` ${pokemon.name} #${pokemon.pokedexId}`);
            const HP = document.createTextNode(`PV : ${pokemon.stats.HP}`)
            const attack = document.createTextNode(`Att : ${pokemon.stats.attack}`)
            const defense = document.createTextNode(`Def : ${pokemon.stats.defense}`)
            const speattack = document.createTextNode(`Att spe : ${pokemon.stats.special_attack}`)
            const spedefense = document.createTextNode(`Def spe : ${pokemon.stats.special_defense}`)
            const speed = document.createTextNode(`Vit : ${pokemon.stats.speed}`)

            cards.appendChild(hoverCards)
            nameStatsContainer.appendChild(nameStats)
            hpContainer.appendChild(HP)
            attackContainer.appendChild(attack)
            defenseContainer.appendChild(defense)
            speattackContainer.appendChild(speattack)
            spedefenseContainer.appendChild(spedefense)
            speedContainer.appendChild(speed)
            hoverStats.append(hpContainer,attackContainer, defenseContainer, speattackContainer, spedefenseContainer, speedContainer)
            hoverCards.append(nameStatsContainer, hoverStats)

            nameStatsContainer.setAttribute('class', 'hoverName')
            hoverStats.setAttribute('class', 'hoverStats')
            hoverCards.setAttribute('class', 'hoverCards')

            for (const apiType of apiTypes) {

                const imgType= document.createElement('img')
                const  type= document.createElement('p')

                const typeText= document.createTextNode(`${apiType.name}`)

                imgType.setAttribute('src', `${apiType.image}`)
                imgType.setAttribute('class', `imgType`)

                const typeFlex = document.createElement('div')
                typeFlex.setAttribute('class', 'typeFlex')

                type.appendChild(typeText)
                infosContainer.appendChild(typeContainer)
                typeFlex.append(imgType, type)
                typeContainer.appendChild(typeFlex)
            }

        }
    }
}

randomPokemonTeam().then(randomPokemons => showRandomTeam(randomPokemons))

btnRandomTeam.addEventListener('click', function() {
    randomPokemonTeam().then(randomPokemons => showRandomTeam(randomPokemons))
})







// function cardCreator(array) {
//     const cards = document.createElement('article')
//     const imgPokemon = document.createElement('img')
//     const infosContainer= document.createElement('div')
//     const nameContainer = document.createElement('p')
//     const idContainer= document.createElement('p')
//     const typeContainer = document.createElement('p')
//
//     imgPokemon.setAttribute('src', array.image)
//     const name = document.createTextNode(`nom : ${array.name}`)
//     const pokedex = document.createTextNode(`nom : ${array.pokedexId}`)
//
//     nameContainer.appendChild(name);
//     idContainer.appendChild(pokedex);
//     infosContainer.append(idContainer, nameContainer);
//     cards.append(imgPokemon, infosContainer)
//     randomTeam.appendChild(cards)


        // for(let apiType of apiTypes) {
        //     const name = document.createTextNode(`nom : ${apiType.name}`)
        //
        //
        // }
// }