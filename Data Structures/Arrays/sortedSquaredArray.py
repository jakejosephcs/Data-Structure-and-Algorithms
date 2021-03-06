######### PROBLEM ##########
# Write a function that takes in a non-empty array of integers that are sorted
# in ascending order and returns a new array of the same length with the squares
# of the original integers also sorted in ascending order.

######### SOLUTION ##########
# input: array of integers
# output: array of integers

# Naive solutions | time: O(nlogn) | space: O(1)
def sortedSquaredArray(array):
    # Iterate through array and turn negatives to positives (in place)
    # Sort the array (in place)
    # Iterate through array and square each term

    for i in range(len(array)):
        if array[i] < 0:
            array[i] = array[i] * -1

    array.sort()

    for i in range(len(array)):
        array[i] = array[i] ** 2

    return array

# Optimal solutions | time: O(n) | space: O(n)
def sortedSquaredArray(array):
    newArray = [None] * len(array)
    arrayStartPointer = 0
    arrayEndPointer = len(array) - 1
    newArrayPointer = len(array) - 1

    while newArrayPointer >= 0:
        if abs(array[arrayStartPointer]) > abs(array[arrayEndPointer]):
            newArray[newArrayPointer] = array[arrayStartPointer]**2
            arrayStartPointer = arrayStartPointer + 1
            newArrayPointer = newArrayPointer - 1
        else:
            newArray[newArrayPointer] = array[arrayEndPointer]**2
            arrayEndPointer = arrayEndPointer - 1
            newArrayPointer = newArrayPointer - 1
    return newArray
