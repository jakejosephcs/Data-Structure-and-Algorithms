# Optimal solution
# time: O(n) where n is the length of the competitions array
# space: O(k) where k is the number of teams
def tournamentWinner(competitions, results):
    # Create a dictonary to hold the competitors and their scores
    # Iterate through compeitions / results array and update scores of competitors
    # Iterate through dictonary to get competitor with the highest score

    scores = {}

    for i in range(len(competitions)):
        if results[i] == 0:
            if scores.get(competitions[i][1]) == None:
                scores[competitions[i][1]] = 3
            else:
                scores[competitions[i][1]] += 3
        else:
            if scores.get(competitions[i][0]) == None:
                scores[competitions[i][0]] = 3
            else:
                scores[competitions[i][0]] += 3

    winner = None
    winnerScore = 0

    for team, score in scores.items():
        if score > winnerScore:
            winnerScore = score
            winner = team

    return winner
