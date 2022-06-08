// Write your solution here!
const cats = ["Milo","Otis","Garfield"]

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
 

  
  function destructivelyAppendCat(string) {
      cats.push(string);
  }
    destructivelyAppendCat("Ralph");

  function destructivelyPrependCat(string) {
      cats.unshift(string);
  }
    destructivelyPrependCat("Ralph");
  function destructivelyRemoveLastCat() {
      cats.pop();
   }   
    destructivelyRemoveLastCat()
  
  function destructivelyRemoveFirstCat() {
      cats.shift();
    }   
    destructivelyRemoveFirstCat()
  function appendCat(name) {
    const allCats = [...cats, name]; 
    return(allCats)
  }
    appendCat("Ralph")
  function prependCat(name){
    const moreCats = [name, ...cats];
    return(moreCats)  
  }  
   prependCat("Sammy")

  function removeLastCat() {
      return(cats.slice(0,-1));
        
  }
  removeLastCat()

  function removeFirstCat() {
      return(cats.slice(1));

  }
  removeFirstCat()
