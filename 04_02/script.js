// a closure is function inside another function where the inside function 
// relies on the external function variables

function doSomeMath() {
    var a = 5;
    var b = 4;
    function multiply() {
        var result = a * b;
        return result;
    }
    return multiply;
}

var theResult = doSomeMath();
console.log('The ans is ' + theResult());