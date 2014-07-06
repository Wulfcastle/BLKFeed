Litmus={};

Litmus.Videobox={
	init:function(){
		$(".video-box .play").click(function(){

			$(this).parents(".video-box").find(".thumb").hide();
			$(this).parents(".video-box").find(".wistia_embed").fadeIn();
			wistiaEmbed.play();
		})
	}
}
Litmus.Signup={
	init:function(){
		$("form.signup").validate();
		$("#cardNumber").validateCreditCard(function(e){
			if(e.card_type==null){
				$(".cards li").removeClass("off");
			}
			else{
				$(".cards li").addClass("off");
				$(".cards .icon-" + e.card_type.name).removeClass("off");
			}

		}, {
            accept: ["visa", "visa_electron", "mastercard", "amex", "discover"]
        });
	}
}
Litmus.Pricing={
	init:function(){

		$("input[name=price-frequency]").change(function(){
			if($("input[name=price-frequency]:checked").hasClass("monthly")){
				$("table.pricing").removeClass("annual").addClass("monthly");
				$(".free-trials").removeClass("annual").addClass("monthly");
				$("#moar-users").show();
			}
			else{
				$("table.pricing").removeClass("monthly").addClass("annual");
				$(".free-trials").removeClass("monthly").addClass("annual");
				$("#moar-users").hide();
			}
		});

		$("article.whats-included").waypoint(function(){
			$(".one").addClass("appeared animated fadeInUp");
			$(".two").addClass("appeared animated fadeInUp");
		}, {offset: '45%'});

		$("article.not-included").waypoint(function(){
			$(".three").addClass("appeared animated fadeInUp");
			$(".four").addClass("appeared animated fadeInUp");
			$(".five").addClass("appeared animated fadeInUp");
		}, {offset: '65%'});

	}
}

Litmus.Learning = {
  init: function(){
    if($('#feed').length > 0) {
      $('#feed').FeedEk({
        FeedUrl   : '../blog/feed.html',
        MaxCount  : 4,
        ShowDesc  : false
      });
    }
  }
};

Litmus.SubscribeThanks = {
  init: function(){
    if($('#feed').length > 0) {
      $('#feed').FeedEk({
        FeedUrl   : '../blog/feed.html',
        MaxCount  : 4,
        ShowDesc  : false
      });
    }
  }
};

Litmus.Contact={
	init:function(){

		function initialize() {
			var latlng = new google.maps.LatLng(42.366217, -71.103814);
			var latlng2 = new google.maps.LatLng(51.52041, -0.10754);

			var myOptions =
			{
				zoom: 12,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

	        var myOptions2 =
			{
			    zoom: 12,
			    center: latlng2,
			    mapTypeId: google.maps.MapTypeId.ROADMAP
			}

		    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    		var map2 = new google.maps.Map(document.getElementById("map_canvas_2"), myOptions2);

		  	var contentString = '<div id="content">'+
		      '<strong>Litmus Software, Inc.</strong> <br/>'+
		      '675 Massachusetts Avenue, 11th floor<br/>'+
		      'Cambridge, MA 02139'+
		      '</div>';

  		  	var contentString2 = '<div id="content">'+
		      '<strong>Litmus Software, Inc.</strong> <br/>'+
		      '31â€“35 Kirby Street<br/>'+
		      'London EC1N 8TE'+
		      '</div>';

			infowindow = new google.maps.InfoWindow({
			  content: contentString,
			  maxWidth: 250,
			  maxHeight: 250,
			  shadowStyle: 1,
			  padding: 0,
			  backgroundColor: 'rgb(57,57,57)',
			  borderRadius: 4,
			  arrowSize: 10,
			  borderWidth: 1,
			  borderColor: '#2c2c2c',
			  disableAutoPan: true,
			  hideCloseButton: true,
			  arrowPosition: 30,
			  backgroundClassName: 'phoney',
			  arrowStyle: 0
			});

			  infowindow2 = new google.maps.InfoWindow({
			  content: contentString2,
			  maxWidth: 250,
			  maxHeight: 250,
			  shadowStyle: 1,
			  padding: 0,
			  backgroundColor: 'rgb(57,57,57)',
			  borderRadius: 4,
			  arrowSize: 10,
			  borderWidth: 1,
			  borderColor: '#2c2c2c',
			  disableAutoPan: true,
			  hideCloseButton: true,
			  arrowPosition: 30,
			  backgroundClassName: 'phoney',
			  arrowStyle: 0
			});

			var marker = new google.maps.Marker({
			  position: latlng,
			  map: map,
			  title: 'Boston Office'
			});


			var marker2 = new google.maps.Marker({
			  position: latlng2,
			  map: map2,
			  title: 'London Office'
			});

			google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
			});

			  google.maps.event.addListener(marker2, 'click', function() {
			infowindow2.open(map2,marker2);
			});
			}

			google.maps.event.addDomListener(window, 'load', initialize);
			}
}
Litmus.Features={};
Litmus.Features.Overview={
	init:function(){

		$("article.previews").waypoint(function(){
			$("article.previews").addClass("appeared");
		}, {offset: '45%'});

		$("article.spam").waypoint(function(){
			$("article.spam").addClass("appeared");
		}, {offset: '45%'});

		$("article.analytics").waypoint(function(){
			$("article.analytics").addClass("appeared");
		}, {offset: '45%'});

		$("article.discussions").waypoint(function(){
			$("article.discussions").addClass("appeared");
		}, {offset: '45%'});

		$("article.code-questions").waypoint(function(){
			$("article.code-questions").addClass("appeared");
		}, {offset: '45%'});

		$("article.esp").waypoint(function(){
			$("article.esp").addClass("appeared");
		}, {offset: '45%'});

		$("article.audience .tabs a").click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
			$("article.audience section").removeClass("appear");
			$("article.audience section."+$(this).attr("id")).addClass("appear");
			$("article.audience").removeClass().addClass("audience "+$(this).attr("id"));
		})
	}
}

