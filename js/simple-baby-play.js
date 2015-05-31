function colorElement(elem, colorElem) {
    // change element background color
	if (elem.style.backgroundColor == "blue")
	{
		elem.style.backgroundColor = "red";
	}
	else
	{
		elem.style.backgroundColor = "blue";
	}
}
window.onload = function() {
    var elems = document.getElementsByTagName("div");
    for(i = 0; i < elems.length; ++i)
    {
		if(elems[i].className == "col")
		{
			elems[i].onclick = function() { colorElement(this); }
		}
    }
}