
//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length;
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  let count = str.match(/[aeiou]/gi);
  if (count) {
    return count.length
  }
  return 0;
}

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  return str.includes(checkStr);
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
  var str = str.split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
  // var strSplit = str.split(' ');
  // strSplit.forEach(data => {
  //   data = data.charAt(0).toUpperCase() + data.slice(1); 
  // });
  // return strSplit.join(' ');
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  var strSplit = str.split(' ');
  var longestWord = '';
  strSplit.forEach(data => {
    if(data.length > longestWord.length){ 
      longestWord = data; 
      }
  });
  return longestWord;
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}