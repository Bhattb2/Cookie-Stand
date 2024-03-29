'use strict';


// store hours array
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// render total of totals
var allTotals=0;
var tableEl = document.getElementById('cookieTable');
var shops = [];
// constructor object
function CookieShop(storeName, minCust, maxCust, avgCookies){
    this.storeName= storeName;
    this.minCust= minCust;
    this.maxCust= maxCust;
    this.avgCookie= avgCookies;
    this.custHour=[];
    this.cookieHour=[];
    this.totalCookies= 0;
    this.generateCust();
    this.generateCookie();
    shops.push(this);
// console.log (this.custHour);
}

//new stores
function getRandom(min, max) {
    return Math.floor(Math.random() * ( max -min +1)) +min;
}

// render customer per hour
CookieShop.prototype.generateCust= function() {
    for(var i = 0; i <hours.length; i ++) {
        var cookie =  getRandom(this.minCust, this.maxCust);
        this.custHour.push(cookie);
        
    }
}
   
// render cookies per hour
CookieShop.prototype.generateCookie= function() {
    for(var i = 0; i <hours.length; i ++) {
        var cookie = Math.ceil(this.avgCookie * this.custHour[i]);
        this.cookieHour.push(cookie);
        // console.log (this.cookieHour);
        this.totalCookies += this.cookieHour[i];
        // console.log (this.totalCookies);
        allTotals += cookie;
        // console.log (allTotals);
    }
}



new CookieShop('Seattle', 23, 65, 6.3);
new CookieShop('Tokyo', 3, 24, 1.2);
new CookieShop('Dubai', 11, 38, 3.7);
new CookieShop('Paris', 20, 38, 2.3);
new CookieShop('Lima', 2, 16, 4.6);

// rendering tables
function header() {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Location';
    trEl.appendChild(thEl);

    for ( var i = 0; i <hours.length; i ++) {
        var thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
    }  
    thEl = document.createElement('th');
    thEl.textContent = 'Daily Totals'
    trEl.appendChild(thEl);
    tableEl.appendChild(trEl);
}

header();

// shop locations 
CookieShop.prototype.generateShopRow = function() {
        var trEl = document.createElement('tr');
        var thEl = document.createElement('th');
        thEl.textContent = this.storeName;
        trEl.appendChild(thEl);
        for(var i = 0; i <hours.length; i ++) {
            var tdEl= document.createElement('td');
            tdEl.textContent= this.cookieHour [i];
            trEl.appendChild(tdEl);
        } 
        
        var tdElem= document.createElement('tdEl');
        tdElem.textContent = this.totalCookies;
        trEl.appendChild(tdElem);
        tableEl.appendChild(trEl);
        
}
for ( var i =0; i <shops.length; i ++) {
    shops[i].generateShopRow()
}

function footer() {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Total';
    trEl.appendChild(thEl);
    for ( var i = 0; i <hours.length; i ++) {
        var tdEl = document.createElement('td');
        var total = 0;
        for ( var j = 0; j <shops.length; j++) {
            total += shops[j].cookieHour[i];
            
        }
        tdEl.textContent = total;
        trEl.appendChild(tdEl);
    }       
    tdEl = document.createElement('td');
    tdEl.textContent = allTotals;
    trEl.appendChild(tdEl);
    tableEl.appendChild(trEl);
    
}

var elForm = document.getElementById('form');

elForm.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent reload of page

  var newCityName= event.target.city.value
  var newMinCust= event.target.mincustomers.value
  var newMaxCust= event.target.maxcustomers.value
  var newAvgCookie= event.target.avgcookies.value
  var newCity = new CookieShop(newCityName, newMinCust, newMaxCust, newAvgCookie);

  newCity.generateShopRow();
});


footer()

console.log(shops)