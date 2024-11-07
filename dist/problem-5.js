"use strict";
{
    //
    // Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
    //   type Person = {
    //     name: string;
    //     age: number;
    //   };
    const getProperty = (personOnj, objKey) => {
        return personOnj[objKey];
    };
    //   const person:Person = { name: "Alice", age: 30 };
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
    //
}
