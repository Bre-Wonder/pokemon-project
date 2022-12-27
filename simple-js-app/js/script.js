let pokemonRepository = (function () {
    let pokemonList = [];
    let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
function add(pokemon) {
    pokemonList.push(pokemon);
  }

function getAll() {
    return pokemonList;
  }
  function addListItem(pokemon) {
    let pokemonGo = document.querySelector('.pokemonGo');
    let eachItem = document.createElement('li');
    let button = document.createElement('button');
    pokemonGo.appendChild(eachItem);
    eachItem.appendChild(button);
    button.innerText = pokemon.name;
    button.classList.add('buttonPoke')
    button.addEventListener('click', function(event){
        showDetails(pokemon);
    })
  }

  function loadList() {
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=150').then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }


  function showDetails(pokemon){
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList
  };

})();

// pokemonRepository.add({name: 'Vuplix', height: 0.6, type: 'fire'});

// I think this is the right place for fetch()

/*fetch('https://pokeapi.co/api/v2/pokemon/?limit=150').then(function(response){
  return response.json();
}).then(function (pokemonList){
  console.log(pokemonList);
}).catch(function(){
  console.log('Error')
}*/


/* Past pokemonList for loop

for (let i = 0; i < pokemonList.length; i++) {
    document.write('<p>' + pokemonList[i].name + '\'s height is: ' + pokemonList[i].height + '</p>');
    if (pokemonList[i].height < .5) {
        document.write(' - You are so petite!');
    }
} */

let pokemonFunction = pokemonRepository.getAll();

pokemonRepository.loadList().then(function(){
  pokemonFunction.forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
});








