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
var taskForms = $(".task");

var input10 = $("#task10");
var form10 = $("#form10");
var input11 = $("#task11");
var form11 = $("#form11");
var input12 = $("#task12");
var form12 = $("#form12");
var input1 = $("#task1");
var form1 = $("#form1");
var input2 = $("#task2");
var form2 = $("#form2");
var input3 = $("#task3");
var form3 = $("#form3");
var input4 = $("#task4");
var form4 = $("#form4");
var input5 = $("#task5");
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


// $(document).ready(function () {

// prevent form from refreshing page on submit, enter text to field

// event.preventDefault();
// var newTask = localStorage.getItem("input");
// input10.push(newTask);
// localStorage.setItem("input", input);

var forms = $("#form");

forms.on("submit", function (event) {
   event.preventDefault();
});

// store inputs with + button

var add10 = $(".addBttn10");
var input10 = $("#task10");

add10.on("click", function(event) {
   event.preventDefault();
   localStorage.setItem("task10", input10.value);
   console.log(localStorage.getItem("task10"));
})


////////////////////////////////
////// working code below //////
///////////////////////////////

var today = new Date();
var hour = today.getHours();

hour = 14;

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


// clear task WITH BUTTON

var blank = "";

function clearTask10() {
   $('input[name=task10]').attr("style", "background-color: white");
   var newTask = localStorage.getItem("blank");
   input10.push(newTask);
   localStorage.setItem("blank", blank);
}

function clearTask11() {
   $('input[name=task11]').attr("style", "background-color: white");
   var newTask = localStorage.getItem("blank");
   input11.push(newTask);
   localStorage.setItem("blank", blank);
}

function clearTask12() {
   $('input[name=task12]').attr("style", "background-color: white");
   var newTask = localStorage.getItem("blank");
   input12.push(newTask);
   localStorage.setItem("blank", blank);
}

function clearTask1() {
   $('input[name=task1]').attr("style", "background-color: white");
   var newTask = localStorage.getItem("blank");
   input1.push(newTask);
   localStorage.setItem("blank", blank);
}

function clearTask2() {
   $('input[name=task2]').attr("style", "background-color: white");
   var newTask = localStorage.getItem("blank");
   input2.push(newTask);
   localStorage.setItem("blank", blank);
}

function clearTask3() {
   $('input[name=task3]').attr("style", "background-color: white");
   var newTask = localStorage.getItem("blank");
   input3.push(newTask);
   localStorage.setItem("blank", blank);
}

function clearTask4() {
   $('input[name=task4]').attr("style", "background-color: white");
   var newTask = localStorage.getItem("blank");
   input4.push(newTask);
   localStorage.setItem("blank", blank);
}

function clearTask5() {
   $('input[name=task5]').attr("style", "background-color: white");
   var newTask = localStorage.getItem("blank");
   input5.push(newTask);
   localStorage.setItem("blank", blank);
}


// change color of tasks WITH CHECK BUTTON to indicate completion

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

// }
