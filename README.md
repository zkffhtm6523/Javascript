<h1>Jquery 사용법</h1>
<h3>- JQUERY 주요 함수 -</h3>

1. 이벤트 처리
 - on/off 실행<br>
  :on(이벤트명, 함수명) - 이벤트에 대한 함수를 따로 작성하여 사용하는 방법(이 함수를 다른 곳에서도 사용 가능, 코드가 길어짐)<br>
  :on(이벤트명, 익명함수) - 이벤트에 대한 함수를 익명함수로 바로 작성하는 방법(코드가 간결해짐, 익명함수를 해당 이벤트 전용 사용)
 - 즉시 실행 : click(), dbclick(), hover(), mouseenter(), mouseleave(), mouseover(), keypress(), keydown(), keyup()
 
2. DOM 객체 처리 함수
- html() : html 태그를 포함하여 텍스트를 설정하는 함수 (js: innerHTML)
- text() : html 태그를 무시하고 텍스트만 설정하는 함수 (js: innerTEXT)
- css() : css 설정을 하는 함수
- attr() : 속성을 설정하는 함수
<br>
3. 애니메이션 효과 함수
- show(), hide(), toggle() ...<br>
<br>
4. 배열 : $(배열).each() ,$.each() //배열에 접근해서 순차적으로 인덱스와 값의 정보를 얻어올 때 사용하는 메소드

<h3>- JQUERY 기법 -</h3>

1. css 함수 - 체이닝(chainning) 기법
$("p").css("backgroundColor", "yellow").css("width", "150").css("height", "30");

2. css 함수안에서 속성과 값을 나열
$("p").css({
    backgroundColor:"pink",
    width:"150",
    height:"30",
});

<h3>- JQUERY 예제(선택자/스타일) -</h3>
<pre>
$(function() {
   $("p").css("border", "4px solid red"); // 태그(요소)
   $("#gnb").css("border", "4px solid orange"); // 아이디
   $(".logo").css("border", "4px solid yellow"); // 클래스
   //$("#gnb ul li").css("border", "4px solid green"); // 모든 자식 li
   $("#gnb > ul > li").css("border", "4px solid green"); // ul의 바로 밑의 자식 li
   $("#gnb ul").css("border", "4px solid blue"); // #gnb 안의 모든 ul
   //$("#gnb > ul").css("border", "4px solid blue"); // #gnb 의 첫번째 자식 ul
   $("#visual + #content").css("border", "4px solid navy"); // #visual 바로 인접 형제인 #content
   $("#visual ~ #footer").css("border", "4px solid purple"); // #visual의 다음 형제인 #footer
   $("div.util").css("border", "4px solid pink") // div 안의 .util
   $(".left, .right, #banner").css("border", "4px solid gray") // 개별 요소
});
// P태그에 마우스를 올렸을 때 -> P태그에 Class 추가
$("p").on("mouseenter", function() {
   $(this).addClass("current");
});

// P태그에 마우스를 뗄 때 -> P태그에 Class 제거
$("p").on("mouseleave", function() {
   $(this).removeClass("current");
});

$(document).ready(function() {
   //아이디 태그 클릭 -> title 태그 안에 innerHTML 해주기
   $("#b1").click(function() {
       $("#title").html("JQuery 이벤트 함수 사용법");
   });
   //아이디 선택자-> click 시 style 적용
   $("#b2").click(function() {
       $("#title").css({
           "backgroundColor":"purple",
           "color":"white",
           "padding":"5px",
       });
   });
});

//마우스 올렸을 때 -> 아이디를 포함하는 태그에 속성 부여
$("#logo").mouseover(function(){
   $("#logo").attr("src", "images/icon1.png");
});

//웹브라우저 회전 이동
$("#b1").click(function() {
    var obj1 = $("img:last");
    //img 첫 번째 자식 복사 후 맨 마지막 삽입
    $("img:first-child").clone().insertAfter(obj1);
    //img 첫 번째 자식 제거
    $("img:first-child").remove();
});

$(function() {
   // 부모 요소 선택자
   $("#list_1").parent().css("border", "2px dashed red");
   // 하위 요소 선택자
   $("#wrap h1").css({backgroundColor:"yellow", border:"2px dashed red",});
   // 자식 요소 선택자
   $("#wrap > h1").css({backgroundColor:"yellow", border:"2px dashed red",});
});

//범위 제한 전체 형제 요소 선택자
$(".txt3").prevUntil(".title").css(style_1); //txt3에서 title 앞까지
$(".txt3").nextUntil(".txt6").css(style_2); // txt3에서 txt6 앞까지

