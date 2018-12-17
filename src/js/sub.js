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
    //selectTop클릭시 선택창 닫힘
    $selectTop.click(function(){
        $(".tooltip_box").removeClass("open");
        if($(this).parents('.select_area').hasClass("disabled")){
            return false;
        }else{
            selTop_parent=$(this).parent(".select_area");
            $(".select_area").removeClass("open");

            if(selTop_parent.hasClass("open")){
                selTop_parent.removeClass("open");
            }else{
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
     var $offer_header=$(".all_offer.type .header");
     var $recomm_header=$(".all_offer.type .header:first-of-type");
     var $favor_header=$(".all_offer.type .header.h_favor");
     if($offer_header.length){
        var headerT=$recomm_header.offset().top;
        var headerT_favor=$favor_header.offset().top -70;
        $(".all_offer.type .offer_inner").scroll(function(){
            var sct=$(".all_offer.type .offer_inner").scrollTop();
            if(headerT <= sct && headerT_favor>sct){
                $recomm_header.css("position","fixed");
                $favor_header.removeAttr("style");
            }else if(headerT_favor<=sct){
                $favor_header.css({"position":"fixed","top":"69px"});
                $recomm_header.css("position","relative");
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


    //1대1문의
    $(".request_area").hide();
    $(".custom_cont li a").click(function(){
        var $reqArea=$(this).next(".request_area");
        $reqArea.slideToggle(300);
        $(".custom_cont li a").not(this).next(".request_area").slideUp(500);
        return false;
    });


    $(".detail_view .link_style").click(function() {
        var $DetailBox=$(this).parent().next(".detail_box");
        $DetailBox.slideToggle(300);
        return false;
    });
    $(".agent_box .btn_close").click(function(){
        $(this).parent().slideUp(300);
        return false;
    })
   
});