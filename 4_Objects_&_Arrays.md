## Objects - Big-O

An object is a collection of key value pairs

```
const person = {
    firstName: "Bruce",
    lastName: "Wayne"
}
```

- If you want to insert or remove any property the time complexity is "Constant". No matter how many properties are in an object, it takes thesame amount of time to insert or remove a property

- If you want to access a value or a key the time complexity is "Constant"

- If you want to search for a value in an object the time complexity is "Linear". E.g to search for the value "Wayne" you might have to also search all the values in the object

- Insert - O(1)
- Remove - O(1)
- Access - O(1)
- Search - O(n)

# Object methods

- Object.keys() which returns an array of all the keys has a "Linear" time complexity

- Object.values() which returns an array of all the objects has a "Linear" time complexity

- The Object.entries() which returns an array of a given object's own enumerable string-keyed property key-value pairs has a "Linear" time complexity

- Object.keys() - O(n)
- Object.values() - O(n)
- Object.entries() - O(n)

## Arrays - Big-O

The difference when compared to objects is that arrays are ordered collection of values

- If you insert or remove an element at the end of an array the time complexity is "Constant"

- If you insert or remove at the beginning of an array the time complexity is "Linear". This is because the index has to be reset for every remaining element in that array

- Accessing an element in an array has "Constant" time complexity, because fetching the first element is no different from fetching the element at position 1000

- Searching for an element in an array has "Linear" time complexity

- Insert / remove at end - O(1)
- Insert / remove at beginning - O(n)
- Access - O(1)
- Search - O(n)

# Array Methods

push / pop - O(1)

- shift / unshift / concat / slice / splice - O(n)
- forEach / map / filter / reduce - O(n)
