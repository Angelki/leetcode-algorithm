# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# main function: pathSum
# extra function: helper()
# double recursive
class Solution:
    def pathSum(self, root: TreeNode, sumn: int) -> int:
        if not root:
            return 0
        
        def helper(root, sumn) -> int:
            ins = 0
            if not root:
                return 0
            if root.val == sumn:
                ins = 1
            return ins + helper(root.left, sumn-root.val) + helper(root.right, sumn-root.val)
            
        
        return helper(root, sumn) + self.pathSum(root.left,sumn) + self.pathSum(root.right, sumn)


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


# Solution2
class Solution:
    def __init__(self):
        self.ans = 0
    def pathSum(self, root: TreeNode, sumn: int) -> int:
        if not root:
            return 0
        self.dfs(root, sumn)
        self.pathSum(root.left, sumn)
        self.pathSum(root.right, sumn)
        return self.ans

    def dfs(self, root, sumn):
        if not root:
            return
        sumn -= root.val
        if not sumn:
            self.ans += 1
        self.dfs(root.left, sumn)
        self.dfs(root.right, sumn)