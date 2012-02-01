
Array Extras for Javascript
===========================

A few little things I find myself using a lot.


Array.clone()
-------------
Create a new copy of an array.

```javascript
var a = [1, 2, 3];
var b = a.clone();
// b == [1, 2, 3]
```

Array.cons()
------------
Remove the first array element from the array (head) and return an object containing both the head and remainder of the array (tail).  Cons doesn't mutate the source array.

```javascript
var a = [1, 2, 3];
var b = a.cons();
// a == [1, 2, 3];
// b.head = 1;
// b.tail = [2, 3];
```

Array.sets()
------------
Returns a new array containing consecutive sets from the source array.

```javascript
var a = [1, 2, 3];
var b = a.sets();
// b == [ [1, 2], [2, 3] ]
```

Array.pairs()
------------
Returns a new array containing consecutive pairs from the source array.

```javascript
var a = [1, 2, 3, 4].pairs();
// a == [ [1, 2], [3, 4] ]
var b = [1, 2, 3].pairs();
// b == [ [1, 2], [3] ]
```

Array.triples()
------------
Returns a new array containing consecutive triples from the source array.

```javascript
var a = [1, 2, 3, 4, 5, 6].pairs();
// a == [ [1, 2, 3], [4, 5, 6] ]
var b = [1, 2, 3, 4].pairs();
// b == [ [1, 2, 3], [4] ]
```

Array.ipop()
-----------
Same thing as .cons() but works on the last element.  Head in this case is the remainder array.

```javascript
var a = [1, 2, 3];
var b = a.ipop();
// a == [1, 2, 3];
// b.head = [1, 2];
// b.tail = 3;
```

Array.ipush()
-------------
Same thing as .push() but does not mutate the source array.  Returns the new array.

```javascript
var a = [1, 2, 3];
var b = a.push(4);
// a == [1, 2, 3];
// b == [1, 2, 3, 4];
```

Array.ireverse()
-------------
Same thing as .reverse() but does not mutate the source array.  Returns the new array.

```javascript
var a = [1, 2, 3];
var b = a.reverse();
// a == [1, 2, 3];
// b == [3, 2, 1];
```

Array.iunshift()
-------------
Same thing as .unshift() but does not mutate the source array.  Returns the new array.

```javascript
var a = [1, 2, 3];
var b = a.unshift(0);
// a == [1, 2, 3];
// b == [0, 1, 2, 3];
```
