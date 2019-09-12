'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}

/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) { 
    console.log(headA); 
    console.log(headB); 

    let current1 = seachOfLength(headA); 
    let current2 = seachOfLength(headB); 
    console.log(current1); 
    console.log(current2); 

    if(current1 > current2) { 
        headA = moveNode(headA, current1 - current2); 
    } 

    if(current1 < current2) { 
        headB = moveNode(headB, current2 - current1); 
    } 

    while(headA !== headB) { 
        headA = headA.next; 
        headB = headB.next; 
    } 
    return headA.data; 
} 

function seachOfLength(head) { 
    let current = head; 
    let cur = 0; 
    while(current) { 
        current = current.next; 
        cur++; 
    } 
    return cur; 
} 

function moveNode(head, position) { 
    let current = head; 
    for(let i = 0; i < position; i++) { 
        current = current.next 
    } 
    return current; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const index = parseInt(readLine(), 10);

        const llist1Count = parseInt(readLine(), 10);

        let llist1 = new SinglyLinkedList();

        for (let i = 0; i < llist1Count; i++) {
            const llist1Item = parseInt(readLine(), 10);
            llist1.insertNode(llist1Item);
        }
      
      	const llist2Count = parseInt(readLine(), 10);

        let llist2 = new SinglyLinkedList();

        for (let i = 0; i < llist2Count; i++) {
            const llist2Item = parseInt(readLine(), 10);
            llist2.insertNode(llist2Item);
        }
      
      	let ptr1 = llist1.head;
        let ptr2 = llist2.head;

        for (let i = 0; i < llist1Count; i++) {
          if (i < index) {
            ptr1 = ptr1.next;
          }
        }

        for (let i = 0; i < llist2Count; i++) {
          if (i != llist2Count-1) {
            ptr2 = ptr2.next;
          }
        }

        ptr2.next = ptr1;

        let result = findMergeNode(llist1.head, llist2.head);

        ws.write(result + "\n");
    }

    ws.end();
}
