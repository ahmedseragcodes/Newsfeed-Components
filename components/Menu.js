// This is the data we will be using, study it but don't change anything, yet.

let menuItemsTwo = 
[
  {item:'Students'},
  {item: 'Faculty'},
  {item: "What's New"},
  {item: 'Tech Trends'},
  {item: 'Music'},
  {item: 'Log Out'}
];

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/


//Menu Div
const menu=document.createElement("div");
menu.classList.add("menu");

//Menu UL
const menuList=document.createElement("ul");
menu.append(menuList);
function menuMaker(menuItems){

//Menu List Item / LI
const menuListItem=document.createElement("li");
menuListItem.textContent=menuItems;
menuList.append(menuListItem);

//Expand Sandwich Menu / Event Listener


//Single Click Opens Menu Div
const sandwichMenu=document.querySelector(".menu-button");
sandwichMenu.addEventListener("click", function(event){
  menu.classList.add("menu--open")
})

//Double Click Closes Menu Div
sandwichMenu.addEventListener("dblclick", function(event){
  menu.classList.remove("menu--open")
})

//Append to Header
  const header=document.querySelector(".header");
  header.append(menu);
  return menu;


}

menuItems.forEach(function(item){
  menuMaker(item);
})

