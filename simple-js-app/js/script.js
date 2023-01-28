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
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#modalContainer');
    button.classList.add('buttonPoke');
    button.classList.add('btn');
    eachItem.classList.add('liPoke');
    eachItem.classList.add('group-list-item');
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
    showModal(
      pokemon.name,
      'height: ' + pokemon.height,
      pokemon.imageUrl
    )
  });
  }

 let modalContainer = document.querySelector('#modalContainer');

 function showModal(name, height, img) {

  let pokemonName = document.querySelector('.modal-title');
  let pokemonDetails = document.querySelector('.modal-body');
  let modalHeader = document.querySelector('.modal-header');

  pokemonName.innerHTML = '';
  pokemonDetails.innerHTML = '';

   let nameElement = document.createElement('h1');
   nameElement.innerText = name;

   let heightElement = document.createElement('h2');
   heightElement.innerText = height;

   let imageElement = document.createElement('img');
   imageElement.setAttribute('src', img);
   imageElement.setAttribute('width', '150');
   imageElement.setAttribute('height', '150');
   imageElement.setAttribute('alt', 'photo of pokemon');

   pokemonName.appendChild(nameElement);
   pokemonDetails.appendChild(heightElement);
   pokemonDetails.appendChild(imageElement); 
   

    modalContainer.classList.add('show');
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







