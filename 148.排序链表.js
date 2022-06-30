/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
  return splitList(head, null);
  function splitList(head, tail){
      if(head===tail){
          return null;
      }else if(head.next===tail){
          head.next = null;
          return head;
      }
      let quick = head,slow = head;
      while(quick!==tail){
          quick = quick.next;
          slow = slow.next;
          if(quick!==tail){
              quick = quick.next;
          }
      }
      const min = slow;
      return merge(splitList(head, min), splitList(min, tail));
  }
  function merge(list1, list2){
      const yummy = new ListNode(0);
      let cur1 = list1;
      let cur2 = list2;
      let cur = yummy;
      while(cur1 && cur2){
          if(cur1.val < cur2.val){
              cur.next = cur1;
              cur1 = cur1.next;
          }else{
              cur.next = cur2;
              cur2 = cur2.next;
          }
          cur = cur.next;
      }
      if(cur1){
          cur.next = cur1;
      }else if(cur2){
          cur.next = cur2;
      }
      return yummy.next;
  }
};