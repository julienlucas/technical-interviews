class Stack {
  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push(item) {
    return this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }
}

let books = new Stack();
books.push("Book 1");
books.push("Book 2");
books.push("Book 3");
console.log(books.peek());
books.pop();
console.log(books.peek());
console.log(books.length);
