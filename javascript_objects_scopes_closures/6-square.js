#!/usr/bin/node

const Rectangle = require('./5-square');

class Square extends Rectangle {
    constructor(size) {
        // Call the constructor of the parent class (Rectangle) using super()
        super(size, size);
    }

    charPrint(c) {
        // Print the rectangle using the specified character or 'X' if undefined
        const char = c || 'X';
        for (let i = 0; i < this.height; i++) {
            console.log(char.repeat(this.width));
        }
    }
}

module.exports = Square;
