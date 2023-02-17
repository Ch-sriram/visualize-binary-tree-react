export const getAllNumbers = (str: string, splitter = ',') => {
  const allValues = str.split(splitter);
  const allValuesAsNumbers = [];
  for (const value of allValues) {
    const canBeNumber = Number(value.trim());
    if (!isNaN(canBeNumber)) {
      allValuesAsNumbers.push(canBeNumber);
    }
  }
  return allValuesAsNumbers;
}
