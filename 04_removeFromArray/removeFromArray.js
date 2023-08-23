const removeFromArray = function(arr, ...el) {
    const newArr = []
    arr.forEach(element => {
        if (!el.includes(element)) {
            newArr.push(element);
        }
    });

    return newArr
};

// Do not edit below this line
module.exports = removeFromArray;
