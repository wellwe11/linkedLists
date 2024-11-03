// Object to hold all Nodes & add add methods to maniupulate list with nodes
export default function LinkedList() {
  // LinkedList class / factory, which will represent the full list.

  // Add unique nodes to LinkedList; contain list of all nodes
  const Node = (val) => ({ value: val || null, nextNode: null });

  let first = null;
  let last = null;

  const append = (val) => {
    const currNode = Node(val);
    if (!first) {
      first = currNode;
      last = currNode;
    } else {
      last.nextNode = currNode;
      last = currNode;
    }
    // append(value) adds a new node containing value to the end of the list
  };

  const prepend = () => {
    // prepend(value) adds a new node containing value to the start of the list
  };

  const size = () => {
    // size returns the total number of nodes in the list
  };

  const head = () => {
    // head returns the first node in the list
  };

  const tail = () => {
    // tail returns the last node in the list
  };

  const at = () => {
    // at(index) returns the node at the given index
  };

  const pop = () => {
    // pop removes the last element from the list
  };

  const contains = () => {
    // contains(value) returns true if the passed in value is in the list and otherwise returns false.
  };

  const find = () => {
    // find(value) returns the index of the node containing value, or null if not found.
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
  };

  const removeAt = () => {
    // removeAt(index) that removes the node at the given index.
  };

  return {
    append,
    toString,
  };
}

const someThing = LinkedList();

someThing.append("dog");
someThing.append("horse");
someThing.append("cat");

console.log(someThing.toString());

// when creating a new LinkedList, and appending something, it will append a "new Node object"

// array that appends strings, sorts them based on some logic.

/*

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

Outputs: ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

*/
