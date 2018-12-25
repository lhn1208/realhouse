$(document).ready(function(){
    //sub_header
    var $header= $(".header_section, .header_shadow");
    $(window).scroll(function() {
        var sct=$(window).scrollTop();
        if(sct>0){ 
            $header.addClass("active");
        }else{
            $header.removeClass("active");
        }
    });
    $(".offer_detail_wrap").scroll(function() {
        var sct=$(".offer_detail_wrap").scrollTop();
        if(sct>0){ 
            $header.addClass("active");
        }else{
            $header.removeClass("active");
        }
    });
    //select
    var $selectArea=$(".select_area"),
        $selectTop= $selectArea.find(".select_top"),
        $selectList=$selectArea.find(".select_list"),
        $selectList_link=$selectList.find("a"),
        selTop_parent;

    $selectTop.click(function(){
        $(".tooltip_box").removeClass("open");
        selTop_parent=$(this).parent(".select_area");
        if($(this).parents('.select_area').hasClass("disabled")){
            return false;
        }else{
            //selectTop클릭시 선택창 닫힘
            if(selTop_parent.hasClass("open")){
                selTop_parent.removeClass("open");
            }else{
                $selectArea.removeClass("open");
                $(this).parent().addClass("open");
            }
        }
        return false;
    })

    $selectList_link.click(function(){
        var $btnVal=$(this).text();
        $(this).parent().siblings($selectTop).text($btnVal);
        $(this).parent().siblings($selectTop).css("color","#373737")
        selTop_parent.removeClass("open");
        return false;
    });
   
    //button
    var $btn=$(".click_ev .btn_type1");
    $btn.click(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on")
        }else{
            $(this).addClass("on")
        }
    })

    var $popTarget=$(".visit");
    $popTarget.click(function(){
        $cover.addClass("active");
        $layer.addClass("active");
             return false;
    })
    //layer
    var $layer=$(".layer");
    var $cover= $(".sub_cover");
    var $body=$('body');
    $layer.find(".close").click(function(){
        $cover.removeClass("active");
        $layer.removeClass("active");
             return false;
      })
    var layerH= $layer.outerHeight();
    var top = Math.ceil((window.screen.height - layerH)/2)-70;
     $layer.css("top",top+"px");

     //매물header
     var $offer_header=$(".all_offer.pick_offer .header");
     var $recomm_header=$(".all_offer.pick_offer .header:first-of-type");
     var $favor_header=$(".all_offer.pick_offer .header.h_favor");
     if($offer_header.length){
        var headerT=$recomm_header.offset().top;//추천매물헤더
        var headerT_favor=$favor_header.offset().top -70;//관심매물헤더
        $(".all_offer.pick_offer .offer_inner").scroll(function(){
            var sct=$(".all_offer.pick_offer .offer_inner").scrollTop();
            if(headerT < sct && headerT_favor>sct){
                $recomm_header.css("position","fixed");
                $favor_header.removeAttr("style");
                $(".pick_offer .items_area:first-of-type .items_list").css("padding-top","60px")
            }else if(headerT_favor<=sct){
                $favor_header.css({"position":"fixed","top":"69px"});
                $recomm_header.css("position","relative");
            }
            if(sct==0){
                $recomm_header.css("position","relative");
                $(".pick_offer .items_area:first-of-type .items_list").removeAttr("style");
            }
        })
    }
    //도움말
    $(".help_ico").click(function(){
        $(".select_area").removeClass("open");
        var $tooltipBox= $(this).next(".tooltip_box");
        if($tooltipBox.hasClass("open")){
            $tooltipBox.removeClass("open");
        }else{
            $tooltipBox.addClass("open");
        }
        return false;
    })
    
    $('html').click(function(e){  
        if(!$(e.target).hasClass("open")){
            $selectArea.removeClass("open");
            $(".tooltip_box").removeClass("open");
         } 
    });

    //1대1문의,일정관리 슬라이드
    var targetArea= $(".request_area,.sch_area");
    var speed=300;
    targetArea.hide();
    $(".custom_cont li a").click(function(){
        var $reqArea=$(this).next(targetArea);
        $reqArea.slideToggle(speed);
        $(".custom_cont li a").not(this).next(".request_area").slideUp(500);
        return false;
    });
    //요청내역 슬라이드
    $(".detail_view .link_style").click(function() {
        var $DetailBox=$(this).parent().next(".detail_box");
        $DetailBox.slideToggle(speed);
        return false;
    });
    $(".agent_box .btn_close").click(function(){
        $(this).parent().slideUp(speed);
        return false;
    })

    //추천매물 슬라이드
    var $itemsArea= $(".recomm_offer .slide_box");
    $itemsArea.slideUp();
    $(".recomm_offer .header").click(function(){
        var items=$(this).next(".slide_box");
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            items.slideUp(speed);
        }else{
            $(this).addClass("active");
            items.slideDown(speed);
        }
    })
    //매물높이 계산
    $itemsArea.each(function(i,j){
        itemH=$(this).find(".items_list").outerHeight();
        $(this).find(".items_box").css("height",itemH);
        if(itemH>550){
            $(this).find(".items_area").css("height","100%");
        }
    })
    //브라우저 체크 ie아닐때
    var agent = navigator.userAgent.toLowerCase();
    if(! ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) ){
        $(".all_offer.recomm_offer .slide_box:nth-of-type(1) .box_inner").css("bottom","120px");
        $(".all_offer.recomm_offer .slide_box:nth-of-type(2) .box_inner").css("bottom","180px");
        $(".all_offer.recomm_offer .slide_box:nth-of-type(3) .box_inner").css("bottom","430px");
        $(".all_offer.recomm_offer .slide_box:nth-of-type(4) .box_inner").css("bottom","120px");
    }

    //평점
        var $grade_list=$('.star_grade li');
        /* 1. Visualizing things on Hover - See next part for action on click */
         $grade_list.on('mouseover', function(){
          var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
         
          // Now highlight all the stars that's not after the current hovered star
          $(this).parent().children('li.star').each(function(e){
            if (e < onStar) {
              $(this).addClass('hover');
            }
            else {
              $(this).removeClass('hover');
            }
          });
          
        }).on('mouseout', function(){
          $(this).parent().children('li.star').each(function(e){
            $(this).removeClass('hover');
          });
        });
        
        
        /* 2. Action to perform on click */
         $grade_list.on('click', function(){
          var onStar = parseInt($(this).data('value'), 10); // The star currently selected
          var stars = $(this).parent().children('li.star');
          
          for (i = 0; i < stars.length; i++) {
            $(stars[i]).removeClass('selected');
          }
          
          for (i = 0; i < onStar; i++) {
            $(stars[i]).addClass('selected');
          }
          
          // JUST RESPONSE (Not needed)
          var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
          var msg = "";
          if (ratingValue > 1) {
              msg = "Thanks! You rated this " + ratingValue + " stars.";
          }
          else {
              msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
          }
        });
        
        
      
      
    
});
