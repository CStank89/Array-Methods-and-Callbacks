import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final*/
console.log('The home team for the 2014 World Cup Final was ' + fifaData.filter(home => 
    {return home.Year === 2014 && home.Stage === 'Final'})[0]['Home Team Name']);

/*(b) Away Team name for 2014 world cup final*/
console.log('The home team for the 2014 World Cup Final was ' + fifaData.filter(home => 
    {return home.Year === 2014 && home.Stage === 'Final'})[0]["Away Team Name"]);

/*(c) Home Team goals for 2014 world cup final*/
console.log('The home team for the 2014 World Cup Final was ' + fifaData.filter(homeGoals => 
    {return homeGoals.Year === 2014 && homeGoals.Stage === 'Final'})[0]["Home Team Name"]);

/*(d) Away Team goals for 2014 world cup final*/

console.log('The home team for the 2014 World Cup Final was ' + fifaData.filter(awayGoals => 
    {return awayGoals.Year === 2014 && awayGoals.Stage === 'Final'})[0]["Home Team Name"]);

/*(e) Winner of 2014 world cup final */


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(array) {
    return array.filter(array => array.Stage === "Final");
    

};
console.log(getFinals(fifaData));


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */


function getYears(cb) {
    let years = []
    cb.forEach (item => years.push(item.Year));   
    return years;
};
console.log(`result of get years: ${getYears(getFinals(fifaData))}`);


// const years = cb.map(year => {
//     return {'Year': year.Year};
//         });
    
// };
// console.log(getYears(getFinals);

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {
    let winners = []
    for (let i = 0; i < callback.length; i++){
        if (callback[i]['Home Team Goals'] > callback[i]['Away Team Goals']){
            winners.push(callback[i]);
        }
        else{
            winners.push(callback[i]);
        }
    } 
    console.log(winners);
    return winners;
    

};

getWinners(getFinals(fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

 function getWinnersByYear(callback, callback2) {
     for (let i = 0; i < c.length; i++){
        console.log(`In ${callback2[i]['Year']}, ${callback[i]} won the world cup!`);
     }


 };

 getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const reduceHomeTeamGoals = data.reduce((total, goals) => {
        return total += goals['Home Team Goalts'];
    }, 0);
    const reduceAwayTeamGoals = data.reduce((awayTotal, awayGoals) => {
        return awayTotal += awayGoals['Away Team Goals'];
    }, 0);
    console.log(`This is the average number of home goals per match ${reduceHomeTeamGoals / data.length}`);
    console.log(`This is the average number of away goals per match ${reduceAwayTeamGoals / data.length}`);
    

};




getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
