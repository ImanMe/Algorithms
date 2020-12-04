// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


function anagrams(stringA, stringB) {
    return cleanUpString(stringB) === cleanUpString(stringA);

}

cleanUpString = (str) => {
    return str.replace(/[\^w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     aCharMap = createCharMap(stringA);
//     bCharMap = createCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false;

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) return false;
//     }

//     return true;
// }

// function createCharMap(str) {
//     const charMap = {};

//     for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char]++ || 1;
//     }

//     return charMap;
// }


//bad one
// function anagrams(stringA, stringB) {

//     const first = stringA.replace(/[^\w]/g, '').toLowerCase();
//     const second = stringB.replace(/[^\w]/g, '').toLowerCase();

//     if (first.split('').length !== second.split('').length) {
//         return false;
//     }

//     const firstCharMap = {};
//     const secondCharMap = {};

//     for (const char of first) {
//         firstCharMap[char] = firstCharMap[char] ? firstCharMap[char]++ : 1;
//     }

//     for (const char of second) {
//         secondCharMap[char] = secondCharMap[char] ? secondCharMap[char]++ : 1;
//     }

//     for (let key in firstCharMap) {
//         if (firstCharMap[key] != secondCharMap[key]) return false;
//     }

//     console.log(firstCharMap);

//     return true;
// }