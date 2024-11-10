class Shape {
    calculateArea() {
      return 0; 
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  const circle = new Circle(5); 
  console.log("Area of Circle:", circle.calculateArea()); // Area of Circle: 78.53981633974483
  
  const triangle = new Triangle(4, 6); 
  console.log("Area of Triangle:", triangle.calculateArea()); // Area of Triangle: 12