
//document.getElementById("")//SINGLE ELEMENT SELCTOR //

document.getElementById("tasklist").textContent = "New Task List    ";
document.getElementById("ull1").textContent = "New list item  ";
// document.getElementById("searchspace").style.padding = "15px";
document.getElementById("listsup").style.background = "#333 ";
document.getElementById("listsup").style.color = "#fff ";
// document.getElementById("listsup").style.display = "none";


//changing content //
document.getElementById("listsup").textContent = "LISTS BELOW";
document.getElementById("listsup").innerText = "LISTS BELOWww";
document.getElementById("listsup").innerHTML = "<span style=color:red>List items below</span>";

//Casting into variable//
const dom = document.getElementById("ull3");
dom.innerHTML = "New list item using variable";


//document.querySelector("")//SINGLE ELEMENT SELCTOR //
//Single element selector but much useful and select by anything not just byID (all CSS selectors) 
document.querySelector("h3").textContent = "List Query Selector";
// document.querySelector("#idName")//getting by ID  
// document.querySelector(".idName")//getting by Class  
// will only give us singe element and first in case of many//
//document.querySelector("li").style.colour = Green; //This will only Green the first element in "li" Not all//
//Can do an alternative like //
//document.querySelector("li:nth-child(4)").style.colour = Green;//This will Green the 4th element in "li", But cannot do nth-child odd or even , have to do thjat even odd by using multiple selectors//
//We can do odd or even only with multiple element selector//


//MULTIPLE ELEMENT SELECTOR//
//document.getElementsByClassName("")//
//returns HTML collection OR Node list dependng upon circumstances we can convert them into array easily//
const items=document.getElementsByClassName("ullss");
items[1].textContent="Blue";
items[1].style.color="Blue";
console.log(items);//***we will get HTML collection and can be treating as an array using []... like below example//
console.log(items[1]);//

// pending learn**** scoping of elemnts at lecture 25 udemy traversy arund 03:00 mins * incase if we have classes with same name but not within the scope we desired ***//

//document.getElementsByTagName("tagName");//basically does same as document.getElementsByClassName("className");//
// const items=document.getElementsByTagName("ullss");
// items[1].textContent="Blue";
// items[1].style.color="Blue";
// console.log(items);//***we will get HTML collection and can be treating as an array using []... like below example//
// console.log(items[1]);//

//Converting HTML collection to Arrays//
let itemstwo=document.getElementsByClassName("ullss");//we made a new LET variable for lis bcz const cannot be converted and will reflect error//
itemstwo=Array.from(itemstwo);
console.log(itemstwo);//you can view in console saying it as an array//
itemstwo.reverse();
console.log(itemstwo);//** pending this could be an error check later bcz it is showing above array/console in reverse as weell */

//looping throung an HTML/node converted array and changing content etc//
itemstwo.forEach(function (lio1) {
    console.log(lio1);//console will show it in reverse as we did reverse array method above//
    lio1.textContent="New content using ForEachLoop"
});




//********* document.querySelectorAll **************//
//returns node list it also allows to do foreach and other array methods without converting it into array//
const itemsthree=document.querySelectorAll("li");//can also give scopeing rather than "li" for eg: ("ul.className li.className") ... any kind of CSS selector like we do in jQuery//
console.log(itemsthree);

//can do same as above to multiple selectors...//
console.log(itemsthree[3]);//can same be treated as arrays //

//using forEach without converting it into array as it is a node list using querySelectorAll//
itemsthree.forEach(function(lio2) {
    console.log(lio2);
    lio2.style.color="green"
})

//***changing or selecting odd or even using querySelectorAll//
const liOdd=document.querySelectorAll("li:nth-child(odd)");
liOdd.forEach(function(lio3) {
    console.log(lio3);
    lio3.style.background="#ccc"
})
//we can also do it through for Loop// ***** this for Loop will also work with HTML collection eventhough dont convert it into an array bcz you can still use lenght on HTML collection and can access it through []//
const liEven=document.querySelectorAll("li:nth-child(even)");
for (let index = 0; index < liEven.length; index++) {
    console.log(liEven)
    liEven[index].style.background="#f4f4f4"
}


//TRAVERSING WITHIN THE DOM //