Litmus.Features.PageTests={
	init:function(){

		$("article.link-validation").waypoint(function(){
			$("article.link-validation").addClass("appeared");
			$(".hotspot.yellow").addClass("active");
		}, {offset: '45%'});

		$("article.alkaline").waypoint(function(){
			$("article.alkaline").addClass("appeared");
		}, {offset: '45%'});

		$(".view-client-list").click(function(){
			$(".client-list").toggleClass("show");
		});
	}
}

Litmus.Features.Spam={
	init:function(){

		$("article.spam").waypoint(function(){
			$("article.spam").addClass("appeared");
		}, {offset: '45%'});

		$("article.authentication").waypoint(function(){
			$("article.authentication").addClass("appeared");
		}, {offset: '45%'});

		$("article.behind-the-score").waypoint(function(){
			$("article.behind-the-score").addClass("appeared");
		}, {offset: '45%'});

		$("article.reputation").waypoint(function(){
			$("article.reputation").addClass("appeared");
		}, {offset: '45%'});

		$(".behind-the-score .tabs a").click(function(){
			$(this).addClass("selected").siblings().removeClass("selected");
			var panelToShow = $(this).attr("id");
			$(".behind-the-score").addClass(panelToShow);
			$(".behind-the-score ."+panelToShow+"-explanation").addClass("show").siblings().removeClass("show");
		});

	}
}

