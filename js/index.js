$(document).ready(function(){

  //처음위치
  $("#moheader").css({"right":"-30%"});

  //햄버거메뉴 클릭시 나오는 사이드 바....
  qchk=true;
  $(".trigger").click(function(){

    $(this).toggleClass("active");

    if(qchk){
      $(this).stop().animate({right:"30%"},500);
      $("#moheader").stop().animate({right:"0px"},500);
      qchk=false;
    }else{
      $(this).stop().animate({right:"0px"},500);
      $("#moheader").stop().animate({right:"-30%"},500);
      qchk=true;
    }


  });

});