'use strict;'

let add = (a, b, c) => {
    let total;
    if (c) {
        total = (Number(a) + Number(b)) +  Number(c);
    } else {
        total = (Number(a) + Number(b)) 
    }
    return total;
}

module.exports = { add }