let pokemonList=[
    {name: 'Squirtle', height: .5, type: 'water'},
    {name: 'Pikachu', height: .4, type: 'electric'}, 
    {name: 'Oddish', height: .5, type: 'grass'}
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + '\'s height is: ' + pokemonList[i].height)
    if (pokemonList[i].height < .5) {
        document.write(' - You are so petite!'+ '<p></p>');
    } else { 
        document.write('<p></p>');
    }
}

function divide(dividend, divor) {
    if (divisor === 0){
        return 'You\'re trying to divide by zero.'
    }else{
        let result = (dividend/divisor);
        return result;
    }
    }






