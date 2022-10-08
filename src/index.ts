class Foo {
  titles: string[] | undefined;

  constructor() {}
}

const foo = new Foo();

// try to remove the guard on the left
foo.titles && foo.titles.forEach((t) => console.log(t));
