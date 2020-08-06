class Solution:
    def isRectangleOverlap(self, rec1: List[int], rec2: List[int]) -> bool:
        # [x1, y1, x2, y2]
        if rec1[3] <= rec2[1]:
            return False
        if rec1[1] >= rec2[3]:
            return False
        if rec1[0] >= rec2[2]:
            return False
        if rec1[2] <= rec2[0]:
            return False
        return True