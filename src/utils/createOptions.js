import addLeadingZeros from './addLeadingZeros';
import {
  ITEMS_PER_RANGE_LARGE,
  ITEMS_PER_RANGE_MEDIUM,
  ITEMS_PER_RANGE_SMALL,
} from './index';

// Create a list of options for range selection
const createOptions = (total) => {
  const options = [];
  let itemsPerRange = 0;
  let numberOfRanges = 0;
  let baseIndex = 0;
  let label = 0;

  if (total <= 100) {
    itemsPerRange = ITEMS_PER_RANGE_SMALL;
    numberOfRanges = total / itemsPerRange;
  } else if (total <= 1000) {
    itemsPerRange = ITEMS_PER_RANGE_MEDIUM;
    numberOfRanges = total / itemsPerRange;
  } else if (total <= 10000) {
    itemsPerRange = ITEMS_PER_RANGE_LARGE;
    numberOfRanges = total / itemsPerRange;
  }

  const indexInString = (adder = 0, totalLength = 3) => {
    return `${addLeadingZeros(baseIndex + adder, totalLength)}`;
  };

  for (let i = 0; i < numberOfRanges; i++) {
    baseIndex = Number(`${i * itemsPerRange}`);

    if (total <= 100) {
      label = `${indexInString(1)} - ${indexInString(itemsPerRange)}`;
    } else if (total <= 1000) {
      label = `${indexInString()} - ${indexInString(itemsPerRange - 1)}`;
    } else if (total <= 10000) {
      label = `${indexInString(1, 4)} - ${indexInString(itemsPerRange, 4)}`;
    }

    options.push({
      label: label,
      value: baseIndex,
    });
  }

  return options;
};

export default createOptions;
