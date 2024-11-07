The significance of union and intersection types in Typescript


Union: use multiple  types in a single variable declaration. it's like javascript OR logic , when we are write code in javascript we use ||  this sign for OR logic apply , it's mean, a lot of condition in a single variable apply with this || sign , the value will check all condition , if any condition are match with our logic than it will return and eacute , Similarly, in TypeScript, a union type allows a variable to accept one of different types, and we use this sign | to combine them.

example: 

# let value: string | number;

we can use this for different type of data like string, number, boolean etc.

# type UnionType = string | number | boolean;

<!-- ________________________________________________________________ -->


Intersection Types: for this use multiple types in single variable declaration with & sign  but this time the variable must match all the condition types , it's like javascript AND logic , when we are write code in javascript we use && this sign . where the value must match all condition , if any condition are not match than it will return false , Similarly, in TypeScript, an intersection type allows a variable to accept all of the types, and we use this sign & to combine them and must match with all type and condition then it eacute .


# let value: { name: string } & { age: number };

We can also use intersection types to create new types by combining different types together

# type Person = { name: string } & { age: number } & { email: string };
