var video_ids = {
	"play_video_0":"//player.vimeo.com/video/76762545",
	"play_video_a":"//player.vimeo.com/video/98451634",
	"play_video_1":"//player.vimeo.com/video/97086004",
	"play_video_2":"//player.vimeo.com/video/88093599",
	"play_video_3":"//player.vimeo.com/video/95032876",
	"play_video_4":"//www.youtube.com/embed/-c2U2idnWqU",
	"play_video_5":"//www.youtube.com/embed/STfyqhtFpX0",
	"play_video_6":"//www.youtube.com/embed/ottIzcOHpYA",
	"play_video_7":"//www.youtube.com/embed/OuO6_DVwH4U",
	"play_video_8":"//video.aarp.org/video/Maria-1/player?layout=compact&amp;read_more=1",
	// music:
	"play_video_9":"//player.vimeo.com/video/65792909",
	"play_video_10":"//player.vimeo.com/video/95038021",
	"play_video_11":"//player.vimeo.com/video/59462613",
	"play_video_12":"//www.youtube.com/embed/4Bnwjvpp6fc",
	"play_video_13":"//www.youtube.com/embed/h00WrGn-zuI",
	"play_video_14":"//www.youtube.com/embed/eg8xoYqOEd8",
	"play_video_15":"//www.youtube.com/embed/021AKRoBRPM",
	"play_video_16":"//www.youtube.com/embed/gcUopXcjDu8",
	"play_video_17":"//www.youtube.com/embed/LtBrmMjeA1Y",

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
		$("#video_player").attr('src', '');
		$("#video_modal").hide();
		$("#video_player").hide();	
		$(this).css({
			"z-index":"0",
			"opacity":"0.6",
		})
	})
	$("#video_modal").click(function() {
		$("#video_player").attr('src', '');
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
	
	$(".section_video_holder").hover(function() {
		var section_id = $(this).find("div").attr("id")
		$("#" + section_id).css({
	 		"opacity":"0.9",
	 		"top":"0",
	 	});
	}, function() {
		var section_id = $(this).find("div").attr("id")
	 		$("#" + section_id).css({
	 			"top":"-150",
	     		"opacity":"0",
	 		})
	})

	$(".navbar_item").click(function() {
		var navbar_item_id = $(this).attr('id').slice(12);

		$("html, body").animate({ scrollTop: $("#" + navbar_item_id).offset().top - 50 }, 1000);
	})

	$("#cover_content_down_arrow").click(function() {
		$("html, body").animate({ scrollTop: $("#about").offset().top - 50 }, 1000);
	})

	
});