Litmus.Features.Previews={
	init:function(){
		$("article.previews").waypoint(function(){
			$("article.previews").addClass("appeared");
		}, {offset: '45%'});

		$("article.mobile").waypoint(function(){
			$("article.mobile").addClass("appeared");
		}, {offset: '45%'});

		$("article.esp").waypoint(function(){
			$("article.esp").addClass("appeared");
		}, {offset: '45%'});

		$("article.interactive-testing").waypoint(function(){
			$("article.interactive-testing").addClass("appeared");
		}, {offset: '45%'});

		$("article.link-validation").waypoint(function(){
			$("article.link-validation").addClass("appeared");
			$(".hotspot.yellow").addClass("active");
		}, {offset: '45%'});

		$(".link-validation .hotspot").click(function(){
			$(this).addClass("active").siblings().removeClass("active");
		});

		$("article.compatibility").waypoint(function(){
			$("article.compatibility").addClass("appeared");
		}, {offset: '45%'});

		$("article.sharing").waypoint(function(){
			$("article.sharing").addClass("appeared");
		}, {offset: '45%'});

		$("article.alkaline").waypoint(function(){
			$("article.alkaline").addClass("appeared");
		}, {offset: '45%'});

		$(".view-client-list").click(function(){
			$(".client-list").toggleClass("show");
		})

	}
}
Litmus.Features.Analytics={
	pieChartsInitialized:false,
	init:function(){

		$("article.engagement").waypoint(function(){
			$("article.engagement").addClass("appeared");
			$('.pie-chart').easyPieChart({
	      trackColor: '#549b68',
	      barColor:'#ffffff',
	      scaleColor:false,
	      animate:'1500',
	      size: '60'
	    });
	    if (!Litmus.Features.Analytics.pieChartsInitialized){
	    	Litmus.Features.Analytics.pieChartsInitialized=true;
	    	setTimeout(function() {
		        $('.glanced .pie-chart').data('easyPieChart').update(8);
		        $('.skim .pie-chart').data('easyPieChart').update(52);
		        $('.read .pie-chart').data('easyPieChart').update(40);
		    }, 1500);
	    }
		},{ offset: '45%'});

		$("article.usage").waypoint(function(){
			$("article.usage").addClass("appeared");
		},{ offset: '45%'});

		$("article.interactions").waypoint(function(){
			$("article.interactions").addClass("appeared");
		},{ offset: '45%'});

		$("article.export").waypoint(function(){
			$("article.export").addClass("appeared");
		},{ offset: '45%'});

		$("article.how-it-works .bubble").waypoint(function(){
			$(this).addClass("appear");
		},{ offset: '45%'});

		$("article.how-it-works > figure").waypoint(function(){
			$(this).addClass("appear");
		},{ offset: '45%'});


	}
}
Litmus.Footer={
	init:function(){
		$(window).load(function(){
			//	scrolling carousels

		});
	}
}
Litmus.Unlimited={
	init:function(){
		Litmus.Videobox.init();
		$("article.no-limits").waypoint(function(){
			$("article.no-limits").addClass("appeared");
		}, {offset: '45%'});
		$("article.build").addClass("appeared");
	}
}
Litmus.LandingPageTesting={
	init:function(){
		Litmus.Videobox.init();
	}
}
Litmus.InteractiveTesting={
	init:function(){
		Litmus.Videobox.init();
	}
}
Litmus.Careers={
	init:function(){
		Litmus.Videobox.init();
	}
}
Litmus.Team={
	init:function(){
		Litmus.Videobox.init();
	}
}
Litmus.Home={
	init:function(){
		$("article.previews").addClass("appeared");

	}
}

