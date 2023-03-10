var today = dayjs().format("[Today is] MMMM D, YYYY hh:mma");
$('#currentDay').text(today);
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeBlock = $(".time-block");

$(function () {
  var currentTime = dayjs().format("HH");
  var currentTimeNum = +currentTime;
  var counter = 9;
  timeBlock.each(function(){
    if (counter < currentTimeNum) {
      $(this).addClass("past")
    } else if (counter == currentTimeNum) {
      $(this).addClass("present") 
    } else {
      $(this).addClass("future")
    }
    counter++
  });
})

var timeObj = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
};
timeBlock.each(function() {
  // time block text
  var textArea = $(this).children().eq(1);
  // button
  var timeBlockBtn = $(this).children().eq(2);
  // points to the timeblock div's data-type value of "time" in military time
  var cellTime = $(this).data("time");
  // button click event listener
  timeBlockBtn.click(function() {
    //sets whatever the user types in the specific time block equal to the corresponding time value to prevent reprints of the obj in the local storage
    timeObj[cellTime] = textArea.val()
    localStorage.setItem("timeObj", JSON.stringify(timeObj))
  })
  var getTimeObj = JSON.parse(localStorage.getItem("timeObj")) || [];
  textArea.append(getTimeObj[cellTime])
})

  // TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
