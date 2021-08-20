$(function() {

});

function showModel() {
	var wW = $(window).width(); //浏览器可视区域宽度和高度
	var wH = $(window).height();
	var oW = $(".model").innerWidth(); //获取类叫model的宽度和高度
	var oH = $(".model").innerHeight();
	$(".model").show().css({
		"top": (wH - oH) / 2 + "px",
		"left": (wW - oW) / 2 + "px"
	});
}
$(window).resize(function() {
	if ($(".model").is(":visible")) { //弹出框必须可见后 才能调用showModel()
		showModel();
	}
});
$(document).keydown(function(ev) {
	if (ev.keyCode == 27) { //当按下键盘Esc时===》close关闭按钮
		$(".close").trigger("click"); //trigger("事件名")  模拟事件
	}
})
$(".close").click(function() {
	$(".model").hide();
});

function checkLogin() {
	var uname = $("#usernem").val();
	var upass = $("#pwd").val();

	if (uname == "15170751216" && upass == "zlwxhn0930") {
		//跳转
	} else if (uname == null && upass == null) {
		alert("输账号密码才能进!!!")
	} else if (uname == "" && upass == "") {
		alert("输账号密码才能进!!!")
	} else if (uname == "15170751216" && upass != "zlwxhn0930") {
		if (upass == "" || upass == null) {
			alert("给我输密码!")
		} else {
			alert("密码错啦!给我重新输!")
		}
	} else if (uname != "15170751216" && upass == "zlwxhn0930") {
		alert("账号输错啦!")
	} else if (uname != "15170751216" && upass != "zlwxhn0930") {
		alert("账号密码都输错啦!")
	}
	$(".model").show();
}
