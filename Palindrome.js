function palindrome(){
let word = prompt('Enter any word:');
let letters = [];
let rev_word = '';


for (let i = 0; i < word.length; i++){
letters.push(word[i]);
}
for (let i = 0; i < word.length; i++){
rev_word += letters.pop();
}

if (word === rev_word){
alert(word + ' is a palindrome');
 }
else{ 
alert(word + ' is not a palindrome');
}

}