Litmus.Features.Community={
	init:function(){
		$("article.worldmap").waypoint(function(){
			$("article.worldmap").addClass("appeared");
		}, {offset: '90%'});
		$("article.discussions").waypoint(function(){
			$("article.discussions").addClass("appeared");
		}, {offset: '55%'});
		$("article.code-questions").waypoint(function(){
			$("article.code-questions").addClass("appeared");
		}, {offset: '55%'});
		$("article.learning-center").waypoint(function(){
			$("article.learning-center").addClass("appeared");
		}, {offset: '55%'});
	}
}
Litmus.OldHome = {

	MIN_HEIGHT: 600,
	screenHeight:$(window).height() > this.MIN_HEIGHT ? $(window).height() : this.MIN_HEIGHT,
	scrollDirection:'down',
	analyticsAnimated: false,
	introAnimated:false,
	lastScrollTop : 0,
	lightning:{
		/*loader:$(".lightning-fast .loader").percentageLoader({width: 80, height: 80, controllable : true, progress : 0, value:'', onProgressUpdate : function(val) {
              Litmus.Home.lightningFastLoader.setValue(Math.round(val * 100.0));
            }}),
		percentage:0,
		animationRunning:false*/
	},
	init:function(){
		var _this = this;
		_this.screenHeight = $(window).height();
		$("article.spam-testing .spam-score").transition({ scale: 0 });
		$('.lightning-fast').transition({ scale: 0 });
		$('.major-filter1').transition({ scale: 0 });
		$('.major-filter2').transition({ scale: 0 });
		$('.major-filter3').transition({ scale: 0 });
		$('.major-filter4').transition({ scale: 0 });
		$('.analytics-who').transition({ scale: 1 });
		$('.analytics-what').transition({ scale: 0 });
		$('.fullpage').height($(window).height());
		skrollr.init();




		$(window).load(function(){
			$(".liquid-image").imgLiquid();
			//	scrolling carousels

		});

		$(window).scroll(_this.scrollHandler);
		$(window).resize(_this.windowResized);
		$(".expandable .trigger").click(_this.onExpandableClick);

		_this.setupDetailsNav();
		_this.setupFeatureHovers();


    $("article.previews .main-image-container").mousemove(_this.previewsOnMouseMove);

	},
	setupFeatureHovers:function(){
		var _this = this;
		$(".main-features .grid-pad >div").hover(function(){
			$(this).addClass("highlight").siblings().removeClass("highlight");
		},
		function(){

		})

		// previews : 1- real previews
		$(".main-features #real-previews").hover(function(){
			// hide interactive testing and lightning fast slides
			$(".iphone-preview").css("opacity",0);
			$(".interactive-testing").css({"bottom":"-500px"});
			$('.lightning-fast').transition({ scale: 0 });

			// show real previews slides

			$(".real-previews-container img").css("top","-230px");
		},
		function(){
			$(".real-previews-container img").css("top","0");

		});

		// previews : 2- interactive testing
		$(".main-features #interactive-testing").hover(function(){
			// hide real previews and lightning fast slides

			$('.lightning-fast').transition({ scale: 0 });
			// show interactive testing slide
			$(".iphone-preview").css("opacity",1);
			$(".interactive-testing").css({"bottom":-10});

		},
		function(){

		});

		// previews : 3- lightning fast
		$(".main-features #lightning-fast").hover(function(){
			// hide  interactive testing slide
			$(".iphone-preview").css("opacity",0);
			$(".interactive-testing").css({"bottom":"-500px"});

			$('.lightning-fast').transition({ scale: 1 });
			_this.animateLightningLoader();

		},
		function(){
			//$('.lightning-fast').transition({ scale: 0 });
		});

		// spam : 1- know before you send
		$(".main-features #spam-know").hover(function(){
			$("article.spam-testing .spam-score").transition({ scale: 0 });
			$("article.spam-testing .major-filter1").transition({ scale: 0, delay: 300 });
			$("article.spam-testing .major-filter2").transition({ scale: 0, delay: 200 });
			$("article.spam-testing .major-filter3").transition({ scale: 0 });
			$("article.spam-testing .major-filter4").transition({ scale: 0, delay: 100});

			$(".spam-filter-content img").css("top","-230px");
		},
		function(){
			$(".spam-filter-content img").css("top",0);
		});

		// spam : 2- score cards
		$(".main-features #spam-score").hover(function(){
			$("article.spam-testing .major-filter1").transition({ scale: 0, delay: 400 });
			$("article.spam-testing .major-filter2").transition({ scale: 0 });
			$("article.spam-testing .major-filter3").transition({ scale: 0 ,delay: 200 });
			$("article.spam-testing .major-filter4").transition({ scale: 0, delay: 100 });
			$("article.spam-testing .spam-score").transition({ scale: 1 });
		},
		function(){
		});

		// spam : 3- major filters
		$(".main-features #major-filters").hover(function(){
			$("article.spam-testing .spam-score").transition({ scale: 0 });
			$("article.spam-testing .major-filter1").transition({ scale: 1, delay: 400 });
			$("article.spam-testing .major-filter2").transition({ scale: 1 });
			$("article.spam-testing .major-filter3").transition({ scale: 1 ,delay: 200 });
			$("article.spam-testing .major-filter4").transition({ scale: 1, delay: 100 });
		},
		function(){

		});

		// analytics : 1- engagement report
		$(".main-features #engagement-report").hover(function(){
			$("article.analytics  .individual-tracking").css("bottom","-550px");
			$("article.analytics .analytics-what").transition({ scale: 0});
			$("article.analytics .analytics-who").transition({ scale: 1 });
		},
		function(){

		});
		// analytics : 2- client report
		$(".main-features #browser-report").hover(function(){
			$("article.analytics  .individual-tracking").css("bottom","-550px");
			$("article.analytics .analytics-who").transition({ scale: 0 });
			$("article.analytics .analytics-what").transition({ scale: 1 });
		},
		function(){

		});

		// analytics : 3- individual tracking
		$(".main-features #individual-tracking").hover(function(){
			$("article.analytics .analytics-who").transition({ scale: 0 });
			$("article.analytics .analytics-what").transition({ scale: 0});
			$("article.analytics  .individual-tracking").css("bottom","-100px");
		},
		function(){

		});

	},
	animateLightningLoader:function(){
		var _this = this;
		if (!_this.lightning.animationRunning){
			_this.lightning.loader.parent().show();
			_this.lightning.animationRunning = true;
			var animateFunc = function() {
      _this.lightning.percentage++;
      _this.lightning.loader.setProgress(_this.lightning.percentage/100);
      if (_this.lightning.percentage < 100) {
        setTimeout(animateFunc, 5);
      }
      else {
       _this.lightning.animationRunning = false;
       _this.lightning.loader.parent().fadeOut();
       _this.lightning.percentage=0;
      }
    }
    setTimeout(animateFunc, 5);
		}
	},

	onExpandableClick:function(e){
		var $el = $(this).parents(".expandable");
		if($el.hasClass("closed")){
			$el.toggleClass("closed").find(".content").slideDown('ease-in');
		}
		else{
			$el.find(".content").slideUp('ease-in',function(){$el.toggleClass("closed")});
		}

		return false;
	},
	previewsOnMouseMove:function(event){

	},

	windowResized:function(){
		var _this = Litmus.Home;
		_this.screenHeight = $(window).height();
		$('.fullpage').height(_this.screenHeight);
		//_this.verticallyCenterHeroContent();
	},

	verticallyCenterHeroContent:function(){
		var _this = this;
		var heroTopMargin = (_this.screenHeight - $(".hero .grid").height())/2;
		$(".hero .grid").css("padding-top",heroTopMargin);
	},
	scrollHandler:function(){
		var _this = Litmus.Home;
		var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();

		// Save which direction we are going to a global
		if( _this.lastScrollTop >= wintop ) _this.scrollDirection = 'up';
		else _this.scrollDirection = 'down';

		/********************************************
		  Subnav Highlighting
		 *******************************************/

		if( wintop <= $("article.spam-testing").offset().top - $("nav.global").height() ) {
			_this.selectSubmenu("previews");
			$(".submenu").removeClass("spam analytics");
		}
		if(wintop>= $(".intro").offset().top - $("nav.global").height()){
			if(!_this.introAnimated){
				_this.animateIntro();
			}
		}
		if( wintop > $("article.spam-testing").offset().top - $("nav.global").height() && wintop <= $("article.analytics").offset().top - $("nav.global").height() ) {
			_this.selectSubmenu("spam-testing");
			$(".submenu").addClass("spam").removeClass("analytics");
		}

		if( wintop > $("article.analytics").offset().top - $("nav.global").height()  ) {
			_this.selectSubmenu("analytics");
			$(".submenu").addClass("analytics").removeClass("spam");
			if(!_this.analyticsAnimated){
				_this.animateAnalytics();
			}
		}

		// Pin / unpin the submenu
		if( wintop >= parseInt($(".intro").offset().top - $("nav.global").height()-5)) {
			_this.pin($("nav.submenu"));

		}

		 if( wintop < parseInt($(".intro").offset().top - $("nav.global").height() + 25)) {
			_this.unpin($("nav.submenu"));

		}

		if( wintop >parseInt($(".trusted-by").offset().top - $("nav.global").height() + 25)) {
			_this.unpin($("nav.submenu"));

		}

		// Records last scroll top for acertaining direction
		_this.lastScrollTop = wintop;

	},
	selectSubmenu:function(el){
		$("."+el, " .submenu").addClass("active").siblings().removeClass("active");
	},
	animateIntro:function(){
		$('.emol .bubble').transition({ scale: 1 });
		Litmus.Home.introAnimated = true;
	},
	animateAnalytics:function(){

		Litmus.Home.analyticsAnimated = true;
	},
	setupDetailsNav:function(){
		var _this = this;
		$(".details a.step").click(function(){
			_this.currentScreen = $(".details a.step").index($(this))+1;
			if(_this.scrollReady === true){
				_this.performScroll();
			}
		});
	},
	pin:function($elem){
		$elem.addClass("show");
	},
	unpin:function($elem){
		$elem.removeClass("show");
	}
}

