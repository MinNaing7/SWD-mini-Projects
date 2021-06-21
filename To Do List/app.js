
// Script for To Do List

let input = document.getElementById('input');
let list = document.getElementById('list');
let i = 1;

function enterKey(event) {
	let key = event.key;
	if (key == "Enter") {
		addItem();
	}
}

function addItem() {
	let value = input.value;
	let filter = textFilter(value);
	if (filter) {
		displayItem(value);
	}
	input.value = "";
}
function textFilter(text) {
	if (text) {
		if (text.length >= 3) {
			return true;
		} else {
			window.alert("Your text was too Short!");
		}	
	} else {
		window.alert("Your text was Empty!");
	}
}
function displayItem(text) {
	let time = getTime();
	list.innerHTML += 
	`
	<li id="item${i}">
		<button class="del" onclick="deleteItem(${i})"><i class="ion-trash-a"></i></button>
		<button class="edit" onclick="editItem(${i})"><i class="icon ion-edit"></i></button>
		<span class="text" id="text${i}">${text}</span><br>
		<span class="time" id="time${i}">${time}</span><br>
	</li>
	`
	i++;
}
function deleteItem(i) {
	let item  = document.getElementById(`item${i}`); // item to Delete!
	let text = document.getElementById(`text${i}`).innerHTML; // text to Delete!
	let confirm = window.confirm(`Are you sure to Delete this text?   ("${text}")`);
	if (confirm) {
		list.removeChild(item); // Delete the item!
	} else {
		console.log("Deleting Canceled!");
	}
}
function editItem(i) {
	let text = document.getElementById(`text${i}`);
	let oldText = text.innerHTML;
	let newText = window.prompt("Edit your text Here!",oldText);
	let filter = textFilter(newText);
	if (filter) {
		text.innerHTML = newText;
	}
}
function getTime() {
	let months = ["January","February","March","April","May","June",
	     "July","August","September","October","November","December"];
	let time = new Date();
	let month, date, hour, min, AmPm;
	AmPm = "am";
	month = months[time.getMonth()];
	date = time.getDate();
	hour = time.getHours();
	if (hour > 12) {
		hour -= 12; 
		AmPm = "pm";
	}
	min = time.getMinutes();
	return `${hour}:${min} <small>${AmPm}</small> ${month} ${date}`;
}