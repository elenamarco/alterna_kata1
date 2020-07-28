function chainAdd(num1){
    let sum = num1
    return function(num2){
        return num1+num2
    }
}

module.exports = chainAdd