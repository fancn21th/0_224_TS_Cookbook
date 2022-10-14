function generateId(seed: number) {
  return seed + "1000";
}

// if it equals to the return type of the function then the return type is the same of the return type of the function
type RType<T> = T extends (...args: any[]) => infer R ? R : any;
type Id = RType<typeof generateId>;
type Id2 = ReturnType<typeof generateId>;
