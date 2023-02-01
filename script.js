// LinkedList class / factory, which will represent the full list.
// Node class / factory, containing a value function and a link to the nextNode, set both as null by default.


function List(){
    let lists = {
        head: null
    }
    let listss = {
        head: {
            value: 9087,
            next: null
        }
    }
    let list = {
        head: {
            value: 1,
            next: {
                value: 2,
                next: null
            }
        }
    }

    this.get = function(){
        console.log(list);
        return list;
    }

    this.append = function(list, value){ //adds new node containing 'value' to the end of the list
        const createItem = new ListItem(value);
        let curr = list.head;
        if (list.head == null){
            list.head = createItem.addEnd();
        }
        else{
            while (curr.next != null){
                curr = curr.next;
            }
            if (curr.next == null){
                curr.next = createItem.addEnd();
            }
        }
        return list;
    }

    this.prepend = function(list, value){ //adds new node containing 'value to the start of the list
        const createItem = new ListItem(value);
        if (list.head == null){
            list.head = createItem.addEnd();
        }
        else{
            let hold = list.head;
            list.head = createItem.addEnd();
            list.head.next = hold;
        }

    }
    
    this.size = function(){ //returns the total number of nodes
        let s = 0;
        let curr = list.head;
        if (list.head == null){
            console.log(s);
            return s;
        }
        else{
            s = 1;
            while (curr.next != null){
                curr = curr.next;
                s++;
            }
            console.log(s);
            return s;
        }
    }

    this.head = function(){ //returns the first node in the list
        if (list.head == null){
            console.log('there are no nodes');
            return;
        }
        else{
            console.log(list.head)
            return list.head;
        }
    }

    this.tail = function(){ //returns the last node in the list
        let curr = list.head;
        if (list.head == null){
            console.log('there are no nodes');
            return;
        }
        else{
            while (curr.next != null){
                curr = curr.next;
            }
            console.log(curr);
            return curr;
        }
    }
      
}

function ListItem (item){
    this.item = item;
    this.addEnd = function(){
        let add = { //adds to the end of the list
            value: item,
            next: null
        }
        return add;
    }
}

const y = new List();

y.append(y.get(), 123456);
y.prepend(y.get(), 222);
y.append(y.get(), 1222);
y.size();
y.tail();
// y.get();



