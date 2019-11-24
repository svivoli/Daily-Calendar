var date = document.getElementById("date").innerHTML = Date();

var container = $(".container");
var frontPage = $("#frontPage");
var title = $(".title");
var enter = $("#enter");

var calendar = $(".calendar");
var dateDiv = $("calDate");

var calRows = $(".calRows");
var timeDiv = $(".time");
var note = $(".note");

var inputs = $(".task");

var input10 = $("#task10");
var input11 = $("#task11");
var input12 = $("#task12");
var input1 = $("#task1");
var input2 = $("#task2");
var input3 = $("#task3");
var input4 = $("#task4");
var input5 = $("#task5");

var form10 = $("#form10");
var form11 = $("#form11");
var form12 = $("#form12");
var form1 = $("#form1");
var form2 = $("#form2");
var form3 = $("#form3");
var form4 = $("#form4");
var form5 = $("#form5");

calendar.html("<h4>" + date + "<h4>" + calRows.html());


var notes = {
   note10: {
      task: input10.value,
      time: 10,
   },
   note11: {
      task: input11.value,
      time: 11,
   },
   note12: {
      task: input12.value,
      time: 12,
   },
   note1: {
      task: input1.value,
      time: 13,
   },
   note2: {
      task: input2.value,
      time: 14,
   },
   note3: {
      task: input3.value,
      time: 15,

   },
   note4: {
      task: input4.value,
      time: 16,
   },
   note5: {
      task: input5.value,
      time: 17,
   },
};

// store inputs with + button

var add10 = $(".addBttn10");
var add11 = $(".addBttn11");
var add12 = $(".addBttn12");
var add1 = $(".addBttn1");
var add2 = $(".addBttn2");
var add3 = $(".addBttn3");
var add4 = $(".addBttn4");
var add5 = $(".addBttn5");


add10.on("click", function (event) {
   event.preventDefault();
   var noteInput10 = $("#task10");
   localStorage.setItem("inputted10", noteInput10.val());
   getInput10();
   changeTask10();
});

add11.on("click", function (event) {
   event.preventDefault();
   var noteInput11 = $("#task11");
   localStorage.setItem("inputted11", noteInput11.val());
   getInput11();
   changeTask11();
});

add12.on("click", function (event) {
   event.preventDefault();
   var noteInput12 = $("#task12");
   localStorage.setItem("inputted12", noteInput12.val());
   getInput12();
   changeTask12();
});

add1.on("click", function (event) {
   event.preventDefault();
   var noteInput1 = $("#task1");
   localStorage.setItem("inputted1", noteInput1.val());
   getInput1();
   changeTask1();
});

add2.on("click", function (event) {
   event.preventDefault();
   var noteInput2 = $("#task2");
   localStorage.setItem("inputted2", noteInput2.val());
   getInput2();
   changeTask2();
});

add3.on("click", function (event) {
   event.preventDefault();
   var noteInput3 = $("#task3");
   localStorage.setItem("inputted3", noteInput3.val());
   getInput3();
   changeTask3();
});

add4.on("click", function (event) {
   event.preventDefault();
   var noteInput4 = $("#task4");
   localStorage.setItem("inputted4", noteInput4.val());
   getInput4();
   changeTask4();
});

add5.on("click", function (event) {
   event.preventDefault();
   var noteInput5 = $("#task5");
   localStorage.setItem("inputted5", noteInput5.val());
   getInput5();
   changeTask5();
});

getInput10();
getInput11();
getInput12();
getInput1();
getInput2();
getInput3();
getInput4();
getInput5();

function getInput10() {
   var savedInput10 = localStorage.getItem("inputted10");
   $("#task10").val(savedInput10);
}

function getInput11() {
    var savedInput11 = localStorage.getItem("inputted11");
    $("#task11").val(savedInput11);
}

function getInput12() {
    var savedInput12 = localStorage.getItem("inputted12");
    $("#task12").val(savedInput12);
}

function getInput1() {
    var savedInput1 = localStorage.getItem("inputted1");
    $("#task1").val(savedInput1);
}

function getInput2() {
    var savedInput2 = localStorage.getItem("inputted2");
    $("#task2").val(savedInput2);
}

function getInput3() {
    var savedInput3 = localStorage.getItem("inputted3");
    $("#task3").val(savedInput3);
}

function getInput4() {
    var savedInput4 = localStorage.getItem("inputted4");
    $("#task4").val(savedInput4);
}

