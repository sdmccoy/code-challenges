// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//solution using SLICE helper
function chunk(array, size) {
    //check types of inputs, return error if not correct
    // if(typeof array != 'array') return null; //technically should throw an error
    // if(typeof size != 'number') return null; //technically should throw an error
    
    //conditional if array length = size then just return the array, no more calc
    if(array.length === size) return array;

    //use a while loop with helper variables to change splice and push into array
    let result = [];
    let index = 0;

    while(index < array.length){
        
        let subArr = array.slice(index, index + size);
        result.push(subArr);
        index += size;
        
    }
    
    return result;
}

//solution using for loop and conditionals
// function chunk(array, size){
//     //helper array to push into and return at the end
//     let result = [];
    
//     //iterate through array
//     for(let element of array){
//         let lastChunk = result[result.length - 1];
//         if(!lastChunk || lastChunk.length === size){
//             //push a chunk array with first element into a result array if no first chunk or when the chunk length equals the size
//             result.push([element]);
//         } else {
//             //if the chunk is not full, push the current element to the end of it
//             lastChunk.push(element);
//         }
//     }
//     return result;
// }

module.exports = chunk;
