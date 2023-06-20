/*right클래스가 일정 너비 이하에서는 아예 만들어지지 않게 코드 짬*/
const mediaQueryList = window.matchMedia("screen and (min-width: 767px)");
window.onload = function layout() {
  if (mediaQueryList.matches) {
    var leftColumnHeight = 0,
      rightColumnHeight = 100,
      articles = document.querySelectorAll("#timeline article");
    for (var i = 0; i < articles.length; i++) {
      if (leftColumnHeight > rightColumnHeight) {
        rightColumnHeight +=
          articles[i].classList.add("right") || articles[i].offsetHeight;
      } else {
        leftColumnHeight += articles[i].offsetHeight;
      }
    }
  } else {
    document
      .querySelectorAll(".right")
      .forEach((element) => element.classList.remove("right"));
  }
};

/*커다란 화면에서 화면 비율 조정에 따라 다시 right class가 나와야 할 수도 있으므로 추가함*/
const mediaQuery = window.matchMedia("screen and (max-width: 768px)");
mediaQuery.addEventListener("change", function () {
  if (mediaQuery.matches) {
    document
      .querySelectorAll(".right")
      .forEach((element) => element.classList.remove("right"));
  } else {
    var leftColumnHeight = 0,
      rightColumnHeight = 100,
      articles = document.querySelectorAll("#timeline article");
    for (var i = 0; i < articles.length; i++) {
      if (leftColumnHeight > rightColumnHeight) {
        rightColumnHeight +=
          articles[i].classList.add("right") || articles[i].offsetHeight;
      } else {
        leftColumnHeight += articles[i].offsetHeight;
      }
    }
  }
});

/*공유하기*/
$(document).ready(function () {
  //현재 마크업 기준으로 클릭할 요소의 부모 옆에 있는 요소(팝업) 선택
  $(".button1").click(function (e) {
    $(e.target).next().css("display", "block");
    /*e.target은 클릭한 요소를 의미하며, 대신 this를 사용할 수도 있음
        $(this).next().css("display", "block"); */
  });
});

/*$(function () {
  /* 클릭시 클릭한 위치 근처에 레이어가 나타난다. 
  $(".button1")
    .unbind("click")
    .bind("click", function (e) {
      target = $(e.target);
      var p = $(target).offset();

      // 레이어가 나타날 위치를 셋팅한다.
      var divLeft = p.left - 180;
      var divTop = p.top - 950;

      $(this)
        .next()
        .css({
          top: divTop,
          left: divLeft,
          position: "absolute",
          "z-index": "1000",
        })
        .show();
    });
});*/

$(document).ready(function () {
  //닫기 버튼 기준 부모 div(팝업)이 닫히도록 변경
  $(".button2").click(function () {
    $(this).parent().css("display", "none");
  });
});

$(document).mouseup(function (e) {
  var overlay = $(".overlay");
  if (overlay.has(e.target).length === 0) {
    overlay.hide();
  }
});

/*일반 자바스크립트로 작성할 경우 : 이럴 경우 clip(this)를 넣어주어야 함.
  document.execCommand("copy");
*/

function clip(e) {
  var url = "";
  var id_check = "";

  id_check = $(this).attr("id"); //id값 가져오기
  url = id_check + ".html";
  window.navigator.clipboard.writeText(url);

  e.preventDefault();

  alim = $(this).parent().parent().next();

  $(alim).css("display", "block");

  setTimeout(() => {
    $(alim).css("display", "none");
  }, 1000);
}

$(document).ready(function () {
  $(".webhare").each(function () {
    $(this).click(clip);
  });
});

$(document).ready(function () {
  //본문 함수 사용하지 않고 바로 실행
  $(".shareFb").click(function () {
    const pageUrl = "http://127.0.0.1:5501/index.html";
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + pageUrl);
  });
});

$(document).ready(function () {
  $(".shareTwitter").click(function () {
    const pageUrl = "http://127.0.0.1:5501/index.html";
    window.open("https://twitter.com/intent/tweet?text=" + pageUrl);
  });
});

$(document).ready(function () {
  $("#hamburger>#line").click(function () {
    $(this).next().css("display", "block");
  });
});

// 외부영역 클릭 시 팝업 닫기
$(document).mouseup(function (e) {
  var hider = $(".hide");
  if (hider.has(e.target).length === 0) {
    hider.hide();
  }
});

/* 본문에 on원래 코드 onclick="clip2(); return false;"
function clip1() {
const btnShareFb = document.querySelector(".shareFb");

btnShareFb.addEventListener("click", () => {
    const pageUrl = "http://127.0.0.1:5501/index.html";
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + pageUrl);
  });
}

function clip2() {
  const btnShareTwitter = document.querySelector(".shareTwitter");

  btnShareTwitter.addEventListener("click", () => {
    const pageUrl = "http://127.0.0.1:5501/index.html";
    window.open("https://twitter.com/intent/tweet?text=" + pageUrl);
  });
} */
