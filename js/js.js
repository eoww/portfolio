console.clear();

// 새로고침 시 주소값 없애고 상단으로 이동
window.onload = function () {
  setTimeout(function () {
    history.replaceState({}, null, location.pathname);
    scrollTo(0, 0);
  }, 100);
};

$(document).ready(function () {
  // hide #back-top first
  $("#back-top").hide();
  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      var scrollPosition = window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > 100) {
        $("#back-top").fadeIn();
      } else {
        $("#back-top").fadeOut();
      }
    });
    // scroll body to 0px on click
    $("#back-top a").click(function () {
      scrollTo(0, 0);
      return false;
    });
  });
});

// 햄버거 코드
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");

    if ($(".hamburger").hasClass("is-active")) {
      $(".menu-box").addClass("active");
    } else {
      $(".menu-box").removeClass("active");
    }
  });
});

//아코디언 텍스트 변경
$(".li-line").click(function () {
  if ($(this).hasClass("click")) {
    $(this).removeClass("click");
  } else {
    $(this).addClass("click");
  }
});

$(".lis").click(function () {
  return false;
});

// 복사하기 버튼 클릭
$("#data-copy").click(function () {
  // 화면에서 hidden 처리한 input box type을 text로 일시 변환
  $("#data-area").attr("type", "text");

  // input에 담긴 데이터를 선택
  $("#data-area").select();

  //  clipboard에 데이터 복사
  var copy = document.execCommand("copy");

  // input box를 다시 hidden 처리
  $("#data-area").attr("type", "hidden");

  // 사용자 알림
  if (copy) {
    alert("저의 메일 주소가 복사되었습니다!!");
  }
});

// 스크롤 시 부드러운 애니메이션
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// 아코디언메뉴
var acc = document.getElementsByClassName("show");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// 팝업 코드
function Popup__init(no) {
  $(".popup-btn-" + no).click(function () {
    $(".popup-" + no).addClass("active");
    $("html").addClass("active");
  });

  $(".popup__btn_close").click(function () {
    $(".popup").removeClass("active");
    $("html").removeClass("active");
  });
}
Popup__init(1);
Popup__init(2);
Popup__init(3);
Popup__init(4);
