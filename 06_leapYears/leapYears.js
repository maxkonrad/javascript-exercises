const leapYears = function(year) {
    return (!(year % 4) && (year % 100)) ? true : !(year % 400) ? true : false
};

// Do not edit below this line
module.exports = leapYears;
