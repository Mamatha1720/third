//EXAMINE THE DOCUMENT OBJECT//

//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title=123;

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent='hello';
// console.log(document.forms);
// console.log(document.links);
//console.log(document.images);


//SELECTING METHODS

//GET ELEMENT BY ID

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
//headerTitle.textContent='Hello';
//headerTitle.innerText='goodbye';
//headerTitle.innerHTML='<h3>hello</h3>';
// console.log(headerTitle.textContent);
//header.style.border='solid 3px black';


//GETELEMENTSBYVCLASSNAME
//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent='ITEM 2';
 //items[2].style.backgroundColor='green';
// items.stle.backgroundColor='yellow';
 //for(var i=0;i<items.length;i++)
//  {
//    //items[i].style.backgroundColor='teal';
//  }


//GETELEMENT BY TAG NAME
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].style.fontweight='bold';
// //li[1].textContent='Hello';
// li[1].style.backgroundColor='red';

// for(var i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor='grey';
// }


//QUERYSELECTOR//

// var header=document.querySelector('#main-header');
// header.style.borderbottom='solid 4px #ccc';

// var input= document.querySelector('input');
// input.value='hello world'

// var submit= document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

//  var lastItem=document.querySelector('.list-group-item:last-child');
//  lastItem.style.color='transparent';

//  var secondItem=document.querySelector('.list-group-item:nth-child(2)');
//  secondItem.style.backgroundColor='green';
 
//QUERYSELECTORSALL

// var titles=document.querySelectorAll('.title');
// console.log('titles');

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='green';
//     even[i].style.backgroundColor='pink';
// }


//Traversing thorugh the node
var itemList= document.querySelector('#items');
//parent node 
//console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//child node
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

//firstchild
// console.log(itemList.firstChild);
// //firstelementchild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello 1';

//lastchild
//console.log(itemList.lastChild);
//lastelementchild

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='hello 4';

//nextsibling
//console.log(itemList.nextSibling);

//nextElementsibling
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);

//previousElementSibling
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';


//createElement

//craete a div
 var newDiv = document.createElement('div');

 // Add class
 newDiv.className="hello";

//Add id
newDiv.id="hello 1";


//Add attr
newDiv.setAttribute('title','hello div');

//create a text node
var newDivText = document.createTextNode('Hello');

//add text to div
newDiv.appendChild(newDivText);

var container= document.querySelector('header .container');
//var container= document.querySelector('header .container');

var h1=document.querySelector('header h1');
//var h2=document.querySelector('header h2');

console.log(newDiv);

container.insertBefore(newDiv, h1);
//container.insertAfter(newDiv, h1);



