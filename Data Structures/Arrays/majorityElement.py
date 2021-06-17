######### PROBLEM: Leetcode 169. Majority Element ##########
######### SOLUTION ##########
# Naive solution
# Time: O(n) where n is the size of the nums array
# Space: O(n)
def majorityElement(nums):
    numFreq = dict()
    for num in nums:
        if numFreq.get(num) == None:
            numFreq[num] = 1
        else:
            numFreq[num] += 1
    majorityElement = None
    majorityElementFreq = len(nums)/2
    for k, v in numFreq.items():
        if v > majorityElementFreq:
            majorityElement = k
            majorityElementFreq = v
    return majorityElement
