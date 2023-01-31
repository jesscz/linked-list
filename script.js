// LinkedList class / factory, which will represent the full list.
// Node class / factory, containing a value function and a link to the nextNode, set both as null by default.


function List(){
    let lists = {
        head: null
    }
    let list2 = {
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
        const createList = new ListItem(value);
        let curr = list.head;
        while (curr.next != null){
            curr = curr.next;
        }
        
        if (curr.next == null){
            curr.next = createList.addEnd();
        }
        return list;
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



