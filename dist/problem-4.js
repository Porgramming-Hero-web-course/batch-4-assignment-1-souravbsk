"use strict";
{
    const calculateShapeArea = (shape) => {
        if (shape.shape === "circle") {
            const calculateArea = Math.PI * shape.radius * shape.radius;
            return parseFloat(calculateArea.toFixed(2));
        }
        else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
        else {
            throw new Error("Invalid shape");
        }
    };
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);
    // Sample Input 2:
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea);
    //
}
