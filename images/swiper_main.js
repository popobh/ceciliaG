

$(function () { 

//版頭品輪播★v5.2.1★
var swiper_main = function swiper_main(){
  
  /*版頭品--RWD版*/
  var box_PD = new Swiper('.Area_title .box_PD .btclass', {
    //★5.2.1★基本
    initialSlide: Math.floor( Math.random() * ($('.Area_title .box_PD .swiper-slide').size()) ) , //初始險是第幾個(亂數)
    //watchOverflow: true, //只有1個slide時，不啟動swipers
    speed: 300, //滑動速度(300)
        //★5.2.1★自動撥放
		//autoplay: false,
		autoplay: {
        delay: 3000,
        disableOnInteraction: false ,//觸擊後不再自動輪播
		},
		loop: false, //無限循環    loopAdditionalSlides: 1, //前後多複製幾個
    loopedSlides: 3, //開無限循環時，且slidesPerView:'auto'，需多設定這個(大於可視卡的數量)
    //★5.2.1★切換特效(淡化)
    effect: 'fade',     //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌)
    fadeEffect: {
      crossFade: true //打開自動淡出
    },
  });   
};



   /* --------------------------------------
 * 進頁面馬上執行
 * -------------------------------------- */
$(function(){
  //lazyLoadInstance.loadAll(); //圖片延遲全部加載(檢查用)
  swiper_main(); //輪播★v5.2.1★
});    


/* --------------------------------------
 * 頁面讀取完畢後執行
 * -------------------------------------- */
$(window).on('load',function(){
  lazyLoadInstance.update(); //重新觸發圖片延遲,針對共用素材、無限輪播
  //navlight_main(); //Phone選單套件
});


    
/* -------副標輪播---------*/	
	
var Area_PD1 = new Swiper('.title_swiper', {
  //排版
  slidesOffsetBefore: 0, //左邊偏移量
  slidesOffsetAfter: 0, //右邊偏移量
  centeredSlides: true , //當前區塊居中
    
           //★5.2.1★自動撥放
speed: 300, //滑動速度(300)
  autoplay: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false, //觸擊後不再自動輪播
    //stopOnLastSlide: true, //切換到最後時停止自動切換
  },
          //★5.2.1★切換特效(淡化)
  effect: 'slid',     //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌) slide(一般)
  fadeEffect: {
    crossFade: true //打開自動淡出
  },
//循環
  //loop: true, //無限循環
//基本
    direction: 'vertical', //滑動方向-垂直(預設水平horizontal)
      //RWD
  breakpoints: {
    1024: {
  //排版
      slidesPerView: 1, //顯示幾個
      slidesPerGroup: 1, //一次切換幾個
      spaceBetween: 10, //間距

    },
    320: {
  //排版
      slidesPerView:1, //顯示幾個
      slidesPerGroup: 1, //一次切換幾個
      spaceBetween: 0, //間距

    }
  },
});

   
    
    
    
    
    
//BN輪播★v5.2.1★
var swiper_bn_main = function swiper_bn_main(){
  
  
  var box_bn_PD = new Swiper('.Area_banner_swiper .box_PD .btclass', {
    
      
      //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.Area_banner_swiper .swiper-pagination',
      clickable: true, //觸擊切換
    },
      
     
    	  //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
    navigation:{
      nextEl: '.Area_banner_swiper .swiper-button-next',
      prevEl: '.Area_banner_swiper .swiper-button-prev',
    },
      
      
    //★5.2.1★基本
    initialSlide: Math.floor( Math.random() * ($('.Area_banner_swiper .box_PD .swiper-slide').size()) ) , //初始險是第幾個(亂數)
    //watchOverflow: true, //只有1個slide時，不啟動swipers
    speed: 300, //滑動速度(300)
        //★5.2.1★自動撥放
		//autoplay: false,
		autoplay: {
        delay: 3000,
        disableOnInteraction: false ,//觸擊後不再自動輪播
		},
		loop: false, //無限循環    loopAdditionalSlides: 1, //前後多複製幾個
    loopedSlides: 3, //開無限循環時，且slidesPerView:'auto'，需多設定這個(大於可視卡的數量)
    //★5.2.1★切換特效(淡化)
    effect: 'fade',     //切換特效 fade(淡化) cube(立方體) coverflow(3D) flip(翻牌)
    fadeEffect: {
      crossFade: true //打開自動淡出
    },
  });   
};


/* --------------------------------------
 * 進頁面馬上執行
 * -------------------------------------- */