const listul = document.querySelector("ul.ulllu2");
//now we are setting the above to const variables into this let variable so that we can modify or get child/parent element//
//to verify if we have selected the desired elements or not we can create another variable and append or link this listul/listli variable to write it down in console//
let varlistul;
varlistul=listul;
//Get child node// gives us all types of nodes including textnode etc//
varlistul=listul.childNodes;//this gives us Nodelist with text nodes which are just line breaks in btw </li><li>//
varlistul=listul.childNodes[0];
varlistul=listul.childNodes[0].nodeName;
varlistul=listul.childNodes[0].nodeType;//reflects 3 as below  which is textnode//
varlistul=listul.childNodes[1].nodeType;//reflects 1 as below  which is element//
varlistul=listul.childNodes[5].nodeType;//reflects 8 as below which is comment//
// 1-element
// 2-attribute(deprecated)
// 3-Textnode 
// 8-Comment
// 9-Document itself 
// 10-doctype

//Get only children element list with HTML collection//NO TEXTNODES//
varlistul=listul.children;
varlistul=listul.children[0];//will give direct element node not like childnode//
//Changing content using Children//
listul.children[0].textContent="Traversing DOM using children/child/parent etc";
//Children of children//
varlistul=listul.children[3].children;//will give children of children eg:link id class etc ***not working look into it //
// listul.children[3].children.id="test id";// //***giving id to children//
//FIRST CHILD//
varlistul=listul.firstChild;//will probabaly result in text bcz we are using child//
varlistul=listul.firstElementChild;//will result in element/first li//
// listul.firstElementChild.textContent="new update"//***changing content of children//
//LAST CHILD//
varlistul=listul.lastChild;//will probabaly result in text bcz we are using child//
varlistul=listul.lastElementChild;//will result in element/last li//
varlistul=listul.childElementCount; //will give the count of element nodes//
//RESULT HERE FOR ABOVE //
console.log(varlistul);// *** this will be changing all over the Traversing excercise.. you can verify if anything is selected or not.. in console and can hover above it to locate in document //


//We can also do same with parents as we did with children//
const listli = document.querySelector("li.ullss");
//now we are setting the above to const variables into this let variable so that we can modify or get child/parent element//
//to verify if we have selected the desired elements or not we can create another variable and append or link this listul/listli variable to write it down in console//
let varlistli;
varlistli=listli;
//Get parent node//
varlistli=listli.parentNode;//this gives us parent node which is <ul>//
varlistli=listli.parentElement;//this gives us parent element which is <ul> most cases it is gonna be same as parentNode//
//parent of parent//pending *** should give container or other parent div but not//
varlistli=listli.parentElement.parentElement;

//Get next Sibling//
varlistli=listli.nextSibling;
varlistli=listli.nextElementSibling;//will result second <li>//
varlistli=listli.nextElementSibling.nextElementSibling;//will result thrid <li>//
varlistli=listli.nextElementSibling.previousElementSibling;//will result second <li>//
//if we use previous on first <li> it will result null as below eg://
// varlistli=listli.previousElementSibling;// will result null//
// varlistli=listli.previousSibling.previousSibling;// will result null//

//RESULT HERE FOR ABOVE //
console.log(varlistli);// *** this will be changing all over the Traversing excercise.. you can verify if anything is selected or not.. in console and can hover above it to locate in document //




//CREATING ELEMENTS FROM DOM// and then INSERT it into DOM with id,class,link,text everything //
// CREATING AN ELEMENT WITH document.createElement() and then//
const creatingele = document.createElement("li");
//ADD Class //
creatingele.className = "ullss";
//ADD ID //
creatingele.id = "newidfornewli"
//***pending //ADD ATTRIBUTE //what is attribute also didnt reflect anything such as attribute below//
creatingele.setAttribute = ("title","New Item");
//Create TEXT and Append "document.createTextNode"//
creatingele.appendChild(document.createTextNode("Newly Created Element"));//append child means adding/inserting something//
//we can also put this "document.createTextNode("Newly Created Element")" into a variable and can apped that variable to the "li.appendChild" etc.. do same//

//APPEND <LI> AS CHILD TO <UL>//
document.querySelector("ul.ulllu2").appendChild(creatingele);

//Creating new LINK element//***Was little confusing pending */
const newlink = document.createElement("a");
//add class to newlink//
newlink.className = "delete-item secondary-content";
//add icon html//
newlink.innerHTML = '<i class="fa fa-remove"></i>';
//APPEND link into <li>//
creatingele.appendChild(newlink);

//RESULT HERE FOR ABOVE //
console.log(creatingele);// *** this will be changing all over the CREATING ELEMENTS excercise.. you can verify if anything is selected or not.. in console and can hover above it to locate in document //


//pending//


//Event Fireoff//
//pending//

//31st class 633//****IMPP*********/











