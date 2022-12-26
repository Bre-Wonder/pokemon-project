let pokemonRepository = (function () {
    let pokemonList = [
      {name: 'Squirtle', height: .5, type: 'water'},
      {name: 'Pikachu', height: .4, type: 'electric'}, 
      {name: 'Oddish', height: .5, type: 'grass'}
];
    
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
  function showDetails(pokemon){
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };

})();

pokemonRepository.add({name: 'Vuplix', height: 0.6, type: 'fire'});

/* Past pokemonList for loop

for (let i = 0; i < pokemonList.length; i++) {
    document.write('<p>' + pokemonList[i].name + '\'s height is: ' + pokemonList[i].height + '</p>');
    if (pokemonList[i].height < .5) {
        document.write(' - You are so petite!');
    }
} */

let pokemonFunction = pokemonRepository.getAll();

pokemonFunction.forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });








