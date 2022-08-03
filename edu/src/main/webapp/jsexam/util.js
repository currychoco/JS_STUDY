function write(content, tag){
		document.write("<" + tag + ">" + content + "</" + tag + ">");
}
function writeColor(content, tag, color){
	document.write("<" + tag + " style = 'color :" + color + "'>" + content + "</" + tag + ">");
}
function writeNewLine(content){
	document.write(content + "<br>");
}
function hr(){
	document.write("<hr>");
}