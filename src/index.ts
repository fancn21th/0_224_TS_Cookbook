class Foo {
  // definite assign operator
  // indicate it must be assigned at runtime
  titles!: string[];

  constructor() {}
}

const foo = new Foo();

foo.titles.forEach((t) => console.log(t));
