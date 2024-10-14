// User profile ----------------
const username = prompt('Ingresa tu nombre de usuario:');
const age = +prompt('Ingresa tu edad:');
const arrayFavoriteMovies = prompt('Ingresa tus tres películas favoritas en el orden de preferencia y separadas por coma:')
.split(',')
.map(item => item.trim());

const favoriteMovies = function(array){
  aux = []
  for(i = 0; i < array.length; i ++){
    aux.push(`\n Tu película favorita número ${i + 1} es: ${array[i]}`)
  }
  return aux;
}
console.log(`Tu nombre de usuario es ${username} \nTu edad es ${age} \n` + favoriteMovies(arrayFavoriteMovies));


// Highest number ----------------
let numbers = prompt('Ingresa 10 números separados por una coma:')
.split(',')
.map(num => +num);
while(numbers.length !== 10){
  numbers = prompt('Ingresa exactamente 10 números separados por una coma:')
.split(',')
}
console.log(typeof numbers)
let a = Math.max( ...numbers)
console.log(`El número máximo es ${a}`)

// Palindrome ----------------
const sentenceWordPalindrome = prompt('Proporciona una palabra o frase para conocer si es palíndroma:');
console.log(typeof sentenceWordPalindrome)
console.log(sentenceWordPalindrome)

const isPalindrome = function (prompt) {
  let a = prompt.toLowerCase().replaceAll(" ", "").split('');
  let b = []
  for(i = a.length -1; i >= 0; i--){
    b.push(a[i]);
  }
  if(a.join() === b.join()){
    return 'El fragmento es palíndromo';
  }else{
    return 'El fragmento NO es palíndromo';
  }
}
console.log(isPalindrome(sentenceWordPalindrome));
