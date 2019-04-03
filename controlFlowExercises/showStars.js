// number of starts in each row depens on which line we are in

showStars(5);


function showStars(rows){
    for (let row = 1; row <= rows; row++){
        let pattern = '';
        for(let i = 0; i < row; i++){
            pattern += '*';
        }
        console.log(pattern);
    }
}

// this is nested loop, it means one loop in another loop