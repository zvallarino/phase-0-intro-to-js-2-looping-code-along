// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
   
// }


// const gifts = ['tedady bear', 'drone', 'doll'];
// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
       
//     }
//     return gifts;
// }

// wrapGifts(gifts);

function writeCards(array, string){
    const newArray = []
    for(let i = 0 ; i < array.length; i++){
    newArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return newArray;
}
console.log(writeCards(['Ada','Brendan','Ali'],"surprise"));






// console.log(writeCards(['Ada','Brendan','Ali'],"Birthday"));

// const gifts = ['teddy bear', 'drone', 'doll'];

// function wrapGifts(gifts) {
//     let i = 0;
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         i++;
//     }
//     return gifts;
// }

// wrapGifts(gifts);

// function plantGarden(){
//     let keepWorking = true;
//     while (keepWorking) {
//         chooseSeedLocation();
//         plant
//     }
// }


function countDown(number){
let i = number;
while (i > -1){
        console.log(i--);
    }}

countDown(10);


    