$(document).ready(function(){
	Litmus.Footer.init();
	if($("body").hasClass("home")) Litmus.Home.init();
	if($("body").hasClass("contact")) Litmus.Contact.init();
	if($("body").hasClass("unlimited")) Litmus.Unlimited.init();
	if($("body").hasClass("learning")) Litmus.Learning.init();
	if($("body").hasClass("pricing")) Litmus.Pricing.init();
	if($("body").hasClass("subscribe")) Litmus.SubscribeThanks.init();
	if($("body").hasClass("signup")) Litmus.Signup.init();
	if($("body").hasClass("team")) Litmus.Team.init();
	if($("body").hasClass("careers")) Litmus.Careers.init();
	if($("body").hasClass("landing-page-testing")) Litmus.LandingPageTesting.init();
	if($("body").hasClass("interactive-testing")) Litmus.InteractiveTesting.init();
	if($("body").hasClass("features-overview")) Litmus.Features.Overview.init();
	if($("body").hasClass("features-analytics")) Litmus.Features.Analytics.init();
	if($("body").hasClass("features-previews")) Litmus.Features.Previews.init();
	if($("body").hasClass("features-page")) Litmus.Features.PageTests.init();
	if($("body").hasClass("features-spam")) Litmus.Features.Spam.init();
	if($("body").hasClass("features-community")) Litmus.Features.Community.init();
});
