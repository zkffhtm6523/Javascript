
var start;
function setAnniDay(){
    var anni_day = document.querySelector('#anni_day').value;

    if(anni_day == 0){
       alert('기념일을 입력하세요.') ;
    } else{
        var firstDate = new Date(anni_day); //설정 날짜,2019년 12월 25일 설정
        var now = new Date(); //현재 날짜와 시간
        
        start = firstDate.getTime(); //밀리세컨드를 구함. 1000분의 1초
        console.log(start);
        var end = now.getTime(); //오늘의 밀리세컨드
        console.log(end);
        var pass = (end - start); //오늘 - 기념일 -> 경과 시간의 밀리세컨드
        console.log(pass);
        var passDay = Math.floor(pass/1000/60/60/24);
        console.log(passDay);
        document.querySelector('#passDay').innerHTML = passDay;
        calcDay(100);
        calcDay(200);
        calcDay(365);
        calcDay(500);
        calcDay(730);
        calcDay(1000);
    }

}

function calcDay(days){
    //전달받은 일을 밀리세컨드로 바꿔야함, days(일)를 anni(밀리세컨드)로 변경
    var days2 = days*24*60*60*1000; //일을 밀리세컨드로 변경
    var passDay2 = start + days2;

    var someDate = new Date(passDay2);
    
    var year = someDate.getFullYear();
    var month = someDate.getMonth()+1;
    var day = someDate.getDate();
    console.log(year+"년 "+month+"월 "+day+"일");

    //월을 2자리로 만듬
    var month2 = "";
    if(month < 10){
        month2 = "0"+ month;
    } else{
        month2 = month;
    }

    //일을 2자리로 만듬
    var day2 = "";
    if(day < 10){
        day2 = "0"+day;
    }else{
        day2 = day;
    }

    document.querySelector('#date'+days).innerHTML = year+"년 "+month2+"월 "+day2+"일";
}