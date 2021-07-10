
######### PROBLEM ##########
# Write a function that takes in an n x m two-dimensional array (that can be
# square-shaped when n == m) and returns a one-dimensional array of all the
# array's elements in spiral order.
# Spiral order starts at the top left corner of the two-dimensional array, goes
# to the right, and proceeds in a spiral pattern all the way until every element
# has been visited.

######### SOLUTION ##########
# Optimal Solution
# Time: O(n) where n is the size of the array
# Space: O(n)
def spiralTraverse(array):
    finalArray = []
    top = 0
    bottom = len(array) - 1
    left = 0
    right = len(array[0]) - 1
    size = len(array) * len(array[0])

    while len(finalArray) < size:
        for i in range(left, right + 1):
            if len(finalArray) == size:
                break
            finalArray.append(array[top][i])
        top = top + 1

        for i in range(top, bottom + 1):
            if len(finalArray) == size:
                break
            finalArray.append(array[i][right])
        right = right - 1

        for i in range(right, left - 1, -1):
            if len(finalArray) == size:
                break
            finalArray.append(array[bottom][i])
        bottom = bottom - 1

        for i in range(bottom, top - 1, -1):
            if len(finalArray) == size:
                break
            finalArray.append(array[i][left])
        left = left + 1
    return finalArray
