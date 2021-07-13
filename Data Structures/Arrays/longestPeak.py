######### PROBLEM ##########
# Write a function that takes in an array of integers and returns the length of
# the longest peak in the array.
# A peak is defined as adjacent integers in the array that are strictly
# increasing until they reach a tip (the highest value in the peak), at which
# point they become strictly decreasing. At least three integers are required to
# form a peak.
# For example, the integers [1, 4, 10, 2]  form a peak, but the
# integers [4, 0, 10] don't and neither do the integers
# [1, 2, 2, 0]. Similarly, the integers [1, 2, 3] don't
# form a peak because there aren't any strictly decreasing integers after the
# 3

######### SOLUTION ##########
# Optimal solution
# Time: O(n) where n is the length of the array
# Space: O(1)
def longestPeak(array):
    longest = 0
    currIdx = 1
    while currIdx < len(array) - 1:
        isPeak = array[currIdx -
                       1] < array[currIdx] and array[currIdx] > array[currIdx + 1]

        if not isPeak:
            currIdx += 1
            continue

        leftIdx = currIdx - 2
        while leftIdx >= 0 and array[leftIdx] < array[leftIdx + 1]:
            leftIdx -= 1
        rightIdx = currIdx + 2
        while rightIdx < len(array) and array[rightIdx] < array[rightIdx - 1]:
            rightIdx += 1

        currLongest = rightIdx - leftIdx - 1
        longest = max(longest, currLongest)
        currIdx = rightIdx
    return longest
