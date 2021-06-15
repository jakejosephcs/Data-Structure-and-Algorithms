
######### PROBLEM ##########
# Given a non-empty string of lowercase letters and a non-negative integer
# representing a key, write a function that returns a new string obtained by
# shifting every letter in the input string by k positions in the alphabet,
# where k is the key.

# Note that letters should "wrap" around the alphabet; in other words, the
# letter z shifted by one returns the letter a


######### SOLUTION ##########

# Optimal Solution
# Time: O(n) where n is the length of the string
# Space: O(n)
def caesarCipherEncryptor(string, key):
    # Write your code here.
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    finalString = ""
    for i in range(len(string)):
        letter = string[i]
        asciiValue = ord(letter)
        updatedAsciiValue = asciiValue + key
        newLetter = alphabet[(updatedAsciiValue-97) % 26]
        finalString += newLetter
    return finalString
