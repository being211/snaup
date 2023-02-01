<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서브메뉴만들기</title>
    <link rel="shortcut icon" type="image/x-icon" href="./images/plogo1.png" />
    <link rel="stylesheet" href="./indexstyle.css">
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        ul {
            list-style: none;
        }

        body {
            background-color: #000;
            font-family: "맑은고딕";
            font-size: 14px;
            line-height: 24px;
            color: #222;
        }

        /*1. 주된 메뉴를 먼저 만들어 '자식요소선택자'를 활용해 스타일을 꾸며준다!*/
        #header {width: 100%;
            background-color: rgb(0, 0, 0);
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;
            align-items: center;
        }

        .header_inner {
            width: 1320px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
    
        }

        .header_inner h1{margin-top: 20px;}

        #gnb {
            display: flex;
        }

        #gnb>li {
            padding: 30px 60px;
            font-size: 20px;
            font-weight: bold;
            color: #fffff0;
        }

        /*2. 구조를 참조하여, 서브메뉴를 올바른 위치에 넣어 준다.*/
        /*3. 서브 전체를 포지션 absolute시켜서, 다른 태그 위에 올라 올 수 있도록 한다. 여기서 포지션의 기준은! #gnb>li에 잡는다.*/
        #gnb>li {
            position: relative;
        }

        .sub {
            position: absolute;
            left: 0;
            top: 100%;
            /*top을 100%로 잡아주면, 기준이 된 li의 높이 바로 밑에 위치하게 된다.*/
            z-index: 10;
            width: 100%;
            /*포지션 absolute를 주어 한줄전체 차지하는 속성이 사라졌으므로, 알맞은 width를 지정해 준다.*/
        }

        /*4. 서브 완료 시 모습을 보고, li등에 나머지 스타일을 준다. 여기서 주된메뉴에 font-weight나 혹은 font-size, color등을 썼다면 꼭 덮어 쓸 수 있도록 설정한다. 글씨관련된 속성만 넘어온 이유는 해당 속성들이 상속되기 때문이다.*/
        .sub>li>a:hover {
            background-color: rgb(110, 8, 17);
            transition: all 0.5s;
        }

        .sub>li>a {
            display: block;
            font-size: 14px;
            font-weight: normal;
            color: rgb(255, 255, 255);
            text-align: center;
            padding: 10px 0;

            background-color: rgb(0, 0, 0);
        }

        /*5. css로 서브의 모양을 다 만들었다면, 처음에 들어올때는 안보이게 만든다.*/
        .sub {
            display: none;
        }

        /*6. #gnb>li에 호버했을때, 그 밑에 있는 .sub가 보이게 한다.
    여기서, 5번 과정에서 sub를 안보이게 만든 속성을 전부 보이게 만들수 있는 방법으로 바꾼다.
    */
        #gnb>li:hover>.sub {
            display: block;
            /*.sub의 태그인 ul은 원래 block속성이므로 원래 속성으로 바꿔주면 다시 보이게 된다.*/
        }

        .qna h2 {
            color: darkred;
            font-family: '맑은고딕'
                , 'Arial Narrow', Arial, sans-serif;
        }


        @keyframes up_and_down {
            from {
                transform: translateY(30px);
            }

            to {
                transform: translateY(50px);
            }}

            @keyframes up_and_down1 {
            from {
                transform: translateY(-150);
            }

            to {
                transform: translateY(-100px);
            }}

            @keyframes up_and_down2 {
            from {
                transform: translateY(-50px);
            }

            to {
                transform: translateY(-20px);
            }}


        .cup {
            animation: up_and_down2 0.8s linear infinite alternate; padding-top: -50px;
        }

        .pcup {
            animation: up_and_down 1.5s linear infinite alternate; margin-right: 100px; margin-left: -50px; width: 130px; height: 650px;
        }

         .sale1{
            animation: up_and_down1 1s linear infinite alternate; width: 276px; height: 276px;
        margin-left: 20px; margin-top: 200px;}

        .sale3{
            animation: up_and_down 1s linear infinite alternate; width: 276px; height: 276px;
        margin-left: 20px; }

        .pagead {width: 1320px;
            margin: auto; position: relative; margin-top: 50px;
        }
        
        @charset "utf-8";

