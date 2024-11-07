{
  //
  // Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (
    obj: Profile,
    updateProps: Partial<Profile>
  ): Profile => {
    return { ...obj, ...updateProps };
  };

  const myProfile:Profile = { name: "Alice", age: 25, email: "alice@example.com" };
  const result = updateProfile(myProfile, { age: 230});
  console.log(result); // { name: 'Alice', age: 230, email: 'alice@example.com' }

  //
}
