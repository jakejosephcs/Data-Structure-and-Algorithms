######### PROBLEM ##########
#   You're given a string of available characters and a string representing a
#   document that you need to generate. Write a function that determines if you
#   can generate the document using the available characters. If you can generate
#   the document, your function should return True ; otherwise, it
#   should return False. Note: you can always generate the empty string ("")


######### SOLUTION ##########
# Optimal Solution
# Time: O(n + m) where n is the length of the characters string and m is the length of the document string
# Space: O(c) where c is the number of unique letters in characters
def generateDocument(characters, document):
    if len(document) == 0:
        return True

    uniqueCharacterDict = dict()
    for char in characters:
        if uniqueCharacterDict.get(char) == None:
            uniqueCharacterDict[char] = 1
        else:
            uniqueCharacterDict[char] += 1

    for letter in document:
        if uniqueCharacterDict.get(letter) == None or uniqueCharacterDict.get(letter) <= 0:
            return False
        else:
            uniqueCharacterDict[letter] -= 1

    return True
