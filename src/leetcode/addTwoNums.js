/**
 * Created by user on 2017/1/19.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val){
    this.val=val;
    this.next=null;
}
var addTwoNumbers = function(l1, l2) {
    let sum = l1.val+l2.val;
    let next1=l1.next;
    let next2=l2.next;
    let l3 = new ListNode(sum%10);
    let node =l3;
    sum = Math.floor(sum/10);

    while(next1||next2||sum!=0){
        sum += (next1?next1.val:0)+(next2?next2.val:0);
        node.next=new ListNode(sum%10);
        node=node.next;
        next1=next1?next1.next:null;
        next2=next2?next2.next:null;
        sum = Math.floor(sum/10);
    }
    return l3;
};

let l1_1=new ListNode(2);
let l1_2=new ListNode(4);
let l1_3=new ListNode(3);
let l2_1=new ListNode(5);
let l2_2=new ListNode(6);
let l2_3=new ListNode(4);

l1_1.next=l1_2;
l1_2.next=l1_3;
l2_1.next=l2_2;
l2_2.next=l2_3;

console.log(addTwoNumbers(l1_1,l2_1));