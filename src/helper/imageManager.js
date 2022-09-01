const convertTo1DArray = imageArray => {
  const newArray = [];
  imageArray.forEach(ele => {
    newArray.push(...ele.split(""));
  });
  return newArray;
};

const findPixelColorId = (array1Dimension, scanedId) => {
  return array1Dimension[scanedId - 1];
};


export { convertTo1DArray,findPixelColorId };