$(function(){
  //lazyLoadInstance.loadAll(); //圖片延遲全部加載(檢查用)
  swiper_bn_main(); //輪播★v5.2.1★
});
	

    
	
	
})
  

  
  $('.Area_bonus .layout_bonus_01 ul').addClass('swiper-wrapper');
  $('.Area_bonus .layout_bonus_01 ul > li').addClass('swiper-slide');
  
  var Area02 = new Swiper('.Area_bonus .layout_bonus_01 .btclass', {
    
    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.Area_bonus .swiper-pagination',
      clickable: true, //觸擊切換
    },

    //★5.2.1★RWD(換成大於)
    breakpoints: {
      0: {
        //手機版
		slidesPerView: 2.02, //顯示幾個
		slidesPerGroup: 1, //一次切換幾個
		spaceBetween: 10, //間距
		slidesPerColumn: 1, //一次顯示幾行
		centeredSlides: true, //當前區塊居中
		slidesOffsetBefore: 0, //左邊偏移量
      },
      768: {
        //電腦版
		slidesPerView: 2.02, //顯示幾個
		slidesPerGroup: 1, //一次切換幾個
		spaceBetween: 10, //間距
		slidesPerColumn: 1, //一次顯示幾行
		centeredSlides: true, //當前區塊居中
		slidesOffsetBefore: 120, //左邊偏移量
      },
    },
		
    //★5.2.1★自動撥放
    autoplay: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, //觸擊後不再自動輪播
    },
      
    //循環
    loop: true, //無限循環
    loopAdditionalSlides: 3, //前後多複製幾個
    loopedSlides: 8, //開無限循環時，且slidesPerView:'auto'，需多設定這個(大於可視卡的數量)
		//特殊
		mousewheelControl: true,	//滑鼠滾輪功能
		watchSlidesProgress: true,	//啟動過程3 2 1 0 -1 -2 -3	
    //★5.2.1★↓動作↓
    on: {
      //輪播開始時觸發
      transitionStart: function() {
        //更新延遲讀圖
        lazyLoadInstance.update();
	       this.update();
      },  
    }, //↑動作↑ 

  }); 
  
  



//5PD輪播
  var Area5x6_li = $('.Area5x6 .page a');
  var Area5x6 = new Swiper('.Area5x6 .box', {
    
	  //★5.2.1★左右切換-白色箭頭swiper-button-white, 黑色箭頭swiper-button-black  
    navigation:{
      nextEl: '.Area5x6 .swiper-button-next',
      prevEl: '.Area5x6 .swiper-button-prev',
    },
    
    speed: 2000, //滑動速度(300)  
      
    //排版
    slidesPerView: 1, //顯示幾個
    spaceBetween: 50, //間距
    autoHeight: true, //自動高度 
    
    //★5.2.1★自動撥放
    //autoplay: true,
    //autoplay: {
    //  delay: 5000,
    //  disableOnInteraction: false, //觸擊後不再自動輪播
      //stopOnLastSlide: true, //切換到最後時停止自動切換
      //reverseDirection: true, //反向自動輪播
    //},

    //特殊
		mousewheelControl: true,	//滑鼠滾輪功能
		watchSlidesProgress: true,	//啟動過程3 2 1 0 -1 -2 -3	
    //★5.2.1★↓動作↓
    on: {
      //初始化
      init: function() {
				Area5x6_li.eq(this.activeIndex).addClass('cate-hover');
      },
      //輪播開始時觸發
      transitionStart: function() {
				//高亮
      		Area5x6_li.removeClass('cate-hover').eq(this.activeIndex).addClass('cate-hover');
      },
    }, //↑動作↑		

  }); 

  /*點選單時*/
  Area5x6_li.click(function(){
    var i = $(this).index();
    Area5x6.slideTo(i , 300); //移動到點擊卡
  })    
    












  $('.Area_bonus .layout_bonus_02 ul').addClass('swiper-wrapper');
  $('.Area_bonus .layout_bonus_02 ul > li').addClass('swiper-slide');
  
  var Area02 = new Swiper('.Area_bonus .layout_bonus_02 .btclass', {
    
    //★5.2.1★小圓點-白點swiper-pagination-white, 黑點swiper-pagination-black
    pagination: {
      el: '.Area_bonus .swiper-pagination',
      clickable: true, //觸擊切換
    },

    //★5.2.1★RWD(換成大於)
    breakpoints: {
      0: {
        //手機版
		slidesPerView: 2.02, //顯示幾個
		slidesPerGroup: 1, //一次切換幾個
		spaceBetween: 10, //間距
		slidesPerColumn: 1, //一次顯示幾行
		centeredSlides: true, //當前區塊居中
		slidesOffsetBefore: 0, //左邊偏移量
      },
      768: {
        //電腦版
		slidesPerView: 2.02, //顯示幾個
		slidesPerGroup: 1, //一次切換幾個
		spaceBetween: 10, //間距
		slidesPerColumn: 1, //一次顯示幾行
		centeredSlides: true, //當前區塊居中
		slidesOffsetBefore: 120, //左邊偏移量
      },
    },
		
    //★5.2.1★自動撥放
    autoplay: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, //觸擊後不再自動輪播
    },
      
    //循環
    loop: true, //無限循環
    loopAdditionalSlides: 3, //前後多複製幾個
    loopedSlides: 8, //開無限循環時，且slidesPerView:'auto'，需多設定這個(大於可視卡的數量)
		//特殊
		mousewheelControl: true,	//滑鼠滾輪功能
		watchSlidesProgress: true,	//啟動過程3 2 1 0 -1 -2 -3	
    //★5.2.1★↓動作↓
    on: {
      //輪播開始時觸發
      transitionStart: function() {
        //更新延遲讀圖
        lazyLoadInstance.update();
	       this.update();
      },  
    }, //↑動作↑ 

  }); 
  
  
    
	
