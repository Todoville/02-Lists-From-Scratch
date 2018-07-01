'use strict';

const List = require('../src/lib/list');
 
describe('testing methods of List class', () => {
  let myList;
  beforeEach(() => {
    myList = new List();
    myList.push(0, 1, 2, 3, 4, 5);
  });

  afterEach(() => {
    myList = null;
  });

  test('PUSH: should show that the push method adds new items into the array', () => {
    expect(myList).toHaveLength(6);
    myList.push(6);
    expect(myList).toHaveLength(7);
    myList.push();
    expect(myList).toHaveLength(7);
    expect(myList[myList.length - 1]).toEqual(6);
    expect(myList.push(7, 8, 9)).toEqual(10);
  });


  test('MAP: throws error if list is empty', () => {
    const emptyList = new List();
    expect(() => {
      emptyList.map(e => e);
    }).toThrow();
  });

  test('MAP: throws error if not a function', () => {
    expect(() => {
      myList.map('not a function');
    }).toThrow();
  });

  test('MAP: should return a new list', () => {
    const newList = myList.map((num) => {
      return num * 2;
    });
    expect(newList).toHaveLength(myList.length);
    for (let i = 0; i < myList.length; i++) {
      expect(newList[i] / 2).toEqual(myList[i]);
    }
  });

  test('REDUCE: should reduce the elements in the list to one single multiplied product with NO accumulator passed in', () => {
    const product = myList.reduce((accumulator, current) => {
      return accumulator * current;
    });
    expect(product).toEqual(0);
  });

  test('REDUCE: should reduce the elements in the list to a single value while adding 10 accumulatively', () => {
    const sum = myList.reduce((accumulator, current) => {
      return accumulator + current;
    }, 10);
    expect(sum).toEqual(25);
  });
  test('FOR EACH: should iterate over the elements in a list and apply a function to them', () => {
    const testList = new List();
    testList.push(0, 2, 4, 6, 8, 10);
    expect(myList.forEach((x => x * 2))).toEqual(testList);
  });
  test('FILTER: should return elements which match a given parameter', () => {
    const filtered = myList.filter((x => x % 2 === 0));
    const testList = new List();
    testList.push(0, 2, 4);
    expect(filtered).toEqual(testList);
  });
});
