$(document).ready(function() {
	/*console.log("hello world"); */

$(".ryu").mouseenter(function() {
	$(".ryuimg").hide();
	$(".ryuready").show();
}).mouseleave(function() {
	$(".ryuimg").hide();
	$(".ryustill").show();
}).mousedown(function() {
	$(".ryuimg").hide();
	$(".ryuthrow").show();
	$(".hadouken").show();
})






});