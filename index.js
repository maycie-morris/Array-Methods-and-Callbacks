import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */

fifaData.indexOf(2014);

/*(a) Home Team name for 2014 world cup final*/

console.log(fifaData[828]["Home Team Name"])

/*(b) Away Team name for 2014 world cup final*/

console.log(fifaData[828]["Away Team Name"])

/*(c) Home Team goals for 2014 world cup final*/

console.log(fifaData[828]["Home Team Goals"])

/*(d) Away Team goals for 2014 world cup final*/

console.log(fifaData[828]["Away Team Goals"])

/*(e) Winner of 2014 world cup final */

console.log(fifaData[828]["Win conditions"])




/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finalData = data.filter(function (item) {
        return item["Stage"] === "Final";
    })
    return finalData;
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, getFinals) {

    const years = data.map(function (item) {
        return item["Year"];
    })
    return years;
};

console.log(getYears(fifaData));


/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(data, getFinals) {

    const winners = data.map(function (item) {
        if (item["Home Team Goals"] > item["Away Team Goals"]) {
            return `Home team, ${item["Home Team Name"]} was the winner`
        } else {
            return `Away team, ${item["Away Team Name"]} was the winner.`

        }
    })
    return winners
};
console.log(getWinners(fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data, getWinners, getYears, getFinals) {
    const result = [];
    const winner = getWinners(data, getFinals);
    const years = getYears(data, getFinals);

    for (let i = 0; i < winner.length; i++) {
        result.push(`In ${years[i]}, ${winner[i]} won the world cup`);
    }
    return result;
}
console.log(getWinnersByYear(fifaData, getWinners, getYears, getFinals));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    const homeGoals = data.reduce(function (accumulator, item) {
        return accumulator += item['Home Team Goals'];
    }, 0);

    const awayGoals = data.reduce(function (accumulator, item) {
        return accumulator += item['Away Team Goals'];
    }, 0);

    return ` Average Home Team Goals: ${homeGoals / data.length} Average Away Team Goals: ${awayGoals / data.length} `;
};
    console.log(getAverageGoals(fifaData));

    /// STRETCH 🥅 //

    /* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 
    
    Hint: Investigate your data to find "team initials"!
    Hint: use `.reduce` */

    function getCountryWins(data,teamIn) {
		let wCW = data.filter((finals) => {
		return finals.Stage === "Final";
	});
		let newArr = wCW.map((teamStat) => {
		if (teamStat["Home Team Goals"] > teamStat["Away Team Goals"]){
			return (teamStat["Home Team Initials"]);
		}
		else{
		return (teamStat["Away Team Initials"]);
		}
    });
    function countArray(newArr, teamIn){
    let filtArray = newArr.filter(item => item == teamIn).length;
	return `${teamIn} won the world cup championship ${filtArray} times.`;
	}
	console.log(countArray(newArr,teamIn));
};

getCountryWins(fifaData,'ITA');


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
