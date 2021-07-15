######### PROBLEM: Leetcode 283. Move Zeroes ##########

######### SOLUTION ##########
# Naive solution
# Time: O(n^2) where n is the size of the nums array
# Space: O(1)
class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        if len(nums) == 1:
            return nums
        for i in range(len(nums)):
            if nums[i] != 0:
                continue
            else:
                for j in range(i+1, len(nums)):
                    if nums[j] == 0:
                        continue
                    else:
                        nums[i], nums[j] = nums[j], nums[i]
                        break
        return nums

######### SOLUTION ##########
# Optimal solution
# Time: O(n) where n is the size of the nums array
# Space: O(1)


class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        nonZeroPointer = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[nonZeroPointer] = nums[i]
                nonZeroPointer += 1
        for j in range(nonZeroPointer, len(nums)):
            nums[j] = 0
        return nums
