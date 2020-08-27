// O(d) time | O(1) space
class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const descendantOneDepth = getDescendantDepth(topAncestor, descendantOne);
  const descendantTwoDepth = getDescendantDepth(topAncestor, descendantTwo);

  if (descendantOneDepth > descendantTwoDepth) {
    return youngestCommonAncestor(
      descendantOne,
      descendantTwo,
      descendantOneDepth - descendantTwoDepth
    );
  } else {
    return youngestCommonAncestor(
      descendantTwo,
      descendantOne,
      descendantTwoDepth - descendantOneDepth
    );
  }
}

function getDescendantDepth(ancestor, descendant) {
  let depth = 0;
  while (descendant !== ancestor) {
    descendant = descendant.ancestor;
    depth++;
  }
  return depth;
}

function youngestCommonAncestor(lowerDescendant, higherDescendant, difference) {
  while (difference > 0) {
    lowerDescendant = lowerDescendant.ancestor;
    difference--;
  }
  while (higherDescendant !== lowerDescendant) {
    lowerDescendant = lowerDescendant.ancestor;
    higherDescendant = higherDescendant.ancestor;
  }
  return lowerDescendant;
}

