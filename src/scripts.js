// Object to hold all Nodes & add add methods to maniupulate list with nodes
export default function LinkedList() {
  // LinkedList class / factory, which will represent the full list.

  // add unique nodes to LinkedList; contain list of all nodes
  const Node = (val) => ({ value: val || null, nextNode: null });

  let first = null;
  let last = null;

  const append = (val) => {
    // append(value) adds a new node containing value to the end of the list
    const currNode = Node(val);
    if (!first) {
      first = currNode;
      last = currNode;
    } else {
      last.nextNode = currNode;
      last = currNode;
    }
  };

  const prepend = (val) => {
    // prepend(value) adds a new node containing value to the start of the list
    const currNode = Node(val);
    currNode.nextNode = first;
    first = currNode;
  };

  const size = () => {
    // size returns the total number of nodes in the list
    let num = 0;
    let current = first;
    while (current) {
      current = current.nextNode;
      num++;
    }

    return num;
  };

  const head = () => {
    // head returns the first node in the list
    return first;
  };

  const tail = () => {
    // tail returns the last node in the list
    return last;
  };

  const at = (index) => {
    // at(index) returns the node at the given index
    let num = 0;
    let current = first;
    while (current) {
      if (index === num) break;
      current = current.nextNode;
      num++;
    }

    return current;
  };

  const pop = () => {
    // pop removes the last element from the list
    let current = first;
    while (current) {
      if (current.nextNode === last) {
        last = current;
        last.nextNode = null;
        break;
      }
      current = current.nextNode;
    }
    return current;
  };

  const contains = (val) => {
    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
    let current = first;
    while (current) {
      if (current.value === val) return true;
      current = current.nextNode;
    }
    return false;
  };

  const find = (val) => {
    // find(value) returns the index of the node containing value, or null if not found.
    let current = first;
    let index = 0;
    while (current) {
      if (current.value === val) return index;
      index++;
      current = current.nextNode;
    }
    return null;
  };

  const toString = () => {
    // toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
    let current = first;
    let string = "";

    while (current) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    return string + `null`;
  };

  const insertAt = () => {
    // insertAt(value, index) that inserts a new node with the provided value at the given index.
    let current = first;
    let next = current.nextNode;
  };

  const removeAt = () => {
    // removeAt(index) that removes the node at the given index.
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

const someThing = LinkedList();

someThing.append("dog");
someThing.append("horse");
someThing.append("cat");
someThing.prepend("donkey");
someThing.prepend("horseTwo");
someThing.prepend("horseThree");
someThing.pop();
someThing.pop();

console.log(someThing.toString());
console.log(someThing.contains("donkey"));
console.log(someThing.find("dog"));
console.log(someThing.find("donkey"));
