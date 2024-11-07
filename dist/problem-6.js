"use strict";
{
    const updateProfile = (obj, updateProps) => {
        return Object.assign(Object.assign({}, obj), updateProps);
    };
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    const result = updateProfile(myProfile, { age: 230 });
    console.log(result); // { name: 'Alice', age: 230, email: 'alice@example.com' }
    //
}
