// describe("Merge Sort", function() {
//   it("handles an empty array", function() {
//     expect(mergeSort([])).toEqual([]);
//   });
//   it("handles an array of length 1", function() {
//     expect(mergeSort([1])).toEqual([1]);
//   });
//   it("handles an array of length 3", function() {
//     expect(mergeSort([4, 1, 2])).toEqual([1, 2, 4]);
//   });
//   it("handles an array of length 10", function() {
//     expect(
//       mergeSort([5, 6, 7, 1, 2, 8, 3, 4, 9, 10, 11]).toEqual([
//         1,
//         2,
//         3,
//         4,
//         5,
//         6,
//         7,
//         8,
//         9,
//         10
//       ])
//     );
//   });
// });

describe("Split Array", function() {
  it("handles an array of length 11", function() {
    expect(split([5, 6, 7, 1, 2, 8, 3, 4, 9, 10, 11])).toEqual([
      [5, 6, 7, 1, 2, 8],
      [3, 4, 9, 10, 11]
    ]);
  });
  it("handles an empty array", function() {
    expect(split([])).toEqual([[], []]);
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("Merge Sort", function() {
  it("with 1 or fewer elements, returns sorted array", function() {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([3])).toEqual([3]);
  });
  it("Merge Sorts an array of length 11", function() {
    expect(mergeSort([1, 7, 9, 3, 15, 4, 12, 2, 17, 8, 6])).toEqual([
      1,
      2,
      3,
      4,
      6,
      7,
      8,
      9,
      12,
      15,
      17
    ]);
  });
});
