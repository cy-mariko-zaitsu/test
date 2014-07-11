$(document).ready(function(){
	$(".serialInput input").focus(function(){
		if($(".serialInput input").val() == "シリアルコードを入力")
		$(".serialInput input").val("");
	
	});
	$(".serialInput input").blur(function(){
		if($(".serialInput input").val() == "")
		{
			$(".serialInput input").val("シリアルコードを入力");
		}
	});
});