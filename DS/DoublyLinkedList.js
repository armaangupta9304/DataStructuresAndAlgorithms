class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        val = new Node(val);
        if(!this.head){
            this.head = val;
            this.tail = val;
        } else {
            this.tail.next = val;
            val.previous = this.tail;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.tail) return undefined;
        if(this.length === 1) {
            var toBeReturned = this.head;
            this.head = null;
            this.tail = null;
            return toBeReturned;
        }
        var toBeReturned = this.tail;
        var previous = this.tail.previous;
        this.tail = previous;
        this.tail.next = null;
        this.length--;
        return toBeReturned;
    }
    toArray(){
        var arr = []
        var current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
    shift(){
        if(!this.head) return undefined;
        if(this.length === 1){
            var toBeReturned = this.head;
            this.head = null;
            this.tail = null;
            return toBeReturned;
        }
        var toBeReturned = this.head;
        var newHead = this.head.next;
        this.head = newHead;
        this.head.previous = null;
        this.length--;
        return toBeReturned
    }
    unshift(val){
        val = new Node(val)
        if(!this.head){
            this.push(val);
            return this;
        }
        var oldHead = this.head;
        this.head.previous = val;
        this.head = val;
        this.head.next = oldHead;
        this.length++;
        return this;
    }
    get(index){
        if(index >= this.length) return undefined;
        if(index < 0) return undefined;
        if(index > parseInt(this.length / 2)){
            var start = this.tail;
            var counter = this.length;
            while(start){
                if(counter === index) return start;
                start = start.previous;
                counter--;
            }
        } else {
            var start = this.head;
            for(let i = 0; i < this.length; i++){
                if(i === index){
                    return start;
                } else {
                    start = start.next;
                }
            }
        }
    }
    set(index, value){
        var node = this.get(index);
        if(node){
            node.val = value;
        }
        return !!node;
    }
    insert(index, value){
        value = new Node(value);
        if(index > this.length) return undefined;
        if(index < 0) return undefined;
        if(index === 0) this.unshift(val);
        if(index === this.length) this.push(val);
        var currentNode = this.get(index);
        var previousNode = currentNode.previous;
        previousNode.next = null;
        currentNode.previous = null;
        previousNode.next = value;
        value.previous = previousNode;
        value.next = currentNode;
        currentNode.previous = value;
        this.length++;
        return this;
    }
    remove(index){
        if(this.length <= 0) return false;
        if(this.length === 1){
            this.shift();
            return true;
        }
        if(index === this.length - 1){
            this.pop()
            return true;
        }
        var toBeRemoved = this.get(index);
        var pre = toBeRemoved.previous;
        var next = toBeRemoved.next;
        pre.next = next;
        next.previous = pre;
        this.length--;
        return toBeRemoved;
    }
    reverse(){
        var node = this.tail;
        this.tail = this.head;
        this.head = node;
        while(node){
            var next = node.next;
            var prev = node.previous;
            node.next = prev;
            node.previous = next;
            node = node.next;
        }
    
    }
}

module.exports = {Node, DoublyLinkedList};