let pokemonList=[
    {name: 'Squirtle', height: .5, type: 'water'},
    {name: 'Pikachu', height: .4, type: 'electric'}, 
    {name: 'Oddish', height: .5, type: 'grass'},
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write('<p>' + pokemonList[i].name + '\'s height is: ' + pokemonList[i].height + '</p>');
    if (pokemonList[i].height < .5) {
        document.write(' - You are so petite!');
    }
}

function divide(dividend, divisor) {
    if(divisor === 0){
        return 'You\'re trying to divide by zero.'
    }else{
        let result = dividend / divisor;
        return result;
    }
    }






