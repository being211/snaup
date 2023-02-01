$(function(){
  $("#notice>div>a").click(function(){
    $("#notice>div").removeClass("active");
    $(this).parent().addClass("active");
    /*처음 줄을 적지 않으면 active라는 클래스가 동시에 두개이상 존재할 수 있으므로, 모든 active클래스를 지운 다음에 클릭한 것의 부모에게 active를 추가해야 한번에 한개의 active만 존재한다.*/
  });
});