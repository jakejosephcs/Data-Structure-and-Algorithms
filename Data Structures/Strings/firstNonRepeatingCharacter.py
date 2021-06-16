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
