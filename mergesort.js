const split = array => {
  if (array.length === 0) return [[], []];
  let firstHalf = array.slice(0, Math.round(array.length / 2));
  let secondHalf = array.slice(Math.round(array.length / 2));

  return [firstHalf, secondHalf];
};

const merge = (arr1, arr2) => {
  let finalArr = [];
  while (arr1[0] || arr2[0]) {
    if (!arr1[0]) {
      finalArr.push(arr2.shift());
    } else if (!arr2[0]) {
      finalArr.push(arr1.shift());
    } else if (arr1[0] < arr2[0]) {
      finalArr.push(arr1.shift());
    } else {
      finalArr.push(arr2.shift());
    }
  }
  return finalArr;
};

const mergeSort = array => {
  if (array.length < 2) return array;

  let splitArr = split(array);
  let arr1 = splitArr[0];
  let arr2 = splitArr[1];
  return merge(mergeSort(arr1), mergeSort(arr2));
};
