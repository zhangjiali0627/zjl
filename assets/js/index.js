$(".moreworks").fadeOut(0);
var flag=true;
$(".moreWork").click(function(){
	if(flag){
		$(".moreworks").fadeIn(500);
		$(".moreWork").html("收起作品");
		flag=false;
	}else{
		$(".moreworks").fadeOut(500);
		$(".moreWork").html("更多作品");
		flag=true;
	}
})
$(".jieshao").slideUp(0);
var flag1=true;
$("#skills .jineng1").hover(function(){
	if(flag1){
		flag1=false;
		$(".jieshao1").stop();
		$(".jieshao1").slideDown(500);
	}
},function(){
	if(!flag1){
		flag1=true;
		$(".jieshao1").stop();
		$(".jieshao1").slideUp(500);
	}
});
var flag2=true;
$("#skills .jineng2").hover(function(){
	if(flag2){
		$(".jieshao2").stop();
		$(".jieshao2").slideDown(500);
		flag2=false;
	}
},function(){
	if(!flag2){
		$(".jieshao2").stop();
		$(".jieshao2").slideUp(500);
		flag2=true;
	}
});
var flag3=true;
$("#skills .jineng3").hover(function(){
	if(flag3){
		$(".jieshao3").stop();
		$(".jieshao3").slideDown(500);
		flag3=false;
	}
},function(){
	if(!flag3){
		$(".jieshao3").stop();
		$(".jieshao3").slideUp(500);
		flag3=true;
	}
});
var flag4=true;
$("#skills .jineng4").hover(function(){
	if(flag4){
		$(".jieshao4").stop();
		$(".jieshao4").slideDown(500);
		flag4=false;
	}
},function(){
	if(!flag4){
		$(".jieshao4").stop();
		$(".jieshao4").slideUp(500);
		flag4=true;
	}
});
var flag5=true;
$("#skills .jineng5").hover(function(){
	if(flag5){
		flag5=false;
		$(".jieshao5").stop();
		$(".jieshao5").slideDown(500);
	}
},function(){
	if(!flag5){
		flag5=true;
		$(".jieshao5").stop();
		$(".jieshao5").slideUp(500);
	}
});
var flag6=true;
$("#skills .jineng6").hover(function(){
	if(flag6){
		flag6=false;
		$(".jieshao6").stop();
		$(".jieshao6").slideDown(500);
	}
},function(){
	if(!flag6){
		flag6=true;
		$(".jieshao6").stop();
		$(".jieshao6").slideUp(500);
	}
});
var flag7=true;
$("#skills .jineng7").hover(function(){
	if(flag7){
		flag7=false;
		$(".jieshao7").stop();
		$(".jieshao7").slideDown(500);
	}
},function(){
	if(!flag7){
		flag7=true;
		$(".jieshao7").stop();
		$(".jieshao7").slideUp(500);
	}
});
var flag8=true;
$("#skills .jineng8").hover(function(){
	if(flag8){
		flag8=false;
		$(".jieshao8").stop();
		$(".jieshao8").slideDown(500);
	}
},function(){
	if(!flag8){
		flag8=true;
		$(".jieshao8").stop();
		$(".jieshao8").slideUp(500);
	}
});


$(".morezl").fadeOut(0);
var zlflag=true;
$(".moreziliao").click(function(){
	if(zlflag){
		$(".morezl").fadeIn(500);
		$(".moreziliao").html("收起");
		zlflag=false;
	}else{
		$(".morezl").fadeOut(500);
		$(".moreziliao").html("查看更多");
		zlflag=true;
	}
})


// 按需加载
var foot1=$( ".foot1");
	document.onscroll=function(){
	var tops=document.body.scrollTop||document.documentElement.scrollTop;
	var ch=document.documentElement.clientHeight;
		for(var i=0;i<foot1.length;i++){
			if(foot1[i].offsetTop<=tops+ch){
				var imgs=$("img",foot1[i]);
				for(var j=0;j<imgs.length;j++){
					var src=imgs[j].getAttribute("data-src");
					imgs[j].src=src;
				}
			}
		}
	}