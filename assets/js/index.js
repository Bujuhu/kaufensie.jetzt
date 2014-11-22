var items = document.getElementsByClassName("item");

for(var i=0; i<items.length; i++) {
	items[i].addEventListener('click', function(){
		window.open(this.getElementsByTagName("a")[0].textContent,"_self");
	});
}