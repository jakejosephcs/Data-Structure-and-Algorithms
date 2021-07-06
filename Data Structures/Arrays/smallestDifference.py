######### PROBLEM ##########
# Write a function that takes in two non-empty arrays of integers, finds the
# pair of numbers (one from each array) whose absolute difference is closest to
# zero, and returns an array containing these two numbers, with the number from
# the first array in the first position.
# Note that the absolute difference of two integers is the distance between
# them on the real number line. For example, the absolute difference of -5 and 5
# is 10, and the absolute difference of -5 and -4 is 1.
# You can assume that there will only be one pair of numbers with the smallest
# difference.

######### SOLUTION ##########
# Optimal Solution
# Time: O(nlogn + mlogm) where n is the length of arrayOne and m is the length of arrayTwo
# Space: O(1)
def smallestDifference(arrayOne, arrayTwo):
    arrayOne.sort()
    arrayTwo.sort()

    arrayOneIdx = 0
    arrayTwoIdx = 0
    pair = []

    smallest = float('inf')
    current = float('inf')

    while arrayOneIdx < len(arrayOne) and arrayTwoIdx < len(arrayTwo):
        arrayOneNum = arrayOne[arrayOneIdx]
        arrayTwoNum = arrayTwo[arrayTwoIdx]
        if arrayOneNum < arrayTwoNum:
            current = arrayTwoNum - arrayOneNum
            arrayOneIdx = arrayOneIdx + 1
        elif arrayTwoNum < arrayOneNum:
            current = arrayOneNum - arrayTwoNum
            arrayTwoIdx = arrayTwoIdx + 1
        else:
            return [arrayOneNum, arrayTwoNum]
        if current < smallest:
            smallest = current
            pair = [arrayOneNum, arrayTwoNum]
    return pair
