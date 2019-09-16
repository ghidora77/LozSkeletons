
function changeColor() {

	var c = document.querySelector("#contact");
	var x;
	if(document.getElementById("navmenu")) {
		return;
	} else {
		x = document.getElementById("navhome");
	}

	var scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
	if (scrollTop > 2) {

		x.style.backgroundColor = "rgba(10, 10, 10, 0.95)";
		x.style.boxShadow = "0px 0.5px 6px 0px rgba(0, 0, 0, 0.1)";
		c.classList.add("blue");
		c.classList.remove("white");

	} else if(x.className != "navbar responsive" && x.className != "navbar opened responsive"){

		x.style.backgroundColor = "#12baed";
		x.style.boxShadow = "0px 0.5px 8px 0px rgba(0, 0, 0, 0.25)";
		if (window.innerWidth > 945) {
			c.classList.remove("blue");
			c.classList.add("white");
		}
	}
}
