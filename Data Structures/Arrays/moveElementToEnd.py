######### PROBLEM ##########
# You're given an array of integers and an integer. Write a function that moves
# all instances of that integer in the array to the end of the array and returns
# the array.
# The function should perform this in place (i.e., it should mutate the input
# array) and doesn't need to maintain the order of the other integers.

######### SOLUTION ##########
# Optimal Solution
# Time: O(n) where n is the length of the array
# Space: O(1)
def moveElementToEnd(array, toMove):
    # Write your code here.
    left = 0
    right = len(array) - 1

    while left < right:
        rightValue = array[right]
        leftValue = array[left]
        if rightValue == toMove:
            right = right - 1
            continue
        if leftValue != toMove:
            left = left + 1
            continue
        array[left], array[right] = rightValue, leftValue

    return array