/*나눔바른고딕*/
@font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 400;
    src: url('https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot');
    src: url('https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.eot?#iefix') format('embedded-opentype'), url('https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.woff') format('woff'), url('https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWeb.ttf') format('truetype');
}

@font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 700;
    src: url('https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot');
    src: url('https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.eot?#iefix') format('embedded-opentype'), url('https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.woff') format('woff'), url('https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebBold.ttf') format('truetype')
}

@font-face {
    font-family: 'NanumBarunGothic';
    font-style: normal;
    font-weight: 300;
    src: url('https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot');
    src: url('https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.eot?#iefix') format('embedded-opentype'), url('https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.woff') format('woff'), url('https://cdn.jsdelivr.net/font-nanumlight/1.0/NanumBarunGothicWebLight.ttf') format('truetype');
}

.nanumbarungothic * {
    font-family: 'NanumBarunGothic', sans-serif;
}


#best_item ul li:hover .w_box {
    top: 0;
    transition: all 1s;
}

#link11 {
    padding: 200px 0px;
}

.sangse {
    width: 1320px;
    margin: auto;
}

.sangse h3{text-align: center; color: #f62f1a;}

.sangse ul {
    width: 1320px;
    margin: auto;
    display: flex;
}

.sangse ul li{padding: 10px 10px 5px 10px;}



/*자세히보기후버*/
.sangse ul li{
    overflow: hidden;
    position: relative;
    /*w_box포지션의 기준*/
}

.w_box {
    background-color: rgba(43, 42, 42, 0.5);
    position: absolute;
    top: 300px;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fffff0;
}


.sangse ul li:hover .w_box {
    top: 0;
    transition: all 0.5s;
}


/*자세히보기 후버 끝*/




#link11,
#link1,
#link4 {
    width: 1320px;
    margin: auto;
}

#link11 img {
    width: 100%;
}

#link1 {
    display: flex;
    justify-content: space-around;
    padding-top: 100px;
}

h3 {
    text-align: center;
    padding-bottom: 20px;
}

.pagead {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    padding-top: 150px;
}

#menu {
    width: 1320px;
    margin: 100px auto;
    padding-top: 100px;
}

.tabs {
    display: flex;
}

.tabs li {color: #f62f1a;
    padding: 10px 15px;
    font-size: 16px;
}

.tabs li.active {color: #6b0303;
    border-bottom: 3px solid #000;
    font-weight: bold;
}

.tab_content {
    background-color: rgb(0, 0, 0);
    padding: 50px;
}

#tab1 {
    display: flex;
    position: relative;
    padding-bottom: 300px;
}

.card1 {
    position: absolute;
    top: 200px;
    left: 50px;
}

.card2 {}

.tab_content h1 {
    padding-bottom: 20px;
}

.tab_content {
    width: 1320px;
    margin: auto;
    align-items: center;
}

#tab3 {text-align: left;
    width: 1320px;
    margin: auto; color: #fffff0;
}
#tab3 h2{line-height: 50%;}
#tab3 h4{padding-bottom: 30px;}

#tab3 p img {
    width: 80%;
}

.mock2 {
    width: 300px;
}


.bottom {
    text-align: left;

    margin: 0 auto;
    color: rgb(255, 255, 255);
    padding: 50px 50px 50px 50px;
    font-size: 14px;
    margin-top: 100px;
    line-height: 150%;
    background-color: rgb(31, 31, 31);
    font-weight: 300;
}
    </style>
</head>

<body>
    <div id="header">
        <div class="header_inner">
            <h1 class="logo">
                <a href="#"><img src="./images/logo1.png"></a>
            </h1>
            <ul id="gnb">
                <li>
                    <a href="#link11">브랜드이야기</a>
                    <!--서브메뉴의 위치는 해당 li안이지만 a태그와 형제로 들어가게끔 넣는다.-->

                </li>
                <li>
                    <a href="#tab">디자인들</a>
                    <ul class="sub">
                        <li><a href="#link1">상세페이지</a></li>
                        <li><a href="#menu">명함/배너광고</a></li>
                    </ul>

                </li>
            </ul>
        </div><!--header_inner-->
    </div><!--header-->
