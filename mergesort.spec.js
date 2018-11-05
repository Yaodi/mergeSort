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
    expect(
      split([5, 6, 7, 1, 2, 8, 3, 4, 9, 10, 11]).toEqual([
        [5, 6, 7, 1, 2],
        [8, 3, 4, 9, 10, 11]
      ])
    );
  });
});
