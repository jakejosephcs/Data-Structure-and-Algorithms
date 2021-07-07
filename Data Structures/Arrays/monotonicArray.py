######### PROBLEM ##########
# Write a function that takes in an array of integers and returns a boolean
# representing whether the array is monotonic.
# An array is said to be monotonic if its elements, from left to right, are
# entirely non-increasing or entirely non-decreasing.
# Non-increasing elements aren't necessarily exclusively decreasing; they simply
# don't increase. Similarly, non-decreasing elements aren't necessarily
# exclusively increasing; they simply don't decrease.
# Note that empty arrays and arrays of one element are monotonic.

######### SOLUTION ##########
# Optimal Solution
# Time: O(n) where n is the length of the arry
# Space: O(1)
def isMonotonic(array):
    if len(array) <= 2:
        return True

    direction = array[1] - array[0]

    for i in range(2, len(array)):
        if direction == 0:
            direction = array[i] - array[i - 1]
            continue
        if changeDirection(direction, array[i], array[i-1]):
            return False
    return True


def changeDirection(direction, currInt, prevInt):
    difference = currInt - prevInt
    if direction > 0:
        return difference < 0
    return difference > 0
