def towerOfHanoi(numDisk, source, auxiliary, target):
    # initiate number of towers
    num_tower = 3

    # declare disk by integer
    disks = [i for i in range(numDisk)]

    # create row of towers, first tower will be full of disk from the start
    towers = []
    for i in range(num_tower):
        if i == 0:
            towers.append(disks)
        else:
            towers.append([])

    # iterate to solve the game, last tower have to get similar array with first tower:
    # rules :
    # 1. only one disk to be placed per iteration
    # 2. cannot place larger disk on to smaller disk
    count = 0
    # for i in range(len(towers)):
    #     for j in range(len(towers[i])):
    #         disk_to_move = towers[i][j]

    return towers

def hanoi_moves(n, source, auxiliary, target, moves=None):
    if moves is None:
        moves = []

    if n == 0:
        return moves

    hanoi_moves(n - 1, source, target, auxiliary, moves)
    moves.append((n, source, target))
    hanoi_moves(n - 1, auxiliary, source, target, moves)

    return moves

def tower_of_hanoi(n, source, auxiliary, target):
    """
    Solve Tower of Hanoi by printing the steps.
    n         -> number of disks
    source    -> starting rod
    auxiliary -> helper rod
    target    -> destination rod
    """
    if n == 0:
        return
    
    # Step 1: Move n-1 disks from source to auxiliary
    tower_of_hanoi(n - 1, source, target, auxiliary)

    # Step 2: Move the nth disk from source to target
    print(f"Move disk {n} from {source} → {target}")

    # Step 3: Move the n-1 disks from auxiliary to target
    tower_of_hanoi(n - 1, auxiliary, source, target)

print(tower_of_hanoi(3,'A','B','C'))




        

# print(hanoi_moves(5, 'A', 'B', 'C'))

# [[0,1,2], [], []]
# [[1,2], [], [0]]
# [[2], [1], [0]]
# [[2], [0,1], []]
# [[], [0,1], [2]]
# [[0], [1], [2]]
# [[0], [], [1,2]]
# [[], [], [0,1,2]]


# [[0,1,2,3], [], []]
# [[1,2,3], [0], []]
# [[2,3], [0], [1]]
# [[2,3], [], [0,1]]
# [[3], [2], [0,1]]
# [[0,3], [2], [1]]
# [[0,3], [1,2], []]
# [[3], [0,1,2], []]
# [[], [0,1,2], [3]]
# [[], [1,2], [0,3]]
# [[1], [2], [0,3]]
# [[0,1], [2], [3]]
# [[0,1], [], [2,3]]
# [[1], [0], [2,3]]
# [[], [0], [1,2,3]]
# [[], [], [0,1,2,3]]

# 7, 15, 31

# 3, 4, 5

def countdown(n):
    if n == 0:
        return
    print(n)
    countdown(n - 1)
# print(countdown(5))

