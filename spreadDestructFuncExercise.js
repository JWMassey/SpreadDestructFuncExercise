//Spread and Destructuring using Functions Exercise//

//1a
jpDinos = ["Velociraptors", "Tyrannosaurus Rex", "Dilophosaurus"];
//1b
function seeDinos(a, ...b){
    console.log(a);
    console.log(b);
}
//1c
seeDinos(...jpDinos)

console.log(`\n=======================================\n`);

//2a
const jpCharacters = {alanGrant: "Sam Neill", ellieSattler: "Laura Dern", ianMalcolm: "Jeff Goldblum"}
//2b
seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}
seeCharacters(jpCharacters);

console.log(`\n=======================================\n`);


//Bonus//
//3a
const jurassicParkMovies = [{one: "Jurassic Park", two: "The Lost World: Jurassic Park", three: "Jurassic Park III"}, {four: "Jurassic World", five: "Jurassic World: Fallen Kingdom", six: "Jurassic World: Dominion"}]
//3b
function seeJPMovies({one, two, three}, {four, five, six}){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}
seeJPMovies(...jurassicParkMovies)