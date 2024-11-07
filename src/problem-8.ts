{
  //
  // Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

  interface Person {  // ignore it if you need , it just for my own happy
    name: string;
    age: number;
    email: string;
  }

  const validateKeys = <T extends Person>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    return keys.every((key) => key in obj);
  };
  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"]));

  //
}
