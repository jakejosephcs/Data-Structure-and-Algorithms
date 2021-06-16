######### PROBLEM ##########
# Write a function that takes in a string of lowercase English-alphabet letters
# and returns the index of the string's first non-repeating character.
# If the input string doesn't have any non-repeating characters, your function
# should return -1

######### SOLUTION ##########
# Naive solution:
# Time: O(n^2) where n is the length of the input string
# Space: O(1)
def firstNonRepeatingCharacter(string):
    for i in range(len(string)):
        foundRepeating = False
        for j in range(len(string)):
            if i != j and string[i] == string[j]:
                foundRepeating = True
        if foundRepeating == False:
            return i
    return -1

# Optimal solution:
# Time: O(n) where n is the length of the input string
# Space: O(1) since we are ONLY dealing with lower case letters
#   (finite size dictonay)
def firstNonRepeatingCharacter(string):
    letterFreq = dict()
    for letter in string:
        if letterFreq.get(letter) == None:
            letterFreq[letter] = 1
        else:
            letterFreq[letter] += 1
    for i in range(len(string)):
        currentLetter = string[i]
        if letterFreq[currentLetter] == 1:
            return i
    return -1
