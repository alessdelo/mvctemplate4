//random string
function randTxt(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// console.log(randTxt(5));


// ----------------------------------------

// random num (stringfied) 
function randNum(limit) {
        let num = Math.floor(Math.random() * limit)
        
        num = num.toString()
  
        return num       
}

// console.log( randNum(99) );

// ----------------------------------------

// generates a word with alternated vowels and consonants
function randWord(length) {
    var consonants = 'bcdfghjklmnpqrstvwxyz',
        vowels = 'aeiou',
        rand = function(limit) {
            return Math.floor(Math.random()*limit);
        },
        i, word='', length = parseInt(length,10),
        consonants = consonants.split(''),
        vowels = vowels.split('');
    for (i=0;i<length/2;i++) {
        var randConsonant = consonants[rand(consonants.length)],
            randVowel = vowels[rand(vowels.length)];
        word += (i===0) ? randConsonant.toUpperCase() : randConsonant;
        word += i*2<length-1 ? randVowel : '';
    }
    return word;
}
 
// console.log( randWord(10) );

// ----------------------------------------
function randItemFromArray(itemsArr) {
var item = itemsArr[Math.floor(Math.random()*itemsArr.length)];

return item
}


// myArray = [a,b,c,d,e,f]
// randItemFromArray(myArray)
