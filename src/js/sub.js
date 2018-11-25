$(document).ready(function(){
    //select
    var $selectArea=$(".select_area");
    var $selectTop= $selectArea.find(".select_top");
    var $selectList=$selectArea.find(".select_list");
    var $selectList_link=$selectList.find("a");
    $selectTop.click(function(){
        $(this).parents(".select_area").addClass("active");
    })
    $selectList_link.click(function(){
        var $btnVal=$(this).text();
        $(this).parent().siblings($selectTop).text($btnVal);
        $(this).parent().siblings($selectTop).css("color","#464646")
        $(this).parents(".select_area").removeClass("active");
    });

    var $btn=$(".btn_type1");
    $btn.click(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on")
        }else{
            $(this).addClass("on")
        }
    })
});