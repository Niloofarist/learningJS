
showNumbers(10);

function showNumbers(limit){

    for (let i = 0; i <= limit; i++){
        if (i % 2 === 0)
            console.log(i, 'EVEN');
        else (console.log(i, 'ODD'))
    }
}


// Another way of writing above function
// function showNumbers(limit){
//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
//     console.log(i, message); 
// }