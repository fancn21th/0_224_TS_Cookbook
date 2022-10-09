interface User {
  name: string;
  age: number;
  favorite?: string;
}

//  use case : redux state must be immutable
// +remove optional property
// add flag make it more explicit
type ReadOnlyUser = {
  +readonly [K in keyof User]-?: User[K];
};

const looseUser: User = { name: "alex", age: 18 };
const strictUser: ReadOnlyUser = { name: "bob", age: 20 };

looseUser.age = 21;
// strictUser.age = 23;