//이전 태그 선택
$(".txt").prev().css(style_1); // 내용1, 이전

//다음 태그 선택
$(".txt").next().css(style_2); // 내용3, 다음
$(".txt + p").css(style_2);     // 내용3, 다음

//부모 선택
$(".txt1").parents().css("border", "2px dashed #00f"); // 모든 부모
$(".txt1").parents("div").css("border", "2px dashed #00f"); // 특정 부모
$(".txt1").closest("div").css("border", "2px dashed red"); // 가장 가까운 상위 요소

//first/last 선택자
$("#menu li:first").css("background", "yellow");
$("#menu li:last").css("background", "cyan");

//first/last 선택자 - 함수, first()/last() 만 가능
$("#menu li").first().css("background", "yellow");
$("#menu li").last().css("background", "cyan");

//even/odd 선택자 - 인덱스는 0번부터 시작
$("#menu li:even").css("background", "yellow");
$("#menu li:odd").css("background", "cyan");

//eq(), lt(), gt() 선택자 - 인덱스는 0번부터 시작
$("#menu li:eq(2)").css("background", "pink"); // 2번 인덱스 선택
$("#menu li:lt(2)").css("background", "pink"); // 2번보다 작은 인덱스 선택
$("#menu li:gt(5)").css("background", "pink"); // 5번보다 큰 인덱스 선택

//first-of-type / last-of-type 선택자
//first/last : li 중에서 첫번째, 마지막 요소에 적용
$("li:first").css("color", "red");
$("li:last").css("color", "blue");

//first-of-type/last-of-type : li의 그룹 중에서 첫번째, 마지막 요소에 적용
$("li:first-of-type").css("border", "3px solid orange");
$("li:last-of-type").css("border", "3px solid pink");

//nth-child(2), nth-child(2n), nth-last-of-type(3)
$("li:nth-child(5)").css("background", "pink"); // 각 그룹에서 5번 인덱스 선택
$("li:nth-child(3n)").css("border", "3px solid green"); // 3의 배수, 순서상 3번째
$("li:nth-last-of-type(3)").css("background", "yellow"); // 각 그룹의 마지막에서 3번째 선택

//only-child : 부모 요소에게 자식 요소가 하나뿐인 것을 선택
$("li:only-child").css("border", "4px solid red"); //여러 li중에서 ul안에 li가 한 개만 있는 것 선택

//slice(a, b) : 함수로만 사용
$("li").slice(3,5).css("background", "pink"); // 0번부터 시작, 3번부터 5번 앞까지 선택 (5번은 선택 안됨)
</pre>

<h3>- JQUERY 예제(객체/배열) -</h3>
<pre>
// 1. 배열(문자열)
var city = ['서울', '대구', '대전', '부산'];

$(city).each(function(index, value) {
  document.write(index + " : " + value + "<br>");
});

// 2. 객체
var subject = { subject:"html", grade:1, score:85};
$.each(subject, function(key, value){
    document.write(key + " : " + value + "<br>");
});

// 3. 배열 - 객체의 배열
var obj = [{"area":"서울"},{"area":"부산"},{"area":"전주"}];
$(obj).each(function(index, value) {
    console.log(index + " : ", value);
})

// 4. 태그
$.each($("#menu2 li"), function(index, value) {
   console.log(index + " : ", value);
}); 

// map 사용 - 배열을 통해서 반환된 객체를 저장
var city = ['서울', '대구', '대전', '부산'];
var newCity = $.map(city, function(value, index) {
    if(index < 2) {
        return value;
    }
});
document.write(newCity + "<br>");

// grep 사용 - 배열을 통해서 true로 반환된 객체를 저장
var newCity2 = $.grep(city, function(value, index) {
    if(index < 2) {
        return true;
    } else {
        return false;
    }
});
document.write(newCity2 + "<br>");

// 객체 배열(map, grep)
var obj = [
    {"area":"서울", "name":"무대리"},
    {"area":"부산", "name":"홍과장"},
    {"area":"대전", "name":"박사장"},
    {"area":"서울", "name":"빅마마"},
];
// 객체 배열 : map
var newObj1 = $.map(obj, function(value, index) {
    if(value.area == "서울") {
        return value;
    }
});
// 객체 배열 : grep
var newObj2 = $.grep(obj, function(value, index) {
    if(value.area == "서울") {
        return true;
    }
});

</pre>
