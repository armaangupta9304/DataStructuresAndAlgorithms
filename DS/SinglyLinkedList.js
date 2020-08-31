class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        this.length += 1;
        if(this.head == null){
            var nodedValue = new Node(val);
            this.head = nodedValue;
            this.tail = nodedValue; 
        } else {
            var nodedValue = new Node(val);
            this.tail.next = nodedValue;
            this.tail = nodedValue
        }
        return this;
    }
    traverse(){
        var current = this.head;
        var counter = 0
        while(current !== null){
            console.log(counter +"\t"+ current.val);
            current = current.next;
            counter++;
        }
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = this.head;
        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length -= 1;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        var newHead = currentHead.next;
        this.head = newHead;
        this.length--;
        if(this.length == 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        if(!this.head){
            this.head = new Node(val);
            this.tail = this.head;
        } else{
            var currentHead = this.head;
            var newHead = new Node(val);
            newHead.next = currentHead;
            this.head = newHead;
            this.length++;
        }
        return this;
    }
    get(position){
        if(position < 0 || position > this.length) return null;
        var value = this.head;
        for(let i = 0; i < position; i++){
            if(!value.next){
                return null
            } 
            value = value.next;
        }
        return value;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        } else {
            return false;
        }
    }
    insert(index, val){
        if(index == 0) return !! this.unshift(val);
        if(index == this.length) return !! this.push(val);
        var pre = this.get(index - 1);
        val = new Node(val);
        val.next = this.get(index);
        pre.next = val;
    }
    remove(index){
        if(index < 0) return false;
        if(index > this.length - 1) return false;
        if(index === 0){
            this.head = this.head.next; 
        } else if(index === this.length - 1){
            this.pop()
            return true
        }
        else {
            var pre = this.get(index - 1);
            var curr = this.get(index);
            pre.next = curr.next;
            return true
        }
        this.length--;
    }
    getInfo(){
        console.log(`--------------------`)
        this.traverse();
        console.log('--------------------')
        console.log(`Total Depth Of The List: ${this.length}\t Head: ${this.head.val}\t tail: ${this.tail.val}`)
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var previous = null;
        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }       
        return this;
    }
    toArray(){
        var arr = [];
        var current = this.head;
        for(let i = 0; i < this.length; i++){
            arr.push(current.val)
            current = current.next;
        }
        return arr;
    }
}

module.exports = {Node, SinglyLinkedList}