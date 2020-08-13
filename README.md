# Javascript & Jquery
<h1>Jquery 사용법</h1>
<h3>JQUERY 주요 함수<h3>
1. 이벤트 처리
- click, mouseover, mouseout ...
2. DOM 객체 처리 함수
- html() : html 태그를 포함하여 텍스트를 설정하는 함수 (js: innerHTML)
- text() : html 태그를 무시하고 텍스트만 설정하는 함수 (js: innerTEXT)
- css() : css 설정을 하는 함수
- attr() : 속성을 설정하는 함수
3. 애니메이션 효과 함수
- show(), hide(), toggle() ...
   
<h3>JQUERY 기법<h3> 
1. css 함수 - 체이닝(chainning) 기법<br>
$("p").css("backgroundColor", "yellow").css("width", "150").css("height", "30");<br>
<br>
2. css 함수안에서 속성과 값을 나열<br>
$("p").css({<br>
    backgroundColor:"pink",<br>
    width:"150",<br>
    height:"30",<br>
});<br>
