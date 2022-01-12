//141. Linked List Cycle

/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

ex)
Input: head = [3,2,0,-4], pos = 1
Output: true

Input: head = [1,2], pos = 0
Output: true

Input: head = [1], pos = -1
Output: false
*/

var hasCycle = function(head) {
    if(!head) return false

    const nodeArray = [];
    const headNode = head;
    let nextNode = head.next;
    nodeArray.push(headNode);

    while(nextNode) {
        if(nodeArray.includes(nextNode)) return true
        nodeArray.push(nextNode);
        nextNode = nextNode.next;
    }

    return false
};