function sort(array) {
  const length = array.length;
  if (length < 2) {
    return;
  }
  for (let j = 1; j < length; j += 1) {
    const value = array[j];
    // insert value at the right position among the j - 1 first elements
    let i = j - 1;
    while (i >= 0 && array[i] > value) {
      array[i + 1] = array[i];
      i = i - 1;
    }
    array[i + 1] = value;
  }
}

module.exports = sort;
