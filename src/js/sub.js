$(document).ready(function(){
    //sub_header
    var $header= $(".sub_header");
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
    var $selectArea=$(".select_area");
    var $selectTop= $selectArea.find(".select_top");
    var $selectList=$selectArea.find(".select_list");
    var $selectList_link=$selectList.find("a");
    $selectTop.click(function(){
        $(this).parents(".select_area").addClass("open");
        return false;
    })
    $selectList_link.click(function(){
        var $btnVal=$(this).text();
        $(this).parent().siblings($selectTop).text($btnVal);
        $(this).parent().siblings($selectTop).css("color","#464646")
        $(this).parents(".select_area").removeClass("open");
        return false;
    });
    $('html').click(function(e){  
        if(!$(e.target).hasClass("open")){
            $selectArea.removeClass("open");
         } 
    });
    //button
    var $btn=$(".btn_type1").not(".new_request .check");
    $btn.click(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on")
        }else{
            $(this).addClass("on")
        }
    })
    //중복선택 불가
    var $req_btn=$(".new_request .check")
    $req_btn.click(function(){
        if($req_btn.hasClass("on")){
            $(this).removeClass("on")
        }else{
            $(this).addClass("on")
        }
    });
});