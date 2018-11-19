$(document).ready(function(){
    //select
    var $selectArea=$(".select_area");
    var $cateTop= $(".cate_top");
    var $cateList=$(".cate_list");
    var $cateList_btn=$cateList.find("button");
    $cateTop.click(function(){
        $selectArea.addClass("active");
    })
    $cateList_btn.click(function(){
        var $btnVal=$(this).text();
        $cateTop.text($btnVal);
        $selectArea.removeClass("active");
    })
});