function getInput5() {
    var savedInput5 = localStorage.getItem("inputted5");
    $("#task5").val(savedInput5);
}

var today = new Date();
var hour = today.getHours();

hour = 14;

// clear inputs at 12 am

function clearStorage() {
   if (hour = 0) {
      localStorage.clear();
   }
}

// set task colors

function setTasks() {
   if (notes.note10.time < hour) {
      $('input[name=task10]').attr("style", "background-color: #b4aeb5");
   } else if (notes.note10.time > hour) {
      $('input[name=task10]').attr("style", "background-color: #9bd1be");
   } else {
      $('input[name=task10]').attr("style", "background-color: #d3685b");
   }
   if (notes.note11.time < hour) {
      $('input[name=task11]').attr("style", "background-color: #b4aeb5");
   } else if (notes.note11.time > hour) {
      $('input[name=task11]').attr("style", "background-color: #9bd1be");
   } else {
      $('input[name=task11]').attr("style", "background-color: #d3685b");
   }
   if (notes.note12.time < hour) {
      $('input[name=task12]').attr("style", "background-color: #b4aeb5");
   } else if (notes.note12.time > hour) {
      $('input[name=task12]').attr("style", "background-color: #9bd1be");
   } else {
      $('input[name=task12]').attr("style", "background-color: #d3685b");
   }
   if (notes.note1.time < hour) {
      $('input[name=task1]').attr("style", "background-color: #b4aeb5");
   } else if (notes.note1.time > hour) {
      $('input[name=task1]').attr("style", "background-color: #9bd1be");
   } else {
      $('input[name=task1]').attr("style", "background-color: #d3685b");
   }
   if (notes.note2.time < hour) {
      $('input[name=task2]').attr("style", "background-color: #b4aeb5");
   } else if (notes.note2.time > hour) {
      $('input[name=task2]').attr("style", "background-color: #9bd1be");
   } else {
      $('input[name=task2]').attr("style", "background-color: #d3685b");
   }
   if (notes.note3.time < hour) {
      $('input[name=task3]').attr("style", "background-color: #b4aeb5");
   } else if (notes.note3.time > hour) {
      $('input[name=task3]').attr("style", "background-color: #9bd1be");
   } else {
      $('input[name=task3]').attr("style", "background-color: #d3685b");
   }
   if (notes.note4.time < hour) {
      $('input[name=task4]').attr("style", "background-color: #b4aeb5");
   } else if (notes.note4.time > hour) {
      $('input[name=task4]').attr("style", "background-color: #9bd1be");
   } else {
      $('input[name=task4]').attr("style", "background-color: #d3685b");
   }
   if (notes.note5.time < hour) {
      $('input[name=task5]').attr("style", "background-color: #b4aeb5");
   } else if (notes.note5.time > hour) {
      $('input[name=task5]').attr("style", "background-color: #9bd1be");
   } else {
      $('input[name=task5]').attr("style", "background-color: #d3685b");
   }
}
setTasks();

// change color of task depending on time of day

function changeTask10() {
   if (notes.note10.time < hour) {
      $('input[name=task10]').attr("style", "background-color: #a164a1");
   } else if (notes.note10.time > hour) {
      $('input[name=task10]').attr("style", "background-color: #9bd1be");
   } else {
      $('input[name=task10]').attr("style", "background-color: #d3685b");
   }
}


function changeTask11() {
   if (notes.note11.time < hour) {
      $('input[name=task11]').attr("style", "background-color: #a164a1");
   } else if (notes.note11.time > hour) {
      $('input[name=task11]').attr("style", "background-color: #9bd1be");
   } else {
      $('input[name=task11]').attr("style", "background-color: #d3685b");
   }
}

function changeTask12() {
   if (notes.note12.time < hour) {
      $('input[name=task12]').attr("style", "background-color: #a164a1");
   } else if (notes.note12.time > hour) {
      $('input[name=task12]').attr("style", "background-color: #9bd1be");
   } else {
      $('input[name=task12]').attr("style", "background-color: #d3685b");
   }
}

function changeTask1() {
   if (notes.note1.time < hour) {
      $('input[name=task1]').attr("style", "background-color: #a164a1");
   } else if (notes.note1.time > hour) {
      $('input[name=task1]').attr("style", "background-color: #9bd1be");
   } else {
      $('input[name=task1]').attr("style", "background-color: #d3685b");
   }
}

