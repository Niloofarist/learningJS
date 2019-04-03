
let address = createAddress('Hayward', 'Melbourne', 3000);

console.log(address);

// Factory Function
function createAddress (street, city, zipCode){
    return{
        street,
        city,
        zipCode  
    };
}

//----------------------------------------------------------------------

let address = new Address('Hayward', 'Melbourne', 3000);

console.log(address);

// Constructor Function
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
