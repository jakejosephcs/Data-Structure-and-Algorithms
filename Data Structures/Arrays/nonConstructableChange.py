######### PROBLEM ##########
# Given an array of positive integers representing the values of coins in your
# possession, write a function that returns the minimum amount of change (the
# minimum sum of money) that you cannot create. The given coins can have
# any positive integer value and aren't necessarily unique (i.e., you can have
# multiple coins of the same value).

# For example, if you're given coins = [1, 2, 5], the minimum
# amount of change that you can't create is 4. If you're given no
# coins, the minimum amount of change that you can't create is 1

######### SOLUTION ##########
# input: array of integers (coins)
# output: integer

def nonConstructibleChange(coins):
    if len(coins) == 0:
        return 1

    coins.sort()

    if coins[0] != 1:
        return 1

    sum = coins[0]
    for i in range(1, len(coins)):
        if coins[i] > sum + 1:
            return sum + 1
        else:
            sum = sum + coins[i]
    return sum + 1
