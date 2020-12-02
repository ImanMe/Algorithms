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
    var noOfArrays = Math.ceil(array.length / size);

    var resultArray = [];

    var initial = 0;

    for (let i = 0; i < noOfArrays; i++) {
        var temp = [];

        for (let i = initial; i < initial + size; i++) {
            if (array[i]) {
                temp.push(array[i]);
            }
        }

        resultArray.push(temp);

        initial = initial + size;
    }

    return resultArray;
}

module.exports = chunk;