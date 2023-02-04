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
        console.log(typeof (list.head.value))
        return list;
    }

    this.append = function(value){ //adds new node containing 'value' to the end of the list
        const createItem = new ListItem(value);
        let curr = list.head;
        if (list.head == null){ //checks for empty list
            list.head = createItem.addEnd();
        }
        else{
            while (curr.next != null){ //cycles through list until next is null
                curr = curr.next;
            }
            if (curr.next == null){
                curr.next = createItem.addEnd();
            }
        }
        return list;
    }

    this.prepend = function(value){ //adds new node containing 'value' to the start of the list
        const createItem = new ListItem(value);
        if (list.head == null){ //checks for empty list
            list.head = createItem.addEnd();
        }
        else{
            let hold = list.head; //original node
            list.head = createItem.addEnd(); //have head point to the new 'value' 
            list.head.next = hold; //change the next of the new node to the original node there
        }

    }
    
    this.size = function(){ //returns the total number of nodes
        let s = 0;
        let curr = list.head;
        if (list.head == null){ //checks for empty list
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
        if (list.head == null){ //checks for empty list
            console.log('there are no nodes');
            return;
        }
        else{
            console.log(list.head) //returns what the value of head is 
            return list.head;
        }
    }

    this.tail = function(){ //returns the last node in the list
        let curr = list.head;
        if (list.head == null){ //checks for empty list
            console.log('there are no nodes');
            return;
        }
        else{
            while (curr.next != null){ //cycles through until next is null
                curr = curr.next;
            }
            console.log(curr);
            return curr;
        }
    }

    this.at = function(index){ //returns the node at the given 'index' using zero based indexing for 'index'
        let i = 0;
        let curr = list.head;
        let size = this.size();
        if (list.head == null){ //checks for empty list
            console.log('there are no nodes');
            return null;
        }
        else if(index >= size){ //checks if index is larger than number of nodes
            console.log('index is beyond number of nodes');
            return null;
        }
        else{
            while (i != index){
                i++;
                curr = curr.next;
            }
            console.log(curr);
            return curr;
        }
    }

    this.pop = function(){ //removes the last element from the list
        let i = 0;
        let curr = list.head;
        let size = this.size();
        if (list.head == null){ //checks for empty list
            console.log('there are no nodes');
            return null;
        }
        else{
            while (curr.next.next != null){ //cycles through until next next is null
                curr = curr.next;
            }
            curr.next = null;
            console.log(list);
            return list;
        }
    }

    this.contains = function(value){ //returns true if 'v' is in the list and otherwise returns false
        let curr = list.head;
        if (list.head == null){ //checks for empty list
            console.log('there are no nodes');
            return null;
        }
        else{
            while (curr.value != value){
                if (curr.next != null){
                    curr = curr.next;
                }
                else{
                    break;
                }
            }
            if (curr.value == value){
                console.log(true);
                return true;
            }
            else{
                console.log(false); 
                return false;
            }
        }
    }

    this.find = function(value){ //returns the index of the nodes containing 'value' or null if not found

    }

    this.toString = function(){ //prints the linkedList as a string in the console

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

y.append(123456);

y.prepend(222);
y.append(11222);
y.get();
y.size();
y.tail();
y.at(1);
y.at(12);
y.at(0);
y.pop();
y.contains(1); //true
y.contains(300); //false
y.contains(222);
y.contains(123456);
// y.get();



