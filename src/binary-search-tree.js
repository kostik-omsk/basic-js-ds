const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const node = this.rootNode;
    if (node === null) {
      this.rootNode = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  has(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;
    while (currentNode && currentNode.data !== data) {
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return currentNode || null;
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        //нашли узел, который нужно удалить.
        if (node.left === null && node.right === null) {
          //просто удаляем этот узел, установив его значение в null.
          return null;
        }
        //Если у узла есть только один дочерний узел, заменяем этот узел дочерним узлом
        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          //Ищем узел с наименьшим значением в правом поддереве удаляемого узла
          tempNode = tempNode.left;
          //Заменяет значение удаляемого узла на найденное значение
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        // для удаления узла из левого поддерева.
        node.left = removeNode(node.left, data);
        return node;
      } else {
        //для удаления узла из правого поддерева.
        node.right = removeNode(node.right, data);
        return node;
      }
    }
  }

  min() {
    let currentNode = this.rootNode;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.rootNode;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}
const tree = new BinarySearchTree();
tree.add(1);

tree.add(2);

tree.add(3);

tree.add(4);

tree.add(5);

// tree.root().data; //1;

tree.min(); //1

tree.max(); //5

tree.remove(5);

// tree.has(5); //false

module.exports = {
  BinarySearchTree,
};
