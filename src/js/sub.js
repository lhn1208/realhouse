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
    var $selectArea=$(".select_area");
    var $selectTop= $selectArea.find(".select_top");
    var $selectList=$selectArea.find(".select_list");
    var $selectList_link=$selectList.find("a");
    var selTop_parent;
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
    //방문 시간선택
    var $visitArea=$(".select_visit_area");
    var $visitDay= $visitArea.find(".select_area .select_top");
    var $selecTime=$visitArea.find(".select_visit .select_top");
    var selTop_parent;
    $selecTime.click(function(){
        selTop_parent=$(this).parent(".select_visit");
        if(selTop_parent.hasClass("time_open")){
            selTop_parent.removeClass("time_open");
        }else{
            selTop_parent.addClass("time_open");
        }

        //시간선택 클릭시 방문일 선택창 나타남
       // $(".select_area").addClass("open");
        //$visitArea.find(".select_area").addClass("open");
        // return false;
    })
    //방문일선택 클릭시 시간선택이 열려있을경우 시간선택창 닫힘
    // $visitDay.click(function(){
    //     if($(".select_visit").hasClass("time_open")){
    //         $(".select_visit").removeClass("time_open");
    //     }
    //     return false;
    // })

    //button
    var $btn=$(".click_ev .btn_type1");
    $btn.click(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on")
        }else{
            $(this).addClass("on")
        }
    })
    //매물검색
    
});