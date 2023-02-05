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
                value: 1,
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
            while (curr.value != value){ //while value is not 'value'
                if (curr.next != null){ //if next is not null go to the next node
                    curr = curr.next; 
                }
                else{ //else if next is null break from code
                    break; 
                }
            }
            if (curr.value == value){ //when value is the 'value' return true
                console.log(true);
                return true;
            }
            else{
                console.log(false); //else return false (if break from the while loop at the end)
                return false;
            }
        }
    }

    this.find = function(value){ //returns the index of the nodes containing 'value' or null if not found
        let curr = list.head;
        let arr = [];
        let i = 0;
        if (list.head == null){ //checks for empty list
            console.log('there are no nodes');
            return null;
        }
        else{
            while (curr != null){ //while curr is not null
                if (curr.value == value){ //if current value is 'value' record that index and increment index
                    arr.push(i);
                    i++;
                }
                else{ //else just increment index
                    i++; 
                }
                curr = curr.next;
            }
            if (arr.length == 0){ //when the array is empty
                console.log(false);
                return false;
            }
            else{
                console.log(arr); //else returns the array whose value at index is 'value'
                return arr;
            }
        }
    }

    this.toString = function(){ //prints the linkedList as a string in the console
        let curr = list.head;
        let s = '';
        if (list.head == null){ //checks for empty list
            console.log('there are no nodes');
        }
        while(curr != null){ //when curr is not null, add to string 's' the value and space arrow space
            s += curr.value+' -> '
            curr = curr.next;
        }
        s += 'null' //add null at the end of string 's'
        console.log (s);
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
y.find(1);
y.find(222);
y.find(123456);
y.find(1233); 
y.toString();