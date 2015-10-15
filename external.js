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