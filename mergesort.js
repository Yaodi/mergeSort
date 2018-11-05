const split = array => {
  if (array.length < 2) return array;
  let firstHalf = array.slice(0, Math.round(array.length / 2));
  let secondHalf = array.slice(Math.round(array.length / 2));
  // console.log("first half", firstHalf);
  // console.log("second half", secondHalf);
  return [firstHalf, secondHalf];
};