function changeTask2() {
   if (notes.note2.time < hour) {
      $('input[name=task2]').attr("style", "background-color: #a164a1");
   } else if (notes.note2.time > hour) {
      $('input[name=task2]').attr("style", "background-color: #9bd1be");
   } else {
      $('input[name=task2]').attr("style", "background-color: #d3685b");
   }
}

function changeTask3() {
   if (notes.note3.time < hour) {
      $('input[name=task3]').attr("style", "background-color: #a164a1");
   } else if (notes.note3.time > hour) {
      $('input[name=task3]').attr("style", "background-color: #9bd1be");
   } else if (notes.note3.time = hour) {
      $('input[name=task3]').attr("style", "background-color: #d3685b");
   }
}

function changeTask4() {
   if (notes.note4.time < hour) {
      $('input[name=task4]').attr("style", "background-color: #a164a1");
   } else if (notes.note4.time > hour) {
      $('input[name=task4]').attr("style", "background-color: #9bd1be");
   } else if (notes.note4.time = hour) {
      $('input[name=task4]').attr("style", "background-color: #d3685b");
   }
}

function changeTask5() {
   if (notes.note5.time < hour) {
      $('input[name=task5]').attr("style", "background-color: #a164a1");
   } else if (notes.note5.time > hour) {
      $('input[name=task5]').attr("style", "background-color: #9bd1be");
   } else if (notes.note5.time = hour) {
      $('input[name=task5]').attr("style", "background-color: #d3685b");
   }
}

// change color of tasks with check button to indicate completion

function complete10() {
   $('input[name=task10]').attr("style", "background-color: #b4aeb5");
}

function complete11() {
   $('input[name=task11]').attr("style", "background-color: #b4aeb5");
}

function complete12() {
   $('input[name=task12]').attr("style", "background-color: #b4aeb5");
}

function complete1() {
   $('input[name=task1]').attr("style", "background-color: #b4aeb5");
}

function complete2() {
   $('input[name=task2]').attr("style", "background-color: #b4aeb5");
}

function complete3() {
   $('input[name=task3]').attr("style", "background-color: #b4aeb5");
}

function complete4() {
   $('input[name=task4]').attr("style", "background-color: #b4aeb5");
}

function complete5() {
   $('input[name=task5]').attr("style", "background-color: #b4aeb5");
}

// clear task with x button


function clearTask10() {
   $('input[name=task10]').attr("style", "background-color: white");
   var blank = "";
   localStorage.setItem("blank", blank);
   getBlank10 = localStorage.getItem("blank");
   $("#task10").val(getBlank10);
}

function clearTask11() {
   $('input[name=task11]').attr("style", "background-color: white");
   var blank = "";
   localStorage.setItem("blank", blank);
   getBlank11 = localStorage.getItem("blank");
   $("#task11").val(getBlank11);
}

function clearTask12() {
   $('input[name=task12]').attr("style", "background-color: white");
   var blank = "";
   localStorage.setItem("blank", blank);
   getBlank12 = localStorage.getItem("blank");
   $("#task12").val(getBlank12);
}

function clearTask1() {
   $('input[name=task1]').attr("style", "background-color: white");
   var blank = "";
   localStorage.setItem("blank", blank);
   getBlank1 = localStorage.getItem("blank");
   $("#task1").val(getBlank1);
}

function clearTask2() {
   $('input[name=task2]').attr("style", "background-color: white");
   var blank = "";
   localStorage.setItem("blank", blank);
   getBlank2 = localStorage.getItem("blank");
   $("#task2").val(getBlank2);
}

function clearTask3() {
   $('input[name=task3]').attr("style", "background-color: white");
   var blank = "";
   localStorage.setItem("blank", blank);
   getBlank3 = localStorage.getItem("blank");
   $("#task3").val(getBlank3);
}

function clearTask4() {
   $('input[name=task4]').attr("style", "background-color: white");
   var blank = "";
   localStorage.setItem("blank", blank);
   getBlank4 = localStorage.getItem("blank");
   $("#task4").val(getBlank4);
}

function clearTask5() {
   $('input[name=task5]').attr("style", "background-color: white");
   var blank = "";
   localStorage.setItem("blank", blank);
   getBlank4 = localStorage.getItem("blank");
   $("#task4").val(getBlank4);
}

// }
