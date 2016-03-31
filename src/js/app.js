import PokeApi from './ajax';
var url = 'http://pokeapi.co/api/v1/pokemon/?limit=12';

PokeApi.getList(url).then(function(val){
    console.log(val);
});
