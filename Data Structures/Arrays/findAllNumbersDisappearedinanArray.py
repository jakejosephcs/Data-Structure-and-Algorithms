######### PROBLEM: Leetcode 283. Move Zeroes ##########

######### SOLUTION ##########
# Niave Solution
# Time: O(n) where n is the length of the nums array
# Space: O(n)
class Solution(object):
    def findDisappearedNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        seen = dict()
        for i in range(len(nums)):
            if nums[i] not in seen:
                seen[nums[i]] = True

        notInNums = []
        for i in range(1, len(nums) + 1):
          if i not in seen:
            notInNums.append(i)
        
        return notInNums