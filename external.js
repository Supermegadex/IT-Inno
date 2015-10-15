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
function sort() { //This is a bubble sort
	arr = $("#algor>.ip").val().split(", ");
   var len = arr.length;
   for (var i = len - 1; i >= 0; i--) {
	   for (var x = 1; x <= i; x++) {
		   if (arr[x - 1] > arr[x]) {
			   var temp = arr[x - 1];
			   arr[x - 1] = arr[x];
			   arr[x] = temp;
		   }
	   }
   }
   $("#algor>.out").text(arr);
}