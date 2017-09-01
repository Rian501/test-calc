'use strict;'

let multiply = (a, b) => {
    return (Math.round((a*b) * 100) / 100);
}

module.exports = {multiply}