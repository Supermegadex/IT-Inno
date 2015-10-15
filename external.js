/*

Hello! Just a couple of things before you look at the code:
	1) JavaScript is somewhat unique in how easy it is to diplay stuff for end users without the need for a framework
	2) I am using JQuery which makes #1 EVEN EASIER
	3) The sort algorithm is made very easy with JavaScript's handy baked-in sort() method. (Spencer, If you want me to re-make the algorithm without using sort() I will! :) )

*/

function hw() {
	console.log("Hello World!");
	$("#hwout").text("Hello, World!");
}

function eo() {
	var num = $("#eoip").val();
	if(num%2 == 0){
		$("#eoout").text("Even");
	}
	else{
		$("#eoout").text("Odd");
	}
}

function fib() {
	var n = $("#fibip").val();
	$("#fibout").text("");
    var a = 0, b = 1, f = 1;
    for (var i = 2; i <= n; i++) {
		$("#fibout").append(a + ", ");
        f = a + b;
        a = b;
        b = f;
    }
    $("#fibout").append(a);
}

function arith() {
	var x = $("#arithip1").val();
	var y = $("#arithip2").val();
	var z = x + y;
	var a = z * 5;
	var f = a % 4;
	$("#arithout").text(f);
}
function subt() {
	$("#subtout").text($("#subtip1").val() - $("#subtip2").val());
}

var arr;

function sort() {
	arr = $("#sortip").val().split(", ");
	if ($("#sortip").val().match(/[a-z]/i)) {
		arr = arr.sort(function (a, b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
    }
	else {
		arr = arr.sort(function (a, b) { return (a - b) });
	}
	$("#sortout").text(function () {
		var o = "";
		for (var i=0; i < arr.length-1; i++) {
			o += arr[i] + ", ";
		}
		return (o + arr[i]);
	});
}