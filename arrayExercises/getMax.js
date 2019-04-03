
const numbers = [1, 2, 3, 4];

const max = getMax([]);

console.log(max);

function getMax(array){
    if (array.length === 0) return undefined;

    let max = array[0];

    for (let i = 1; i < array.length; i++)
        if (array[i] > max)
            max = array[i];

    return max;
}

// Another way of doing the above
// function getMax(array){
//     if (array.length === 0) return undefined;
//     array.reduce((accumulator, current) => (current > accumulator) ? current : accumulator);
// }