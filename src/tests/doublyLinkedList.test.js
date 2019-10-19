
const List = require('../lib/doublyLinkedList.js');

describe('Adding and Removing Values', () => {
  var list;
  beforeEach(() => {
    list = new List();
    list.addFirst(2);
    list.addFirst(1);
    list.addLast(3);
    list.addLast(4);
  });

  test('Values added in the right order', () => {
    expect(Array.from(list.values())).toMatchObject([1, 2, 3, 4]);
  });

  test('Gets', () => {
    expect(list.getFirst()).toBe(1);
    expect(list.getLast()).toBe(4);
    const emptyList = new List();
    expect(emptyList.getFirst()).toBe(undefined);
    expect(emptyList.getLast()).toBe(undefined);
  });

  test('Remove First', () => {
    expect(list.removeFirst()).toBe(1);
    expect(Array.from(list.values())).toMatchObject([2, 3, 4]);
    expect(list.removeFirst()).toBe(2);
    expect(list.removeFirst()).toBe(3);
    expect(list.removeFirst()).toBe(4);
    expect(list.removeFirst()).toBe(undefined);
    expect(Array.from(list.values())).toMatchObject([]);
  });

  test('Remove Last', () => {
    expect(list.removeLast()).toBe(4);
    expect(Array.from(list.values())).toMatchObject([1, 2, 3]);
    expect(list.removeLast()).toBe(3);
    expect(list.removeLast()).toBe(2);
    expect(list.removeLast()).toBe(1);
    expect(list.removeLast()).toBe(undefined);
    expect(Array.from(list.values())).toMatchObject([]);
  });

  test('Remove Specific Value', () => {
    expect(list.remove(2)).toBe(true);
    expect(list.remove(1)).toBe(true);
    expect(list.remove(3)).toBe(true);
    expect(list.remove(10)).toBe(false);
  });

});

describe('Others', () => { 
  var list
  beforeEach(() => {
     list = new List();
  });

  test('Different types and Nesting', () => {
    list.addLast(5);
    list.addLast({ a: 1, v: 3 });
    list.addLast('meh');
    list.addLast(new List());
    expect(Array.from(list.values())).toMatchObject(
      [5,
        { a: 1, v: 3 },
        'meh',
        { head: null, tail: null }]);
  });
  
  test('To Array', () => {
    expect(Array.isArray(list.toArray())).toBe(true);
  });

});



