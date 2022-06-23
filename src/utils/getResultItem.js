const getResultItem = (results, category) => {
  return results.find((i) => i.cat.toLowerCase() === category);
};

export default getResultItem;
