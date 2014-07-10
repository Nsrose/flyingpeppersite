var video_ids = {
	"play_video_0":"//player.vimeo.com/video/76762545",
	"play_video_a":"//player.vimeo.com/video/98451634",
	"play_video_1":"//player.vimeo.com/video/97086004",
	"play_video_2":"//player.vimeo.com/video/88093599",
	"play_video_3":"//player.vimeo.com/video/95032876",
	"play_video_4":"//www.youtube.com/embed/-c2U2idnWqU",

}

video_chooser = function(video_id) {
		var src = video_ids[video_id];
		$("#video_player").attr("src", src);
		$("#video_player").show();
	}

$(document).ready(function(){
	
	// Video modal control:



	$("#cover_content_modal_action").click(function() {
		$("#main_overlay").css({
			"opacity":"0.9",
			"z-index":"997",
		})
		$("#video_modal").show();
		video_chooser("play_video_0");
	})
	$("#play_video_a").click(function() {
		$("#main_overlay").css({
			"opacity":"0.9",
			"z-index":"997",
		})
		$("#video_modal").show();
		video_chooser("play_video_a");
	})

	$("#main_overlay").click(function() {
		$("#video_modal").hide();
		$("#video_player").hide();	
		$(this).css({
			"z-index":"0",
			"opacity":"0.6",
		})
	})
	$("#video_modal").click(function() {
		$(this).hide();	
		$("#video_player").hide();
		$("#main_overlay").css({
			"z-index":"0",
			"opacity":"0.6",
		})
	})
	$(".section_video_overlay_play").click(function() {
		var video_id = $(this).attr('id');
		$("#main_overlay").css({
			"opacity":"0.9",
			"z-index":"999",
		})
		$("#video_modal").show();
		video_chooser(video_id)
	})



	// Hover and animation:
	$(".section_video").mouseenter(function() {
		var section_id = $(this).parent().find("div").attr("id")
		$("#" + section_id).css({
			"opacity":"0.9",
			"top":"0",
		})
	})
	$(".section_video_overlay").mouseleave(function() {
		
		$(this).css({
			"top":"-150",
			"opacity":"0",
		})
		
		
		
	})
});