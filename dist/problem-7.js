"use strict";
{
    //
    // Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear();
            const totalYear = currentYear - this.year;
            return `${totalYear} (assuming current year is ${currentYear})`;
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    const result = car.getCarAge();
    //   console.log(result); // 6 (assuming current year is 2024)
    //
}
