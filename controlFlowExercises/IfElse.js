//Hour
// If hour is between 6 am and 12 pm : Good Morning
// If It ius between 12pm and 6pm : Good afternoon
// Otherwise: Good evening


let hour = 10;

if (hour >= 6 && hour < 12){
    console.log('Good Morning');
}
else if (hour >= 12 && hour < 18){
    console.log('Good Afternoon');
}
else if (hour >= 18 && hour < 24){
    console.log('Good Evening');
}
else {
    console.log('Good Night');
}