# Javascript & Jquery
<h1>Jquery 사용법</h1>
<h3>- JQUERY 주요 함수 -</h3>
1. 이벤트 처리<br>
- click, mouseover, mouseout ...<br>
2. DOM 객체 처리 함수<br>
- html() : html 태그를 포함하여 텍스트를 설정하는 함수 (js: innerHTML)<br>
- text() : html 태그를 무시하고 텍스트만 설정하는 함수 (js: innerTEXT)<br>
- css() : css 설정을 하는 함수<br>
- attr() : 속성을 설정하는 함수<br>
3. 애니메이션 효과 함수<br>
- show(), hide(), toggle() ...<br>
   <br>
<h3>- JQUERY 기법 -</h3>
<pre>
1. css 함수 - 체이닝(chainning) 기법
$("p").css("backgroundColor", "yellow").css("width", "150").css("height", "30");

2. css 함수안에서 속성과 값을 나열
$("p").css({
    backgroundColor:"pink",
    width:"150",
    height:"30",
});</pre>

<h3>- JQUERY 예제 1 -</h3>
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
});</pre>
<pre>
// P태그에 마우스를 올렸을 때 -> P태그에 Class 추가
$("p").on("mouseenter", function() {
   $(this).addClass("current");
});

// P태그에 마우스를 뗄 때 -> P태그에 Class 제거
$("p").on("mouseleave", function() {
   $(this).removeClass("current");
});


</pre>

