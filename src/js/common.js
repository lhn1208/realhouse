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

  var $header= $("#header");
  $(window).scroll(function() {
    var sct=$(window).scrollTop();
    if(sct>0){ 
      $header.addClass("active");
    }else{
      $header.removeClass("active");
    }
  });

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
  
  //로그인 및 회원가입 클릭시 레이어 팝업
  var $layerLogin=$(".layer_member");
  var $cover= $(".main_cover,.sub_cover");
  var $body=$('body');
  $("#member_login").click(function(){
    $cover.addClass("active");
    $layerLogin.addClass("active");
    $body.addClass("scroll_hidden");
  })
  //layer
  $layerLogin.find(".member_close").click(function(){
    $cover.removeClass("active");
    $layerLogin.removeClass("active");
    $body.removeClass("scroll_hidden");	
	 	return false;
  })
  var layerH=$(".layer_member").outerHeight();
  var top = Math.ceil((window.screen.height - layerH)/2)-70;
  $(".layer_member").css("top",top+"px");

  //placehoder
  $("input").on('input',function(e){
    $(this).siblings(".placeholder").css("display","none")
  });
//placehoder
  // if($("input[type='text']").val()!=""){
  //   console.log($("input[type='text']").val());
  //   $(this).siblings(".placeholder").addClass("aaaaaaaa");
  // }
  // $("input[type='text']").on('input',function(e){
  //   $(this).siblings(".placeholder").css("display","none")
  //   if($(this).val()==""){
  //     $(this).siblings(".placeholder").css("display","block")
  //   }
  // });


  //로그인 email,휴대폰번호 selectbox
  var $selectArea=$(".member_select_area");
  var $selectTop= $selectArea.find(".member_select_top");
  var $selectList= $selectArea.find(".member_select_list");
  var $email=$(".email_address");
  var $selectList_link=$selectList.find("a");
  $selectTop.click(function(e){
    $(this).parents(".member_select_area").addClass("open");
    return false;
  })
  
  $selectList_link.click(function(){
    var $inputEmail=$(".input_email");
    var $btnVal=$(this).text();
    var selectEmail_id=$(this).parents(".member_select_area").attr("id");
    var link_val= $(this).attr('value');
    //이메일 직접입력
    if(link_val=="direct"){
        $inputEmail.val("");
        $email.removeAttr("style");
        $inputEmail.removeAttr("style");
    }
    //이메일 직접입력이 아닐때
    else{
      //selectbox가 이메일일때만 실행
      if(selectEmail_id == "select_email"){
        $inputEmail.val("");
        $email.text("@ "+$btnVal);
      }else{
        //이메일이 아닐때
        $(this).parent().siblings($selectTop).text($btnVal);
      }
      $email.css("display","block");
      $inputEmail.css("padding-right","148px")
    }
    $(this).parents(".member_select_area").removeClass("open");
    return false;
  });
  $('html').click(function(e){  
    if(!$(e.target).hasClass("open")){
        $selectArea.removeClass("open");
      } 
  });
  

});