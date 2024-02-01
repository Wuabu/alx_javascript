#!/usr/bin/node
// class Rectangle {
//     constructor (w, h) {
//         if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
//             return {};
//           }
//         this.width = w;
//         this.height = h;
//     }

// }

// module.exports = Rectangle;

// 2-rectangle.js

// class Rectangle {
//     constructor(w, h) {
//       if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
//         // Create an empty object if w or h is equal to 0 or not a positive integer
//         return {};
//       }
  
//       this.width = w;
//       this.height = h;
//     }
//   }
  
//   module.exports = Rectangle;

// Rectangle.js

class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        // Create an empty object if w or h is equal to 0 or not a positive integer
        return Rectangle {};
      }
  
      this.width = w;
      this.height = h;
    }
  }
  
  module.exports = Rectangle;
  
  