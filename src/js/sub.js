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
        selTop_parent=$(this).parent(".select_area");
        if(selTop_parent.hasClass("open")){
            selTop_parent.removeClass("open");
        }else{
            $(this).parent().addClass("open");
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
    $('html').click(function(e){  
        if(!$(e.target).hasClass("open")){
            $selectArea.removeClass("open");
         } 
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
});