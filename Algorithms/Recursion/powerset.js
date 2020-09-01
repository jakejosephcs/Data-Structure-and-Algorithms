// O(n*2^n) time | O(n*2^n) space
function powerset(array) {
  const subsets = [];
  constructPowerset(subsets, [], array, 0);
  return subsets;
}

function constructPowerset(subsets, temp, array, p) {
  subsets.push([...temp]);
  for (let i = p; i < array.length; i++) {
    temp.push(array[i]);
    constructPowerset(subsets, temp, array, i + 1);
    temp.pop();
  }
}

