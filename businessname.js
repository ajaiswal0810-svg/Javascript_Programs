/*Business name generator:

adjectives:
crazy
fire
amazing

shop name:
engine
food
garments

another word:
word
hello
dude

*/

let random= Math.random()
if (random<=0.33){
    first="crazy"
    second="engine"
    third="word"
}
else if (random>0.33 && random<=0.66){
    first="fire"
    second="food"
    third="hello"
}else{
    first="amazing"
    second="garments"
    third="dude"
}
console.log(`${first} ${second} ${third}`)
