$(function(){
	console.log("快联系我吧 call me:18814182585");
	$(document).scroll(function(){
		if( $(this).scrollTop()>30 ){
			$('header').css({
				"height":60+"px"
			});
			$('.redBar').css({
				"bottom":"20px",
				"height":"5px"
			})
			$('.headerRight ul').addClass('translate8');
			$('header h1').addClass('translate8');
		}else{
			$('header').css({
				"height":80+"px"
			});
			$('.redBar').css({
				"bottom":"0px",
				"height":"10px"
			})
			$('.headerRight ul').removeClass('translate8');
			$('header h1').removeClass('translate8');
		}
		
		if( $(this).scrollTop()>600 ){
			$.each($('.skillsBox p span'), function(index,ele) {
				$('.skillsBox .precent').eq(index).animate({
					"width":ele.innerHTML
				},1000)
			});
		}
		
		if( $(this).scrollTop()>600 ){
			$('#backToTop').show(400);
		}else{
			$('#backToTop').hide(400);
		}
		
	})
	
	//li-shake
	$('.headerRight ul li').addClass('li-shake');
	$('.contactBtn').click(function(){
		$('.headerRight ul li').addClass('li-shake');
			setTimeout(function(){
		$('.headerRight ul li').removeClass('li-shake');
	},1000)
	})
	setTimeout(function(){
		$('.headerRight ul li').removeClass('li-shake');
	},1000)
	
	//回到顶部
	$('#backToTop').click(function(){
		var timer=setInterval(function(){
			var nowTop=$(document).scrollTop();
			var nowTop=nowTop-Math.ceil(nowTop/8);
			$(document).scrollTop(nowTop);
			if(nowTop<=0){
				clearInterval(timer);
			}
		},20)
	})
	
	//点击滚动到对应点
	$('.aboutMe').click(function(){
		var targetTop=$('.aboutMeBox').offset().top-50;
		rollTo(targetTop);
	});
	$('.myWork').click(function(){
		var targetTop=$('.experience').offset().top-50;
		rollTo(targetTop);
	});
	$('.collection').click(function(){
		var targetTop=$('.portfolio').offset().top-50;
		rollTo(targetTop);
	});
	$('.contactMe').click(function(){
		var targetTop=$(document).height()-$(window).height()-10;
		rollTo(targetTop);
	});
	//滚动函数
	function rollTo(targetTop){
		var timer=setInterval(function(){
			var nowTop=$(document).scrollTop();
			var nowTop=nowTop+Math.ceil((targetTop-nowTop)/8);
			$(document).scrollTop(nowTop);
			if(nowTop>=targetTop){
				clearInterval(timer);
			}
		},20)
	}
	
	$('.headerRight').on('mouseover','li',function(){
		var index=$(this).index();
//		$('.infoBar').css({
//			"left":$(this).index()*50+"px",
//		})
		$('.infoBar').stop();
		var message="";
		switch (index){
			case 0:
				message="18814182585";
				break;
			case 1:
				message="bigfish_alex@163.com";
				break;
			case 2:
				message="kk632388230";
				break;
			case 3:
				message="广东省广州市";
				break;
			case 4:
				message="https://github.com/Bigfish-Alex";
				break;
			default:
				break;
		}
		$('.infoBar').animate({"height":"18px"},100,function(){			
			$('.infoBar').animate({"width":"230px"},100,function(){
				$('.infoBar').html(message);
			})
		})
	})
	$('.headerRight').on('mouseleave','li',function(){
		$('.infoBar').stop();
		$('.infoBar').animate({"width":"18px"},100,function(){
			$('.infoBar').html("");
			$('.infoBar').animate({"height":"0px"},100)
		})
	})
	
    //瀑布流展示作品
//  $.ajax({
//  	type:"get",
//  	url:"libs/data/allImg.json",
//  	async:false,
//  	success:function(res){
//  		$.each(res, function(index,ele) {
//	    		var oImg=document.createElement('img');
//	    		$(oImg).attr({"src":ele.imgSrc});
//	    		$(oImg).appendTo('#masonry');
//	    	});
//  	}
//  });
//	var $grid = $('#masonry').masonry({
//	  	// options...
//	  	columnWidth: 0,
//	  	itemSelector: 'img'
//	});
//	$grid.imagesLoaded().progress( function() {
//	  $grid.masonry('layout');
//	});
    
    //初始化
    var $grid = $('#masonry').imagesLoaded( function() {
	  // init Masonry after all images have loaded
	  $grid.masonry({
	    // options...
	    itemSelector: 'img'
	  });
	});
	
    //点击移除
    $grid.on( 'click', 'img', function() {
	  // remove clicked element
	  $grid.masonry( 'remove', this ).masonry('layout');
	});
	
	//点击放大
	$grid.on( 'click', 'img', function() {
	  $(this).toggleClass('gigante');
	  // trigger layout after item size changes
	  $grid.masonry('layout');
	});
	
	$('.classifyShow').on('click','button',function(){
		var classify=$(this).html().toLowerCase();
    	$grid.masonry('remove',$('#masonry img')).masonry('layout');
    	var loopImg=[];
    	switch (classify){
    		case 'all':
    			loopImg=allImg;
    			break;
    		case 'pc':
    			loopImg=pcImg;
    			break;
    		case 'phone':
    			loopImg=phoneImg;
    			break;
    		case 'hybrid':
    			loopImg=hybridImg;
    			break;
    		case 'wx':
    			loopImg=wxImg;
    			break;
    		default:
    			break;
    	}
    	
	    for(var i=loopImg.length;i>0;i--){
    		var oImg=document.createElement('img');
    		$(oImg).attr({"src":loopImg[i-1].imgSrc});
    		$grid.prepend( oImg )
		    // add and lay out newly prepended items
		    .masonry( 'prepended', oImg );
    	}
    	setTimeout(function(){
    		$grid.masonry('layout');
    	},100)	
    	
//  	$.get("libs/data/"+classify+".txt",function(res){
//  		var res=JSON.parse(res);
//	    	for(var i=res.length;i>0;i--){
//	    		var oImg=document.createElement('img');
//	    		$(oImg).attr({"src":res[i-1].imgSrc});
//	    		$grid.prepend( oImg )
//			    // add and lay out newly prepended items
//			    .masonry( 'prepended', oImg );
//	    	}
//	    	setTimeout(function(){
//	    		$grid.masonry('layout');
//	    	},100)
//  	})
	})
	
	$('.classifyShow').on('mousemove','button',function(){
		$(this).addClass('hover').siblings('button').removeClass('hover');
	})
})

