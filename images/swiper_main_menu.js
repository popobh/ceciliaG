
$(function () { 

    /*投票*/
    $('.Area_tablayout_menu .tablayout_con_menu .tablayout_conbox_menu').addClass('swiper-wrapper');
    $('.Area_tablayout_menu .tablayout_con_menu .tablayout_conbox_menu .layout_limited').addClass('swiper-slide swiper-no-swiping'); /*swiper-no-swiping*/
    $('.Area_tablayout_NavArea_tabbar_menu ul').addClass('swiper-wrapper');
    $('.Area_tablayout_NavArea_tabbar_menu ul > li').addClass('swiper-slide');
    $('.Area_tablayout_NavArea_tabbar_menu ul > li').addClass('swiper-no-swiping'); /*swiper-no-swiping*/


});

//$(window).load(function(){
$(function () { 	
  
  //判斷時段切換頁籤
  var now = new Date();
	var now_h = now.getHours(); //時
	var now_activeIndex = 0;
	if( now_h >= 08 ){ now_activeIndex = 0;};
	if( now_h >= 10 ){ now_activeIndex = 1;};
	if( now_h >= 12 ){ now_activeIndex = 2;};
	if( now_h >= 16 ){ now_activeIndex = 3;};
	if( now_h >= 20 ){ now_activeIndex = 4;};
	

	/*投票--選單*/
	var Area_tablayout_NavArea_tabbar_li = $('.Area_tablayout_NavArea_tabbar_menu li');
	var Area_tablayout_NavArea_tabbar = new Swiper('.Area_tablayout_NavArea_tabbar_menu .Nav', {
		
	
		//★5.2.1★RWD(換成大於)
			breakpoints: {
			0: {
			//排版
			
			//這是手機
			slidesPerView: 5, //顯示幾個
			slidesPerGroup: 1, //一次切換幾個
			spaceBetween: 0, //間距
			slidesPerColumn: 1, //一次顯示幾行
			},
			
			//這是PC
			768: {
			slidesPerView: 5, //顯示幾個
			slidesPerGroup: 1, //一次切換幾個
			spaceBetween: -150, //間距
			slidesPerColumn: 1, //一次顯示幾行
			},
			},
			
					//★5.2.1★↓動作↓
		on: {
			//初始化
			init: function() {
			lazyLoadInstance.update();
			},
		}, //↑動作↑

    
	});

  
	/*頁籤公版*/
	var Area_tablayout_con = new Swiper('.Area_tablayout_menu .tablayout_con_menu', {	
		
		//★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
		pagination: {
			el: '.Area_tablayout_menu .tablayout_con_menu .swiper-pagination',
			clickable: true, //觸擊切換
			type:  'bullets', //切換樣式 bullets(點點-預設) fraction(數字) progress(進度條) custom(自訂)
			dynamicBullets: true, //點點會縮小
		},

		//★5.2.1★基本
		initialSlide: now_activeIndex , //初始險是第幾個(亂數)
		autoHeight: true, //自動高度

		//★5.2.1★↓動作↓
		on: {
		  //初始化
		  init: function() {
			  Area_tablayout_NavArea_tabbar_li.eq(this.activeIndex).addClass('cate-hover');
        
		  },
		  //輪播開始時觸發
		  transitionStart: function() {
			  //高亮
			  Area_tablayout_NavArea_tabbar_li.removeClass('cate-hover').eq(this.activeIndex).addClass('cate-hover');
		  },
		}, //↑動作↑
			
	
  });
	

  /*投票--點選單時*/
  Area_tablayout_NavArea_tabbar_li.click(function(){
    var i = $(this).index();
    Area_tablayout_con.slideTo(i , 300); //移動到點擊卡
    //$(Area_tablayout_con.slides.eq(i).find('img.lazy') ).show().lazyload({threshold: 1000,failure_limit: 1000,});
  })  
  


  
  
})

$(function () { 

    /*投票*/
    $('.Area_tablayout_menu2 .tablayout_con_menu .tablayout_conbox_menu').addClass('swiper-wrapper');
    $('.Area_tablayout_menu2 .tablayout_con_menu .tablayout_conbox_menu .layout_limited').addClass('swiper-slide swiper-no-swiping'); /*swiper-no-swiping*/
    $('.Area_tablayout_NavArea_tabbar_menu2 ul').addClass('swiper-wrapper');
    $('.Area_tablayout_NavArea_tabbar_menu2 ul > li').addClass('swiper-slide');
    $('.Area_tablayout_NavArea_tabbar_menu2 ul > li').addClass('swiper-no-swiping'); /*swiper-no-swiping*/


});

//$(window).load(function(){
$(function () { 	
  
  //判斷時段切換頁籤
  var now = new Date();
	var now_h = now.getHours(); //時
	var now_activeIndex = 0;
	if( now_h >= 08 ){ now_activeIndex = 0;};
	if( now_h >= 10 ){ now_activeIndex = 1;};
	if( now_h >= 12 ){ now_activeIndex = 2;};
	if( now_h >= 16 ){ now_activeIndex = 3;};
	if( now_h >= 20 ){ now_activeIndex = 4;};
	

	/*投票--選單*/
	var Area_tablayout_NavArea_tabbar_li = $('.Area_tablayout_NavArea_tabbar_menu2 li');
	var Area_tablayout_NavArea_tabbar = new Swiper('.Area_tablayout_NavArea_tabbar_menu2 .Nav', {
		
	
		//★5.2.1★RWD(換成大於)
			breakpoints: {
			0: {
			//排版
			
			//這是手機
			slidesPerView: 5, //顯示幾個
			slidesPerGroup: 1, //一次切換幾個
			spaceBetween: 0, //間距
			slidesPerColumn: 1, //一次顯示幾行
			},
			
			//這是PC
			768: {
			slidesPerView: 5, //顯示幾個
			slidesPerGroup: 1, //一次切換幾個
			spaceBetween: -150, //間距
			slidesPerColumn: 1, //一次顯示幾行
			},
			},
			
					//★5.2.1★↓動作↓
		on: {
			//初始化
			init: function() {
			lazyLoadInstance.update();
			},
		}, //↑動作↑

    
	});

  
	/*頁籤公版*/
	var Area_tablayout_con = new Swiper('.Area_tablayout_menu2 .tablayout_con_menu', {	
		
		//★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
		pagination: {
			el: '.Area_tablayout_menu2 .tablayout_con_menu .swiper-pagination',
			clickable: true, //觸擊切換
			type:  'bullets', //切換樣式 bullets(點點-預設) fraction(數字) progress(進度條) custom(自訂)
			dynamicBullets: true, //點點會縮小
		},

		//★5.2.1★基本
		initialSlide: now_activeIndex , //初始險是第幾個(亂數)
		autoHeight: true, //自動高度

		//★5.2.1★↓動作↓
		on: {
		  //初始化
		  init: function() {
			  Area_tablayout_NavArea_tabbar_li.eq(this.activeIndex).addClass('cate-hover');
        
		  },
		  //輪播開始時觸發
		  transitionStart: function() {
			  //高亮
			  Area_tablayout_NavArea_tabbar_li.removeClass('cate-hover').eq(this.activeIndex).addClass('cate-hover');
		  },
		}, //↑動作↑
			
	
  });
	

  /*投票--點選單時*/
  Area_tablayout_NavArea_tabbar_li.click(function(){
    var i = $(this).index();
    Area_tablayout_con.slideTo(i , 300); //移動到點擊卡
    //$(Area_tablayout_con.slides.eq(i).find('img.lazy') ).show().lazyload({threshold: 1000,failure_limit: 1000,});
  })  
  


  
  
})



