/**
 *  Type is more type robust like
 *    - it support type union
 *    - it support complex type like function and array
 *    - it support type merge
 *
 *  VS
 *
 *  Interface is more object oriental
 *    - it support type merge
 *    - it is important expose lib public api with interface
 *
 */

// type Foo = (foz: string) => void;

// interface IFoo {
//   (foz: string): void;
// }

// type Bar = string[];

// interface IBar {
//   [index: number]: string;
// }

type Foo = {
  foz: (fit: string) => void;
};

interface IFoo {
  foz: (fit: string) => void;
}

type Bar = {
  baz: string[];
};

interface IBar {
  baz: string[];
}

interface IHybrid extends Foo, IBar {}

type Hybrid = IFoo & Bar;

class HybridClass implements IFoo, Bar {
  foz(fit: string) {}
  baz: string[];
}

// no error now !

interface ISub extends Foo {}

class ClassSub implements Foo {
  foz(fit: string) {}
}
