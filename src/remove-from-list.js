const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

const { queue } = require('./queue.js');
/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let current = l;
  let prev = null;

  while (current) {
    //Проверяем, что current не равен null
    if (current.value === k) {
      //Проверяем, равно ли значение текущего элемента k
      if (prev) {
        //prev существует (то мы не удаляем первый элемент списка)мы связываем prev.next с current.next
        prev.next = current.next;
      } else {
        // удаляем первый элемент списка если он был равен k, устанавливая его равным current.next.
        l = current.next;
      }
    } else {
      /**
       *не равно k, мы просто обновляем prev, устанавливая его равным current
       *для связывания предыдущего элемента со следующим элементом,
       *если текущий элемент не будет удален
       */
      prev = current;
    }
    /**
     * Обновляем current, устанавливая его равным current.next, чтобы перейти к следующему элементу в списке.
     * И так пока current не станет равным null
     * что означает, что мы прошли весь список.
     */

    current = current.next;
  }
  return l;
}

module.exports = {
  removeKFromList,
};
