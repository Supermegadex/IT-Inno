/*

Hello! Just a couple of things before you look at the code:
	1) JavaScript is somewhat unique in how easy it is to diplay stuff for end users without the need for a framework
	2) I am using JQuery which makes #1 EVEN EASIER
	3) The sort algorithm is made very easy with JavaScript's handy baked-in sort() method. (Spencer, If you want me to re-make the algorithm without using sort() I will! :) )

*/

function hw() {
	console.log("Hello World!");
	$("#hw>.out").text("Hello, World!");
}

function eo() {
	var num = $("#eo>.ip").val();
	if(num%2 == 0){
		$("#eo>.out").text("Even");
	}
	else{
		$("#eo>.out").text("Odd");
	}
}

function fib() {
	var n = $("#fib>.ip").val();
	$("#fib>.out").text("");
    var a = 0, b = 1, f = 1;
    for (var i = 2; i <= n; i++) {
		$("#fib>.out").append(a + ", ");
        f = a + b;
        a = b;
        b = f;
    }
    $("#fib>.out").append(a);
}

function arith() {
	var x = $("#arith>.ip1").val();
	var y = $("#arith>.ip2").val();
	var z = x + y;
	var a = z * 5;
	var f = a % 4;
	$("#arith>.out").text(f);
}
function subt() {
	$("#subt>.out").text($("#subt>.ip1").val() - $("#subt>.ip2").val());
}

var arr;

function sort() {
	arr = $("#sort>.ip").val().split(", ");
	if ($("#sort>.ip").val().match(/[a-z]/i)) {
		arr = arr.sort(function (a, b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
    }
	else {
		arr = arr.sort(function (a, b) { return (a - b) });
	}
	return (arr);
}