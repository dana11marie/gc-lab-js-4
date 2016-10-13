//LAB 4 - MY ATTEMPT

/* var groceryList = [
	{name: "apples", price: 2},
	{name: "grapes", price: 4},
	{name: "chicken", price: 8},
	{name: "potatoes", price: 1},
	{name: "carrots", price: 3}
	];

var total = 0;

groceryList.forEach(function(element){
  var newElement = document.createElement('div');
	newElement.innerHTML = ("Item: " + element.name + " " + element.price);
  document.body.appendChild(newElement);
  var newTotal = document.createElement('div');
	newTotal.innerHTML = (+= element.price);
  document.body.appendChild(newTotal);
}); */

//LAB 4 - ANSWER
var groceries = [
  {
    name: "apples",
    price: 1
  },
  {
    name: "bread",
    price: 2
  },
  {
    name: "milk",
    price: 3
  }
];

var total = 0;
var container = document.getElementById('groceryList');

groceries.forEach(function(element){
  var listItem = doument.createElement('li');
  listItem.innerHTML = element.name + ": " + element.price;
  container.appendChild(listItem);
  //var listTotal = document.createElement('li');
  //listTotal.innerHTML = "Total: " + total += element.price;
  //container.appendChild(listTotal);
});
