// O(n*n!) time | O(n*n!) space
function getPermutations(array) {
  const answers = [];
  permute(array, [], answers);
  return answers;
}

function permute(array, set, answers) {
  if (array.length === 0 && set.length !== 0) {
    answers.push([...set]);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.filter((num, index) => index !== i);
      set.push(array[i]);
      permute(newArray, set, answers);
      set.pop();
    }
  }
}
