//calendar

const lang = navigator.language;
let date = new Date();
let daynumber = date.getDate();
let month = date.getMonth();
let dayname = date.toLocaleString(lang, { weekday: "long" });
let monthname = date.toLocaleString(lang, { month: "long" });
let year = date.getFullYear();
document.getElementById("monthname").innerHTML = monthname;
document.getElementById("dayname").innerHTML = dayname;
document.getElementById("daynumber").innerHTML = daynumber;
document.getElementById("year").innerHTML = year;

//show hide

//Quiz

function submitQuiz() {
  console.log("submitted");
  function answerScore(qName) {
    var radiosNo = document.getElementsByName(qName);

    for (var i = 0, length = radiosNo.length; i < length; i++) {
      if (radiosNo[i].checked) {
        var answerValue = Number(radiosNo[i].value);
      }
    }
    if (isNaN(answerValue)) {
      answerValue = 0;
    }
    return answerValue;
  }

  var calcScore = answerScore("q1") + answerScore("q2");
  console.log("CalcScore: " + calcScore);
  function correctAnswer(correctStringNo, qNumber) {
    console.log("qNumber: " + qNumber);
    return (
      "The correct answer for Q" +
      qNumber +
      ": &nbsp;<strong>" +
      document.getElementById(correctStringNo).innerHTML +
      "</strong>"
    );
  }

  if (answerScore("q1") === 0) {
    document.getElementById("correctAnswer1").innerHTML = correctAnswer(
      "correctString1",
      1
    );
  }
  if (answerScore("q2") === 0) {
    document.getElementById("correctAnswer2").innerHTML = correctAnswer(
      "correctString2",
      2
    );
  }
  var questionCountArray = document.getElementsByClassName("question");

  var questionCounter = 0;
  for (var i = 0, length = questionCountArray.length; i < length; i++) {
    questionCounter++;
  }
  var showScore = "Test Results: " + calcScore + "/" + questionCounter;
  if (calcScore === questionCounter) {
    showScore = showScore + "&nbsp; <strong>Bravo!</strong>";
  }
  document.getElementById("userScore").innerHTML = showScore;
}

$(document).ready(function () {
  $("#submitButton").click(function () {
    $(this).addClass("hide");
  });
});

function sayhello1() {
  document.getElementById("quizm1").innerHTML = "Retrieving from database";
}
function sayhello2() {
  document.getElementById("quizm2").innerHTML = "Retrieving from database";
}
function sayhello3() {
  document.getElementById("quizm3").innerHTML = "Retrieving from database";
}

function placereq() {
  alert(
    "The certification is in progress and will be sent to you via mail in 4-5 working days."
  );
}


function savechange() {
  alert("Changes Saved");
}

function pswd() {
  alert("Reset Password link sent to associated mail id");
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
