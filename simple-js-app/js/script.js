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
    eachItem.classList.add('liPoke')
    button.addEventListener('click', function(event){
        showDetails(pokemon);
    })
  }

  function loadList() {
    return fetch(apiURL).then(function (response) {
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

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });
 }


  function showDetails(pokemon){
  loadDetails(pokemon).then(function () {
      console.log(pokemon);
  });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };

})();


let pokemonFunction = pokemonRepository.getAll();

pokemonRepository.loadList().then(function(){
  pokemonFunction.forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
});



// Placing all the unused code at the bottom

// pokemonRepository.add({name: 'Vuplix', height: 0.6, type: 'fire'});


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