<a href="https://github.com/Joungkyun/JSBoard.git"></a>
    


    <div class="pagead">
        <img src="./images/목업9종이컵.png" alt="상품1" class="cup">
        <img src="./images/01종이컵글.png" alt="상품" class="pcup">
        <img src="./images/frontsale1.png" alt="상품" class="sale1">
        <img src="./images/frontsale3.png" alt="상품" class="sale3">



    </div>


    <div id="link11">

        <img src="./images/와이어프레임20230113_11.gif">
    </div>

    
    <div id="link1">
        
<div class="sangse">
    <h3>상세페이지</h3>
    <ul>
        <li><a href="./desun.html"><img src="./images/sun.jpg">
        <div class="w_box">
            <h1>선크림상세페이지</h1><br>
            <h2>전체보기</h2>
        </div><!--w_box-->
        </a></li>
        
        <li><a href="./deinte.html"><img src="./images/inte.jpg">
        <div class="w_box">
            <h1>인테리어상세페이지</h1><br>
            <h2>전체보기</h2>
        </div><!--w_box-->
        </a></li>
        <li><a href="./decos.html"><img src="./images/cos.jpg">
        <div class="w_box">
            <h1>화장품상세페이지</h1><br>
            <h2>전체보기</h2>
        </div><!--w_box-->
        </a></li>
    </ul>
    <ul>
        <li><a href="./detable.html"><img src="./images/table.jpg">
        <div class="w_box">
            <h1>테이블상세페이지</h1><br>
            <h2>전체보기</h2>
        </div><!--w_box-->
        </a></li >
        <li class="ye"><a href="./desofa.html"><img src="./images/sofa.jpg">
        <div class="w_box">
            <h1>소파상세페이지</h1><br>
            <h2>전체보기</h2>
        </div><!--w_box-->
        </a></li>
    </ul>
</div></div>


        


<div id="menu">
    <!--탭 구조는 탭 부분이 필요한 곳에 넣어 줍니다.-->
    <!--탭 메뉴 영역 -->
    <ul class="tabs">
        <li><a href="#tab1">명함</a></li>
        <li><a href="#tab2">배너광고</a></li>
        
    </ul>

    <!--탭 콘텐츠 영역 -->
    <div class="tab_container">
        <!--탭 한개한개는 전부 다른 아이디를 가져야며, 전부 같은 클래스를(tab_content) 가지고 있어야 한다. 그리고 tab의 li갯수만큼 tab_content가 있어야 한다.-->
        <div id="tab1" class="tab_content">
            <!--Content-->

            <p><img src="./images/card1.jpg" class="card1">
            </p>
            <p><img src="./images/card2.jpg" class="card2">
            </p>
           
        </div><!--tab1-->

        <div id="tab2" class="tab_content">
            <!--Content-->
        <p><img src="./images/banner1.jpg">
        </p>
        <p><img src="./images/banner2.jpg">
        </p>
        <p><img src="./images/banner3.jpg">
        </p>
        <p><img src="./images/banner4.jpg">
        </p>
        </div>
        

    
    <!--tab_container-->
</div><!--menu-->




<!--제이쿼리 라이브러리파일-->
<script src="https://code.jquery.com/jquery-1.12.4.min.js"
    integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
<!--탭 제이쿼리-->
<script type="text/javascript">
    $(document).ready(function () {

        //처음들어갔을때 모습 만들기...
        $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
        $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
        $(".tab_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

        //On Click Event
        $("ul.tabs li").click(function () {

            $("ul.tabs li").removeClass("active"); //Remove any "active" class
            $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
            $(".tab_content").hide(); //모든 contents들 숨김

            var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
            /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
            .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
            $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
            return false;
        });

    });
</script>

            
        </div>

        <div class="bottom">

            <h5>
                산업디자인에 주문이 가능한 품목은 그래픽디자인, 상세페이지, <br>
                인터넷배너광고, 카드디자인, 기타 특별주문 등입니다.</h5>
            <h5>
                산업디자인에 대한 문의사항은 평일 09:00~13:00까지 모바일 01044688813번.</h5>
            <h5>
                전자우편은 시간에 상관없이 being211@yahoo.com로 보내주시면 답이 있을거예요.</h5>
        </div>
<script src="./js/jquery-3.5.1.min.js"></script>
<script src="./js/tab.js"></script>
</body>
