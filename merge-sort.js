/**
 * bounds are inclusive
 */

function sort(array, withoutSentinels = false) {
  return mergeSort(array, 0, array.length - 1, withoutSentinels);
}

function mergeSort(array, lowerBound, upperBound, withoutSentinels) {
  if (upperBound <= lowerBound) {
    return;
  }

  const middle = Math.floor((lowerBound + upperBound) / 2);
  mergeSort(array, lowerBound, middle, withoutSentinels);
  mergeSort(array, middle + 1, upperBound, withoutSentinels);

  if (withoutSentinels) {
    mergeWithoutSentinels(array, lowerBound, middle, upperBound);
  } else {
    merge(array, lowerBound, middle, upperBound);
  }
}

function merge(array, lowerBound, middle, upperBound) {
  const left = array.slice(lowerBound, middle + 1);
  left.push(Infinity); // sentinel value

  const right = array.slice(middle + 1, upperBound + 1);
  right.push(Infinity); // sentinel value

  for (
    let leftIndex = 0, rightIndex = 0, index = lowerBound;
    index <= upperBound;
    index++
  ) {
    const leftValue = left[leftIndex];
    const rightValue = right[rightIndex];
    if (leftValue <= rightValue) {
      array[index] = leftValue;
      leftIndex++;
    } else {
      array[index] = rightValue;
      rightIndex++;
    }
  }
}

function mergeWithoutSentinels(array, lowerBound, middle, upperBound) {
  const left = array.slice(lowerBound, middle + 1);
  const right = array.slice(middle + 1, upperBound + 1);
  for (
    let leftIndex = 0, rightIndex = 0, index = lowerBound;
    index <= upperBound;
    index++
  ) {
    if (leftIndex >= left.length) {
      array[index] = right[rightIndex];
      rightIndex++;
    } else if (rightIndex >= right.length) {
      array[index] = left[leftIndex];
      leftIndex++;
    } else {
      const leftValue = left[leftIndex];
      const rightValue = right[rightIndex];
      if (leftValue <= rightValue) {
        array[index] = leftValue;
        leftIndex++;
      } else {
        array[index] = rightValue;
        rightIndex++;
      }
    }
  }
}

module.exports = sort;
