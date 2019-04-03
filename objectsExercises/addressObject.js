// create an address object with 3 properties
// street
// city
// zipCode
// showAddress(address)

let address = {
    street: 'Hayward',
    city: 'Melbourne',
    zipCode: 3000
};

function showAddress(address){
    for (let key in address)
    console.log(key, address[key]);
}

showAddress(address);