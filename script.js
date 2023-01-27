//shows all the properties of the html page
// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title  = "Hello"
// console.log(document.title);
// console.log(document.all);
// console.log(document.body.firstChild)
// console.log(document.all[10])
//document.all[10].textContent="hello";
/* all = show the html collection of the elements
there are some differences between 
array and html collection like we cant use reverse()
method for html collections*/
//console.log(document.forms)
// console.log(document.links)

//get element by id
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle.innerText);
// //text content does not maintain the style as it shows the 
// //span elemen too but innerText doesnot
// console.log(headerTitle.textContent);
// //The below line does not changes h1 to h2 rather inserts 
// //h2 element inside the h1 and changes the textContent too
// // headerTitle.innerHTML = '<h2>Inner html</h2>';
// console.log(headerTitle.textContent);
// header = document.getElementById('main-header');
// // header.style.borderBottom='10px solid black';

// get elements by class name

let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);
// console.log(items[2]);
items[1].textContent='hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
//wont work because its a html collection
// items.style.backgroundColor='red';
for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor='red';
}

//get elemts by tag name

let li = document.getElementsByTagName('li');
 console.log(li);
// console.log(li); //selects all the elements by tag name of 'li'
li[2].style.backgroundColor = 'green';
for(let i=0;i<li.length;i++){
    //li is html collection of items having tag name of li
    
    li[i].style.fontWeight='bold';
}
