#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
            // Create an empty object if w or h is equal to 0 or not a positive integer
            return {};
        }

        this.width = w;
        this.height = h;
    }

    print() {
        for (let i = 0; i < this.height; i++) {
            console.log('X'.repeat(this.width));
        }
    }

    rotate() {
        // Exchange the width and height of the rectangle
        const temp = this.width;
        this.width = this.height;
        this.height = temp;
    }

    double() {
        // Multiply the width and height of the rectangle by 2
        this.width *= 2;
        this.height *= 2;
    }
}

module.exports = Rectangle;

