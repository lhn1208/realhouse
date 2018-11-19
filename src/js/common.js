$(document).ready(function(){
  //알림창
  warn_show();
  function warn_show(){
    $('.main_info').animate({
      top:'80px'
    },500)
  }
  setTimeout(warn_remove,3000);
  function warn_remove(){
    $('.main_info').animate({
      top:'-80px'
    },500)
  }

  //nav 
  var $nav_link=$("#nav li");
  $nav_link.click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    return false;
  });

  // $(window).scroll(function() {
  //   var sct=$(window).scrollTop();
  //   if(sct>0){
  //     $("#header").addClass("active");
  //   }else{
  //     $("#header").removeClass("active");
  //   }
  // });

  //로그인시
  var $member=$("#header .member");
  var $loginLayout=$member.find(".login_layout");
  $member.find('.name').click(function(){
    if(!$loginLayout.hasClass("active")){
      $member.find(".login_layout").addClass("active");
    }
    else{
      $loginLayout.removeClass("active");
    }
    return false;
  });

  //검색창
  var $schForm= $(".main_visual .auto_complete");
    $(".search_input").on('input',function(e){
      $schForm.addClass("active");
    });
    $('html').click(function(e){  
      if(!$(e.target).hasClass("search_input")){
        $schForm.removeClass("active");
    } 
  }); 


});