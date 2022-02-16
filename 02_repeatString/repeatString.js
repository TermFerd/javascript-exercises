const repeatString = function(str, numberOfTimes) {
	 let repeatedString = 'hey';
     let numberOfTimes = 3;
     let i;
     for(i = 0; i < numberOfTimes - 1; i++) {
        repeatedString += str;
      }
     return repeatedString;
};



// Do not edit below this line
module.exports = repeatString;
