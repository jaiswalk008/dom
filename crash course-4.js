var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit',addItem);

//filter
var filter  = document.getElementById('filter');

filter.addEventListener('keyup', filterItems);
//delete event
itemList.addEventListener('click' , removeItem);

function addItem(e){
    e.preventDefault();
    
    var newItem = document.getElementById('item');
    var items = document.getElementById('items');
    //create new li element
    var li = document.createElement('li');
    li.className='list-group-item';

    //add text node in li
    li.appendChild(document.createTextNode(newItem.value));
    var dlt =document.createElement('button');
    //edit button
    var edit = document.createElement('button');
    edit.className="btn btn-success btn-sm float-right";
    edit.appendChild(document.createTextNode('edit'));
    li.appendChild(edit);


    //Add classeds to delete button
    dlt.className= 'btn btn-danger btn-sm float-right mr-2 delete';
    dlt.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(dlt);
    itemList.appendChild(li);
    
   // itemList.insertBefore(li,items.firstElementChild);
    // itemList.insertBefore(li,items.lastElementChild);

    newItem.value='';
    // console.log(li)
} 

//delete function
function removeItem(e){
    // console.log(1)
    if(e.target.classList.contains('delete')){
        // console.log(1);
        if(confirm('Are you sure to delete?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
 
function filterItems(e){
    var text = e.target.value.toLowerCase();
    // console.log(text);
    //get list
    var items = itemList.getElementsByTagName('li');
    //items is a html collection and needs to ve converted to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        //all the items will be printed console.log(itemName);
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
         
    });
}