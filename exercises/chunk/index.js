// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(array, size) {
    let chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));

        index += size;
    }

    return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
//     const chunked = [];

//     for (let element of array) {
//         let last = chunked[chunked.length - 1];

//         if (!last || last.length === size) {
//             chunked.push([element]);
//         } else {
//             last.push(element);
//         }
//     }

//     return chunked;
// }



// bad one
// function chunk(array, size) {
//     var noOfArrays = Math.ceil(array.length / size);

//     var chunked = [];

//     var initial = 0;

//     for (let i = 0; i < noOfArrays; i++) {
//         var temp = [];

//         for (let i = initial; i < initial + size; i++) {
//             if (array[i]) {
//                 temp.push(array[i]);
//             }
//         }

//         chunked.push(temp);

//         initial = initial + size;
//     }

//     return chunked;
// }