$(function () {
  $("#uploadForm").steps({
    headerTag: "h2",
    bodyTag: "section",
    transitionEffect: "fade",
    enableAllSteps: true,
    transitionEffectSpeed: 500,
    labels: {
      finish: "Submit",
      next: "Forward",
      previous: "Backward",
    },
    onFinished: function (event, currentIndex) {
      checkpass();
      return true;
    },
  });

  $(".wizard > .steps li a").click(function () {
    $(this).parent().addClass("checked");
    $(this).parent().prevAll().addClass("checked");
    $(this).parent().nextAll().removeClass("checked");
  });

  $(".forward").click(function () {
    $("#wizard").steps("next");
  });

  $(".backward").click(function () {
    $("#wizard").steps("previous");
  });

  $("html").click(function () {
    $(".select .dropdown").hide();
  });

  $(".select").click(function (event) {
    event.stopPropagation();
  });

  $(".select .select-control").click(function () {
    $(this).parent().next().toggle();
  });

  $(".select .dropdown li").click(function () {
    $(this).parent().toggle();
    var text = $(this).attr("rel");
    $(this).parent().prev().find("div").text(text);
  });
});

var imagename;
function myname() {
  var data = new FormData($("#uploadForm")[0]);
  $.ajax({
    url: "http://localhost:4000/insert",
    type: "POST",
    contentType: false,
    processData: false,
    cache: false,
    data: data,
    success: function (res) {
      imagename = res;
      alert(imagename);
      alert("Data Inserted");
      sendData();
    },
    error: function () {
      alert("Error: In sending the request!");
    },
  });
}

function sendData() {
  var username = document.getElementById("fname").value;
  sessionStorage.setItem("name", username);
  sessionStorage.setItem("image", imagename);
  window.location.href = "../User DashBoard/User Main DashBoard.html";
}

function checkpass() {
  var field1 = $("#password").val();
  var field2 = $("#conpassword").val();

  if (field1 === field2) {
    $("#conpassword").css("border-color", "");
    $("#password").css("border-color", "");
    myname();
  } else {
    $("#conpassword").css("border-color", "red");
    $("#password").css("border-color", "red");
    alert("Password not same");
  }
}
