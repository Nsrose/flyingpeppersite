$(document).ready(function(){
	$("#cover_content_modal_action").click(function() {
		$("#cover_overlay").css({
			"opacity":"0.9",
			"z-index":"999",
		})
		$("#video_modal").show();
	})
	$("#cover_overlay").click(function() {
		$("#video_modal").hide();	
		$(this).css({
			"z-index":"0",
			"opacity":"0.7",
		})
	})
	$("#video_modal").click(function() {
		$(this).hide();	
		$("#cover_overlay").css({
			"z-index":"0",
			"opacity":"0.7",
		})
	})
});