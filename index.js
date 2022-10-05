// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat =function (name){
    cats.push(name);
}

// const destructivelyAppendCat =function (){
//     return cats.push('Ralph');
// }

const destructivelyPrependCat = ()=>{
   return cats.unshift('Bob');
};

const destructivelyRemoveLastCat =()=>{
    cats.pop();
};

const destructivelyRemoveFirstCat = function(){
    cats.shift();
};

const appendCat = function(name){
   return [...cats,name];
};

const prependCat = function(name){
    return [name,...cats];
 };

// const removeLastCat = ()=>{
//     return [...cats.slice(0,2)];
//  };

const removeLastCat = ()=>{
    return [...cats.slice(0, cats.length - 1)];
 };


const removeFirstCat=()=>{
    return [...cats.slice(1)]
};

