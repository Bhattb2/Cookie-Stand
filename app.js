'use strict';
//store the html point of contact
var firstAndPikeElement = document.getElementById('firstAndPike');

//create the element
var liEl = document.createElement('li');
//give the element content
liEl.textContent = 'Seattle';
//append to the DOM
firstAndPikeElement.appendChild(liEl)


// lab 6
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var firstAndPikeShop = {
    minCustomerEachHour: 23,
    maxCustomerEachHour: 65,
    averageCookiesPerCustomer: 6.3,
    customersEachHour: [],
    cookieEachHour: [],
    totalCookiesForTheDay: 0,
    
    randomNumber: function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    },

    average: function () {
        var ranDome = this.randomNumber(23, 65);

        var aveRage = Math.round(ranDome* 6,3);
        return aveRage;
        },

    render: function () {
        for (var i = 0; i < hours.length; i++) {
            //create element
            var liEl = document.createElement('li');
            //give element content
            liEl.textContent = `${hours[i]} Seattle: ${this.average()}`
            //append to Dom
            firstAndPikeElement.appendChild(liEl)
        }

    },

};

firstAndPikeShop.render();


