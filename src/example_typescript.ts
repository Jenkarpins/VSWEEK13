interface User {
    name: string;
    age: number;
    isMember: boolean;
  }
  
  function greetUser(user: User): string {
    return user.isMember
      ? `Welcome back, ${user.name}!`
      : `Hello, ${user.name}. Join us to enjoy more features!`;
  }
  
  const user1: User = { name: "Jen", age: 22, isMember: true};
  console.log(greetUser(user1));
  