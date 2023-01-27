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

// let items = document.getElementsByClassName('list-group-item');
//  console.log(items);
// // console.log(items[0]);
// // console.log(items[2]);
// items[1].textContent='hello';
// // items[1].style.fontWeight = 'bold';
// // items[1].style.backgroundColor = 'yellow';
// //wont work because its a html collection
// // items.style.backgroundColor='red';
// for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor='red';
// }

// //get elemts by tag name

// let li = document.getElementsByTagName('li');
//  console.log(li);
// // console.log(li); //selects all the elements by tag name of 'li'
// li[2].style.backgroundColor = 'green';
// for(let i=0;i<li.length;i++){
//     //li is html collection of items having tag name of li
    
//     li[i].style.fontWeight='bold';
// }
// console.log(li.length);

// query selector
//we can select any css slector be it id ,class or tag name
//returns a node of the element and always seelects the first element

// var header = document.querySelector('#main-header');
// console.log(header);
// header.style.borderBottom = '10px solid black';

// //will only select the first input
// var input = document.querySelector('input');
// input.value='hello';

// var submit = document.querySelector('input[type="submit"]');
// submit.value='sent';

var item = document.querySelector('.list-group-item');
item.style.color='red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color= 'red';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='blue';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility='hidden';
// //query selector all -- same as class name or tag name
// var titles = document.querySelectorAll('.title');
// console.log(titles);//returns a nodelist and we can perform array methods on nodelist
// titles[0].textContent = 'hello';


// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='yellow';
//     even[i].style.backgroundColor='red';
// }
var items = document.querySelectorAll('li');
// console.log(items) --> nodelist
items[1].style.color='green';
var odd = document.querySelectorAll('li:nth-child(odd)');
console.log(odd);
for(let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}