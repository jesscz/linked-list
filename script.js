// LinkedList class / factory, which will represent the full list.
// Node class / factory, containing a value function and a link to the nextNode, set both as null by default.


function List(){
    let listss = {
        head: null
    }
    let list = {
        head: {
            value: 9087,
            next: null
        }
    }
    let listd = {
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
y.append(y.get(), 423);
// y.get();
// x.create()

// createList.get();



