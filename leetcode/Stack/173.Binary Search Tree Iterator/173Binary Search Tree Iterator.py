# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
# 中序遍历（非递归版本）
class BSTIterator:

    def __init__(self, root: TreeNode):
        self.stack = []
        while root:
            self.stack.append(root)
            root = root.left
        

    def next(self) -> int:
        """
        @return the next smallest number
        """
        tmp = self.stack.pop()
        
        p = tmp.right
        while p:
            self.stack.append(p)
            p = p.left
        
        return tmp.val
        

    def hasNext(self) -> bool:
        """
        @return whether we have a next smallest number
        """
        return True if self.stack else False


# Your BSTIterator object will be instantiated and called as such:
# obj = BSTIterator(root)
# param_1 = obj.next()
# param_2 = obj.hasNext()