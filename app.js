'use strict';
// //store the html point of contact

// //create the element
// var liEl = document.createElement('li');
// //give the element content
// liEl.textContent = 'Seattle';
// //append to the DOM
// firstAndPikeElement.appendChild(liEl)


// lab 6
var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// container for my lists
var storeSales = document.getElementById('stores');


function Store(minCust, maxCust, avgCookies, locName) {
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.locName = locName;
    this.customersEachHourArray = [];
    this.cookiesSoldEachHour = [];
    this.totalCookiesForTheDay = 0;
    
    allStores.push(this);
    this.generateHourlyCookies();
  }


var seattle = {
    storeName: 'Seattle HQ',
    minCustomerEachHour: 23,
    maxCustomerEachHour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHourArray: [],
    cookiesSoldEachHour: [],
    totalCookiesForTheDay: 0,

    calculateCustomers: function() {
        for(var i = 0 ; i <hoursArray.length ; i++) {
            var randomCustomer = getRandom(
                this.minCustomerEachHour, 
                this.maxCustomerEachHour);
            this.customersEachHourArray.push(randomCustomer)
           } 
        },


    calculateCookies: function() {
        for(var i = 0 ; i < this.customersEachHourArray.length ; i++){
            var cookies = Math.round(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
            this.totalCookiesForTheDay += cookies;
            this.cookiesSoldEachHour.push(cookies);
            console.log(this.cookiesSoldEachHour)
        }
    },

    render: function() {
        this.calculateCustomers();
        this.calculateCookies();        
        var ulEl = document.createElement('ul');
        var h2El = document.createElement('h2');
        h2El.textContent = this.storeName;
        storeSales.appendChild(h2El);
        for(var i = 0 ; i < hoursArray.length ; i++) {
            var array = [hoursArray[i], this.cookiesSoldEachHour[i]
            ];
            var liEl = document.createElement('li');
            liEl.textContent = `${hoursArray[i]}: ${this.cookiesSoldEachHour[i]} Cookies`;
            ulEl.appendChild(liEl);
        }
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        storeSales.appendChild(ulEl);
    }
};


var tokyo = {
    storeName: 'Tokyo HQ',
    minCustomerEachHour: 3,
    maxCustomerEachHour: 24,
    averageCookiesPerCustomer: 1.2,
    customersEachHourArray: [],
    cookiesSoldEachHour: [],
    totalCookiesForTheDay: 0,

    calculateCustomers: function() {
        for(var i = 0 ; i <hoursArray.length ; i++) {
            var randomCustomer = getRandom(
                this.minCustomerEachHour, 
                this.maxCustomerEachHour);
            this.customersEachHourArray.push(randomCustomer)
           } 
        },


    calculateCookies: function() {
        for(var i = 0 ; i < this.customersEachHourArray.length ; i++){
            var cookies = Math.round(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
            this.totalCookiesForTheDay += cookies;
            this.cookiesSoldEachHour.push(cookies);
            console.log(this.cookiesSoldEachHour)
        }
    },

    render: function() {
        this.calculateCustomers();
        this.calculateCookies();        
        var ulEl = document.createElement('ul');
        var h2El = document.createElement('h2');
        h2El.textContent = this.storeName;
        storeSales.appendChild(h2El);
        for(var i = 0 ; i < hoursArray.length ; i++) {
            var array = [hoursArray[i], this.cookiesSoldEachHour[i]
            ];
            var liEl = document.createElement('li');
            liEl.textContent = `${hoursArray[i]}: ${this.cookiesSoldEachHour[i]} Cookies`;
            ulEl.appendChild(liEl);
        }
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        storeSales.appendChild(ulEl);
    }
};


var dubai = {
    storeName: 'Dubai HQ',
    minCustomerEachHour: 11,
    maxCustomerEachHour: 38,
    averageCookiesPerCustomer: 3.7,
    customersEachHourArray: [],
    cookiesSoldEachHour: [],
    totalCookiesForTheDay: 0,

    calculateCustomers: function() {
        for(var i = 0 ; i <hoursArray.length ; i++) {
            var randomCustomer = getRandom(
                this.minCustomerEachHour, 
                this.maxCustomerEachHour);
            this.customersEachHourArray.push(randomCustomer)
           } 
        },


    calculateCookies: function() {
        for(var i = 0 ; i < this.customersEachHourArray.length ; i++){
            var cookies = Math.round(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
            this.totalCookiesForTheDay += cookies;
            this.cookiesSoldEachHour.push(cookies);
            console.log(this.cookiesSoldEachHour)
        }
    },

    render: function() {
        this.calculateCustomers();
        this.calculateCookies();        
        var ulEl = document.createElement('ul');
        var h2El = document.createElement('h2');
        h2El.textContent = this.storeName;
        storeSales.appendChild(h2El);
        for(var i = 0 ; i < hoursArray.length ; i++) {
            var array = [hoursArray[i], this.cookiesSoldEachHour[i]
            ];
            var liEl = document.createElement('li');
            liEl.textContent = `${hoursArray[i]}: ${this.cookiesSoldEachHour[i]} Cookies`;
            ulEl.appendChild(liEl);
        }
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        storeSales.appendChild(ulEl);
    }
};


var paris = {
    storeName: 'Paris HQ',
    minCustomerEachHour: 20,
    maxCustomerEachHour: 38,
    averageCookiesPerCustomer: 2.3,
    customersEachHourArray: [],
    cookiesSoldEachHour: [],
    totalCookiesForTheDay: 0,

    calculateCustomers: function() {
        for(var i = 0 ; i <hoursArray.length ; i++) {
            var randomCustomer = getRandom(
                this.minCustomerEachHour, 
                this.maxCustomerEachHour);
            this.customersEachHourArray.push(randomCustomer)
           } 
        },


    calculateCookies: function() {
        for(var i = 0 ; i < this.customersEachHourArray.length ; i++){
            var cookies = Math.round(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
            this.totalCookiesForTheDay += cookies;
            this.cookiesSoldEachHour.push(cookies);
            console.log(this.cookiesSoldEachHour)
        }
    },

    render: function() {
        this.calculateCustomers();
        this.calculateCookies();        
        var ulEl = document.createElement('ul');
        var h2El = document.createElement('h2');
        h2El.textContent = this.storeName;
        storeSales.appendChild(h2El);
        for(var i = 0 ; i < hoursArray.length ; i++) {
            var array = [hoursArray[i], this.cookiesSoldEachHour[i]
            ];
            var liEl = document.createElement('li');
            liEl.textContent = `${hoursArray[i]}: ${this.cookiesSoldEachHour[i]} Cookies`;
            ulEl.appendChild(liEl);
        }
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        storeSales.appendChild(ulEl);
    }
};


var lima = {
    storeName: 'Lima HQ',
    minCustomerEachHour: 2,
    maxCustomerEachHour: 16,
    averageCookiesPerCustomer: 4.6,
    customersEachHourArray: [],
    cookiesSoldEachHour: [],
    totalCookiesForTheDay: 0,

    calculateCustomers: function() {
        for(var i = 0 ; i <hoursArray.length ; i++) {
            var randomCustomer = getRandom(
                this.minCustomerEachHour, 
                this.maxCustomerEachHour);
            this.customersEachHourArray.push(randomCustomer)
           } 
        },


    calculateCookies: function() {
        for(var i = 0 ; i < this.customersEachHourArray.length ; i++){
            var cookies = Math.round(this.customersEachHourArray[i] * this.averageCookiesPerCustomer);
            this.totalCookiesForTheDay += cookies;
            this.cookiesSoldEachHour.push(cookies);
            console.log(this.cookiesSoldEachHour)
        }
    },

    render: function() {
        this.calculateCustomers();
        this.calculateCookies();        
        var ulEl = document.createElement('ul');
        var h2El = document.createElement('h2');
        h2El.textContent = this.storeName;
        storeSales.appendChild(h2El);
        for(var i = 0 ; i < hoursArray.length ; i++) {
            var array = [hoursArray[i], this.cookiesSoldEachHour[i]
            ];
            var liEl = document.createElement('li');
            liEl.textContent = `${hoursArray[i]}: ${this.cookiesSoldEachHour[i]} Cookies`;
            ulEl.appendChild(liEl);
        }
        liEl = document.createElement('li');
        liEl.textContent = `Total: ${this.totalCookiesForTheDay} Cookies`;
        ulEl.appendChild(liEl);
        storeSales.appendChild(ulEl);
    }
};


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

function getRandom(min, max) {
    return Math.floor(Math.random() * ( max -min +1)) +min;
}


var table = document.getElementById('table-container');


var tbodyEl = document.createElement('tbody');

var trEl = document.createElement('tr');
var thEl = document.createElement('th');
thEl.textContent = 'Column 1';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = 'Column 2';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = 'Column 3';
trEl.appendChild(thEl);

thEl = document.createElement('th');
thEl.textContent = 'Column 4';
trEl.appendChild(thEl);

tbodyEl.appendChild(trEl);
trEl = document.createElement('tr');
thEl = document.createElement('th');
thEl.textContent = 'Data tow 1';
trEl.appendChild(thEl);

tdEl = document.createElement('td');
tdEl.textContent = 'one';
trEl.appendChild(tdEl);

tdEl = document.createElement('td');
tdEl.textContent = 'two';
trEl.appendChild(tdEl);

tdEl = document.createElement('td');
tdEl.textContent = 'three';
trEl.appendChild(tdEl);



tbodyEl.appendChild(trEl);

trEl = document.createElement('tr');
thEl = document.createElement('th');
thEl.textContent= 'Data Row 2';
trEl.appendChild(thEl);



tdEl = document.createElement('td');
tdEl.textContent = 'one';
trEl.appendChild(tdEl);

tdEl = document.createElement('td');
tdEl.textContent = 'two';
trEl.appendChild(tdEl);

tdEl = document.createElement('td');
tdEl.textContent = 'three';
trEl.appendChild(tdEl);









table.appendChild(tbodyEl);








// seattle.render = function () {
//     randomNumber: function (min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;
//     },

//     average: function () {
//         var ranSeattle = this.randomNumber(23, 65);

//         var aveRage = Math.round(ranSeattle* 6,3);
//         return aveRage;
//         },

//     render: function () {
//         for (var i = 0; i < hours.length; i++) {
//             //create element
//             var liEl = document.createElement('li');
//             //give element content
//             liEl.textContent = `${hours[i]} Seattle: ${this.average()}`
//             //append to Dome
//             firstAndPikeElement.appendChild(liEl)
//         }

//     },
    

// };


// var firstAndPikeShop = {
//     minCustomerEachHour: 3,
//     maxCustomerEachHour: 24,
//     averageCookiesPerCustomer: 1.2,
//     customersEachHour: [],
//     cookieEachHour: [],
//     totalCookiesForTheDay: 0,
    
//     randomNumber: function (min, max) {
//         return Math.floor(Math.random() * (max - min)) + min;
//     },

//     average: function () {
//         var ranTokyo = this.randomNumber(3, 24);

//         var aveRage = Math.round(ranTokyo* 1.2);
//         return aveRage;
//         },

//     render: function () {
//         for (var i = 0; i < hours.length; i++) {
//             //create element
//             var liEl = document.createElement('li');
//             //give element content
//             liEl.textContent = `${hours[i]} Tokyo: ${this.average()}`
//             //append to Dome
//             firstAndPikeElement.appendChild(liEl)
//         }

//     },
    

// };

// firstAndPikeShop.render();


