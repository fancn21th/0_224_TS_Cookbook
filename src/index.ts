// this example originate form https://egghead.io/lessons/redux-simplify-iteration-of-custom-data-structures-in-typescript-with-iterators

interface Action {
  type: string;
}

/**
 *  it is more than type something but give the type with specific functionality to do something
 *
 *
 */

interface ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  prev: ListNode<T> | null;
}

class BackwardsActionIterator implements IterableIterator<Action> {
  constructor(private _currentActionNode: ListNode<Action> | null) {}

  [Symbol.iterator](): IterableIterator<Action> {
    return this;
  }

  next(): IteratorResult<Action> {
    const curr = this._currentActionNode;
    if (!curr || !curr.value || curr.value === null) {
      return { value: null, done: true };
    }
    //1. move through each item in the list
    this._currentActionNode = curr.prev;
    //2. return each item
    return { value: curr.value, done: false };
  }
}

let action1 = { type: "LOGIN" };
let action2 = { type: "LOAD_POSTS" };
let action3 = { type: "DISPLAY_POSTS" };
let action4 = { type: "LOGOUT" };

let actionNode1: ListNode<Action> = {
  prev: null,
  next: null,
  value: action1,
};

let actionNode2: ListNode<Action> = {
  prev: actionNode1,
  next: null,
  value: action2,
};
actionNode1.next = actionNode2;

let actionNode3: ListNode<Action> = {
  prev: actionNode2,
  next: null,
  value: action3,
};
actionNode2.next = actionNode3;

let actionNode4: ListNode<Action> = {
  prev: actionNode3,
  next: null,
  value: action4,
};

actionNode3.next = actionNode4;

const backwardsActionsList = new BackwardsActionIterator(actionNode4);

for (let action of backwardsActionsList) {
  console.log(action.type);
}
