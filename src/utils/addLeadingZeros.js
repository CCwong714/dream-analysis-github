const addLeadingZeros = (num, totalLength) => {
  return String(num).padStart(totalLength, '0');
};

export default addLeadingZeros;
