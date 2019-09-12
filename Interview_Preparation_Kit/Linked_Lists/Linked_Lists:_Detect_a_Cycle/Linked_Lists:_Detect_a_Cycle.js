/* 
This code is in JAVA, but i saved it in JS file.
Detect a cycle in a linked list. Note that the head pointer may be 'null' if the list is empty. 

A Node is defined as: 
class Node { 
int data; 
Node next; 
} 
*/ 

boolean hasCycle(Node head) { 
    Node tmp1 = head; 
    Node tmp2 = head; 

    if (tmp1 == null) { 
        return false; 
    }

    while (true) { 
        if (tmp1 == null || tmp2 == null) { 
            return false; 
        } 
        tmp1 = tmp1.next; 
        tmp2 = tmp2.next.next; 
        if (tmp1 == tmp2) { 
            return true; 
        } 
    } 
}