function generateId(seed: number) {
  return seed + "1000";
}

function generateId2(seed: number) {
  return seed + 123;
}

// generic type function
// if it equals to the return type of the function
//  then the return type is the same of the return type of the function
type RType<T> = T extends (...args: any[]) => infer R ? R : any;

// RType is built-in-ready in ts 3 as ReturnType

// invoke the generic type function then get the inferred type
type ExpectedString = RType<typeof generateId>;
type ExpectedNumber = ReturnType<typeof generateId>;

// generic type function
// if it equals to a promise array
// then the return type is the return type of the promise then
type UnpackPromise<T> = T extends Promise<infer K>[] ? K : any;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
// Promise.resolve(true) is a promise object of fulfilled state
const pArray = [Promise.resolve(true), Promise.resolve("foo")];

type ExpectedBooleanOrString = UnpackPromise<typeof pArray>;
