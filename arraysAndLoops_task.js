// Sum of Resistors in Series -------------
const sumResistance = function(arrayNumbers){
  let a = 0;
  for(let i = 0; i < arrayNumbers.length; i ++){
    a = a + Math.abs(arrayNumbers[i]);
  }
  return a + ' ohms';
}
console.log(sumResistance([-1,5,6,3]));
console.log(sumResistance([14,3.5,6]));
console.log(sumResistance([8,15,100]));

// Secret Society -------------
const secretName = function(arrayNames){
  let aux = ""
  arrayNames = arrayNames.sort()
  for(let i = 0; i < arrayNames.length;i ++){
     aux += arrayNames[i][0];
  }
  return aux;
}
console.log(secretName(["Esperanza", "Franco", "Nia"]));
console.log(secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']));
console.log(secretName(['Harry', 'Ron', 'Hermione']));


// Array of Multiples -------------
const arrayMultiplos = function(number, length){
  let array = [];
  let value = 0;
  for(let i = 0; i < length; i ++){
    value += number;
    array.push(value);
  }
  return array;

}
console.log(arrayMultiplos(2,10));
console.log(arrayMultiplos(17,6));
