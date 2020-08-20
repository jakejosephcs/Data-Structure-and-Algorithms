// O(wnlongn) time | O(wn) space
function groupAnagrams(words) {
  const anagrams = {};
  for (word of words) {
    const sortedWord = word.split('').sort().join('');
    if (sortedWord in anagrams) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  return Object.values(anagrams);
}

