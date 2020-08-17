// O(n) time | O(n) space
function caesarCipherEncryptor(string, key) {
  let alpabet = 'abcdefghijklmnopqrstuvwxyz';
  let alpabetLookUp = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };
  let currLetter;
  let stringIndex;
  let updatedIndex;
  let finalString = '';
  let newLetter;

  for (let i = 0; i < string.length; i++) {
    currLetter = string[i];
    stringIndex = alpabetLookUp[currLetter];
    updatedIndex = stringIndex + key;
    if (updatedIndex > 25) {
      updatedIndex = updatedIndex % 26;
    }
    newLetter = alpabet[updatedIndex];
    finalString = finalString.concat(newLetter);
  }
  return finalString;
}



