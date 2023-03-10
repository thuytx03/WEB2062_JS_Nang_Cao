'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
          open: 12,
          close: 22,
        },
        fri: {
          open: 11,
          close: 23,
        },
        sat: {
          open: 0, // Open 24 hours
          close: 24,
        },
      },

    order:function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery:function ({starterIndex=1, mainIndex=0,time='20:00', address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },
    orderPasta:function(ing1,ing2,ing3){
        console.log(`Here is your declicious pasta: ${ing1}, ${ing2} and ${ing3}`);
    }
};
const arr=[7,8,9];
const badNewArr=[1,2,arr[0],arr[1], arr[2]];
console.log(badNewArr);

const newArr=[1,2,...arr];
console.log(newArr);

console.log(...newArr);
console.log(1,2,7,8,9);

const newMenu=[...restaurant.mainMenu, 'Thuy'];
console.log(newMenu);

//Copy array 
const mainMenuCopy=[...restaurant.mainMenu];

//Join 2 arrays
const menu=[...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterates:arrays, strings, maps, sets. NOT objects
const str='Thuy';
const letters=[...str,'','S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schemedtmann`);

const ingredients=[prompt("Let\'s make pasta! Ingreients 1?" ),
prompt("Ingreients 2?" ),prompt("Ingreients 3?" ),];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant={foundedIn:1998,...restaurant, founder:'Guiseppe'};
console.log(newRestaurant);

const retaurantCopy={...restaurant};
retaurantCopy.name='Thuy Trinh Xuan';
console.log(retaurantCopy.name);
console.log(restaurant.name);
