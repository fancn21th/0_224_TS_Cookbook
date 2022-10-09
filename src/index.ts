interface TreeNode<T> {
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
}

interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T> | null;
}

let nodeA: LinkedListNode<string>;

nodeA = {
  value: "hi",
  next: null,
};
