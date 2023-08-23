const sumAll = function(a, b) {
    if (a >= 0 && b >= 0 && typeof a == "number" && typeof b == "number"){
        return b > a ? (b * (b + 1) / 2) - a + 1 : (a * (a + 1) / 2) - b + 1
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
