// If we have the search element in the array we should return true
// otherwise we should return false

const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1));

function includes(array, searchElement){
    for (let element of array)
     if(element === searchElement)
        return true;
    return false;
}