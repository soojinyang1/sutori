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
  $(".button1").click(function () {
    $(this).next().css("display", "block");
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

/*일반 자바스크립트로 작성할 경우 : 이럴 경우 clip(this)를 넣어주어야 함.
function clip(e) {
  var url = "";
  var id_check = "";
  var textarea = document.createElement("textarea");

  document.body.appendChild(textarea);

  id_check = e.parentNode.id; //id값 가져오기
  console.log(id_check);

  url = id_check + ".html";
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  alert("URL이 복사되었습니다.");
}
*/

/*제이쿼리로 작성할 경우 1. */
$(document).ready(function () {
  $(".webhare").each(function () {
    $(this).click(function () {
      var url = "";
      var id_check = "";
      var textarea = document.createElement("textarea");

      document.body.appendChild(textarea);

      id_check = $(this).attr("id"); //id값 가져오기
      console.log(id_check);

      url = id_check + ".html";
      textarea.value = url;
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);

      alert("URL이 복사되었습니다.");
    });
  });
});

/*제이쿼리로 작성할 경우 2.
      $(document).ready(function () {
  $(".webhare").each(function () {
    $(this).click(clip);
  });
});

function clip() {
  var url = "";
  var id_check = "";
  var textarea = document.createElement("textarea");

  document.body.appendChild(textarea);

  id_check = $(this).attr("id"); //id값 가져오기
  console.log(id_check);

  url = id_check + ".html";
  textarea.value = url;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  alert("URL이 복사되었습니다.");
}
*/

$(document).ready(function () {
  //본문 함수 사용하지 않고 바로 실행
  $(".shareFb").click(function () {
    const pageUrl = "http://127.0.0.1:5501/index.html";
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + pageUrl);
  });
});

function clip2() {
  //본문 함수 사용할 경우
  $(".shareTwitter").click(function () {
    const pageUrl = "http://127.0.0.1:5501/index.html";
    window.open("https://twitter.com/intent/tweet?text=" + pageUrl);
  });
}

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

/*$(document).ready(function () {
  $(this).click(function () {
    if ($(".hide").css("display") == "block") {
      $(".hide").hide();
    }
  });
});*/

/*
$(document).ready(function () {
  $("#hamburger>#line")
    .click(function () {
      var submenu = $(this).next();
      if (submenu.is(":visible")) {
        submenu.slideleft();
      } else {
        submenu.slideright();
      }
    })
    .mouseover(function () {
      $(this).next().slideDown();
    });
});
*/

/*
$(document).ready(function () {
  $("#hamburger>#line")
    /*.click(function () {
      $(this).next().animate(
        {
          width: "toggle",
        },
        2,
        "swing"
      );
    })
    .mouseover(function () {
      $(this).next().fadeIn("slow"); //css("display", "block");
    });
});

$(document).ready(function () {
  $(".hide").on("mouseleave", function () {
    $(this).css("display", "none");
  });
});

$("body")
  .not(".hide")
  .on("touchstart", function () {
    $(".hide").css("display", "none");
  });

/*
원래 코드
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
