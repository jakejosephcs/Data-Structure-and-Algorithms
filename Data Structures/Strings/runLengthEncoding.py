######### PROBLEM ##########
# Write a function that takes in a non-empty string and returns its run-length
# encoding.


######### SOLUTION ##########
# Optimal solution
# Time: O(n) where n is the length of the input string
# Space: O(n)
def runLengthEncoding(string):
    currentLength = 1
    runLengthEncoding = []

    for i in range(1, len(string)):
        currentLetter = string[i]
        prevLetter = string[i-1]

        if currentLetter != prevLetter or currentLength == 9:
            runLengthEncoding.append(str(currentLength))
            runLengthEncoding.append(prevLetter)
            currentLength = 0

        currentLength += 1

    runLengthEncoding.append(str(currentLength))
    runLengthEncoding.append(string[len(string) - 1])

    return "".join(runLengthEncoding)
