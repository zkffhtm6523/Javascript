<style>
 h1{text-align: center;}
</style>
<h1 id = "top">Jquery 사용법</h1>
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
- attr() : 속성을 설정하는 함수(속성값이나 정보를 조회, 최초에만 설정됨)
- prop() : element가 가지는 실제적인 상태(활성화 상태, 체크 상태 등)

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

// 기타 메소드
var idxNum = $.inArray("부산", arr1); //inArray() - 데이터와 일치하는 인덱스를 반환
var okArray1 = $.isArray(arr1); // isArray() - 데이터가 배열이면 true, 그렇지 않으면 false
$.merge(arr2, arr1); // merge() arr2와 arr1을 합쳐서 arr2에 저장
var idxNum2 = $("li").index($("#list3")) // index() - 지정 요소를 찾아 인덱스를 반환
</pre>

<h3>- JQUERY 예제(속성 선택/스타일) -</h3>
<pre>
//속성 선택
$(document).ready(function() {
   // 1. 모든 속성 선택
   $("#wrap a[target]").css("color","#f00");

   // 2. 속성 중에서 특정값으로 시작하는 요소만 선택
   $("#wrap a[href^='https']").css("fontStyle", "italic");

   // 3. 속성 중에서 특정값으로 끝나는 요소만 선택
   $("#wrap a[href$='.net']").css("fontSize", "1.5em");

   // 4. 속성 중에서 특정값을 포함하는 요소만 선택
   $("#wrap a[href*='google'").css("fontWeight", "bold");

   // 5. 요소 중에서 특정 속성을 포함하는 요소만 선택
   $("#member_f :text").css("backgroundColor", "yellow");
   $("#member_f :password").css("backgroundColor", "pink");
});

//스타일 주는 법
$("#wrap p:hidden").css({"display":"block", "background":"#ff0",}); //:hidden

var z1 = $("#zone1 :selected").val();
$("#result1").text("옵션은 " + z1 + "을 선택하였습니다."); //:selected

var z2 = $("#zone2 :checked").val();
$("#result2").text("취미는 " + z2 + "를 선택하였습니다."); //:checked

// 1. contains() -내용을 포함하는 요소 선택
$("#inner_1 p:contains(내용1)").css("background", "#ff0");

// 2. has() - 해당요소를 포함하는 요소 선택
$("#inner_1 p:has(strong)").css("background", "#0ff");

// 3. contents() - 선택요소의 하위요소를 선택
$("#outer_wrap").contents().css("border", "1px dashed #00f");

// 4. not() - 선택요소의에서 첫번째가 아닌것을 선택
$("#inner_2 p").not(":first").css("background", "#0f0");

// 5. end() - 선택되기 이전의 선택자로 적용이 됨.
$("#inner_2 p").eq(2).css("background", "#f00"); // 2번 인덱스
$("#inner_2 p").eq(2).end().css("background", "#f00"); 

// 6. find() - 하위 요소 중에서 찾는 요소를 선택
$("#inner_3").find(".txt1").css("background","pink");

// 7. filter() - 선택한 요소 중에서 찾는 요소를 선택
$("#inner_3 p").filter(".txt2").css("background", "lime");

// 8. filter(function()) - 선택한 요소 중에서 조건에 맞는 요소만 선택
$("#inner_4 p").filter(function(idx, obj) {
    console.log(idx);
    return idx%2 == 0; // 짝수번호
}).css("background", "cyan");

// width() : 내용의 너비
var w1 = $("#p1").width();
console.log("p1의 width: " + w1);

// innerWidth() : 내용+패딩의 너비
var w2 = $("#p1").innerWidth();
console.log("p1의 innerWidth: " + w2);

// outerWidth() : 내용+패딩+테두리의 너비
var w3 = $("#p1").outerWidth();
console.log("p1의 outerWidth: " + w3);

$("#p2").width(200).height(25); // 설정(변경)
</pre>

<h3>- JQUERY 예제(메소드) -</h3>
<pre>
$(document).ready(function() {
// html() - 태그를 읽고, 쓰는 메소드
var result_1 = $("#sec_1").html(); // 읽어올때
console.log(result_1);
$("#sec_1 p").html("<a href='#'>Text1</a>") // 설정할때

// text() - 내용을 읽고, 쓰는 메소드
var result_2 = $("#sec_2").text() // 읽어올때
console.log(result_2);
$("#sec_2 h2").text("text()");    // 설정할때

// attr() - 속성 
var srcVal = $("#sec_1 img").attr("src"); // 속성 읽기
$("#sec_1 img").attr({ // 속성 설정
   "width":"200",
   //"src":srcVal.replace("math_img_1.jpg","math_img_2.jpg"),
   "src":"images/math_img_2.jpg",
   "alt":"바위"
}).removeAttr("border");

$("#p1").addClass("aqua"); // 클래스 추가
$("#p2").removeClass("red"); // 클래스 삭제
$("#p3").toggleClass("green"); // 해당 클래스가 없으면 생성, 있으면 삭제
$("#p4").toggleClass("green"); // 해당 클래스가 없으면 생성, 있으면 삭제

// val() : value()와 같음
$("#user_id").val("jquery") //userID의 value 받아오기

// prop() : attr()과 유사함
var result_1 = $("#chk1").prop("checked");

// prepend() : 선택 태그 안의 맨 앞에 추가
$("list").prepend("<div></div>");

// append() : 선택 태그 안의 맨 뒤에 추가
$("list").append("<div></div>");

// after() : 뒤에 붙임
$("#wrap p:eq(2)").after("<p></p>").css("color", "red");

// before() : 앞에 붙임
$("#wrap p:eq(1)").before("<p></p>").css("background", "yellow");

// clone() : 복제
var copyObj = $(".box1").children().clone(); 

// remove() : 삭제
$(".box2").remove();

// empty() : 하위 태그 삭제
$(".box3").empty();

// replaceWith() : 태그를 바꿀 수 있음
//$("h2").replaceWith("<h3>바뀐 제목</h3>");

// wrap 관련 메소드
$("strong").unwrap(); // 부모 태그 삭제

$(".ct1").wrap("<div>") //부모 태그 만들어줌
$(".ct2").wrapAll("<div>");

$("li").wrapInner("<h3>"); // 태그 안의 값에 태그를 만들어줌
</pre>
<a href = "#top"><button>위로 가기</button></a>
