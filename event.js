// //event listeners

// var button=  document.getElementById('button');
// //(event , function)
// button.addEventListener('click', buttonCLick);
// function buttonCLick(e){
//     //console.log('button clicked');
//     //attaching dom function with events
//     document.getElementById('header-title').textContent=
//     'changed';
//     document.querySelector('#main').style.backgroundColor='red';
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);
//   var output = document.getElementById('output');
//     output.innerHTML = '<h3>'+e.target.id +'</h3>';
//     console.log(e.type);
//     //mouse position from the window
//     console.log(e.clientX);
//     console.log(e.clientY);

//     //mouse position from the current element
//     console.log(e.offsetX);
//     console.log(e.offsetY);
//     //check if alt key is being or not
//     console.log(e.altKey);
//     //check if control key is being or not

//     console.log(e.ctrlKey);
// //check if shift key is being or not
//     console.log(e.shiftKey);

// }
// var button = document.getElementById('button');
// button.addEventListener('dblclick',runEvent);
//mousedown works immediately after the mouse is pressed down
//without lifting the finger while mouseup
//works only when we lift our finger up
// button.addEventListener('click',runEvent); 
// button.addEventListener('mousedown',runEvent); 
// var box = document.getElementById('box');
// button.addEventListener('mouseup',runEvent); 

// // box.addEventListener('mousedown',runEvent); 
// box.addEventListener('mouseenter',runEvent);
// // box.addEventListener('mouseleave',runEvent);

// box.addEventListener('mouseover',runEvent);
// box.addEventListener('mouseout',runEvent);
//differnece between MOUSEENTER/MOUSELEAVE and
//MOUSEOVER/MOUSEOUT is that the later calls the function
//again for child elements
// box.addEventListener('mousemove',runEvent);

// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');

// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);

 //itemInput.addEventListener('focus',runEvent);
// itemInput.addEventListener('blur',runEvent);

// itemInput.addEventListener('cut',runEvent);
// itemInput.addEventListener('paste',runEvent);
// itemInput.addEventListener('copy',runEvent);
// //below takes place whenever we do anything with the input element

//itemInput.addEventListener('input',runEvent);

// form.addEventListener('submit',runEvent);
// var opt = document.querySelector('select');
// //opt.addEventListener('change',runEvent);
// function runEvent(e){
//     e.preventDefault();
//     //console.log('event type: ' +e.type);
//     console.log(itemInput.value);
//     console.log(opt.value);
//     // output.innerHTML='<h3>'+e.offsetX+'</h3><h3>'+
//     // e.offsetY+'<h3>';
//     // box.style.backgroundColor="rgb("+e.offsetX+","+
//     // e.offsetY+",35)";
//     // document.body.style.backgroundColor="rgb("+e.offsetY+","+
//     // e.offsetX+",40)";

// }

