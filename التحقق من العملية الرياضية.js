const checkValidMathOp = (expr) =>{
    const op = /[\+\-\*\/\%]/ ;
    if( expr.match(op)){
        let x = expr[0];
        let y = expr[2];
        if (isNaN(+x) || isNaN(+y)){
            return false;
        }
        return true;

    }
    else{
        return false;
    }

}

console.log(checkValidMathOp('8-6'));
console.log(checkValidMathOp('q-6'));
console.log(checkValidMathOp('7#6'));
console.log(checkValidMathOp('6/1'));