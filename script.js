// const el09vjs = document.getElementById("hour-09");
// const el10vjs = document.getElementById("hour-10");
// const el11vjs = document.getElementById("hour-11");
// const el12vjs = document.getElementById("hour-12");
// const el1vjs = document.getElementById("hour-1");
// const el2vjs = document.getElementById("hour-2");
// const el3vjs = document.getElementById("hour-3");
// const el4vjs = document.getElementById("hour-4");
// const el5vjs = document.getElementById("hour-5");
const el09 = $('#hour-09')
const el10 = $('#hour-10')
const el11 = $('#hour-11')
const el12 = $('#hour-12')
const el1 = $('#hour-1')
const el2 = $('#hour-2')
const el3 = $('#hour-3')
const el4 = $('#hour-4')
const el5 = $('#hour-5')
const el6 = $('#hour-6')
const el7 = $('#hour-7')
const saveBtn = $('.btn')
const cDayEl = $('#currentDay')
// const descriptionEl = document.querySelector('.description')

const elementsArray = [el09,el10,el11,el12,el1,el2,el3,el4,el5]


//Creating dayjs values to be used to compare them against time of the day and change color accordingly
const nineTime = dayjs().set('hour',9).set('minute',00)
const tenTime = dayjs().set('hour',10).set('minute',00)
const elevenTime = dayjs().set('hour',11).set('minute',00)
const twelveTime = dayjs().set('hour',12).set('minute',00)
const oneTime = dayjs().set('hour',13).set('minute',00)
const twoTime = dayjs().set('hour',14).set('minute',00)
const threeTime = dayjs().set('hour',15).set('minute',00)
const fourthTime = dayjs().set('hour',16).set('minute',00)
const fiveTime = dayjs().set('hour',17).set('minute',00)
const sixTime = dayjs().set('hour',18).set('minute',00)
const sevenTime = dayjs().set('hour',19).set('minute',00)

const timesArray = [nineTime,tenTime,elevenTime,twelveTime,oneTime,twoTime,threeTime,fourthTime,fiveTime,sixTime,sevenTime]

//if you want to format --> nineTime.format('hh:mm A')
//Embedding dayjs structures into the website
// el09[0].children[0].append({nineTimeF})

// Comparison... if diff >1 then add class 'past
// if diff 0 < then add a class future
// dayjs().diff(nineTimesss,'hours')
// function changingClass () {
//   if ((dayjs().diff(nineTime,'minutes') >= 0) === true) {
//     el09.removeClass('future');
//     el09.addClass('past');
//   }
//   if ((userInput.length > 0)) {
//     el09.removeClass('future');
//     el09.addClass('present');
// }
// }

function changingClass () {
  for (var i=0; i < elementsArray.length; i++) {
    console.log(elementsArray[i]) 
      if ((dayjs().diff(timesArray[i],'minutes') > 0) === true) {
        elementsArray[i].removeClass('future');
        elementsArray[i].addClass('past');
  }
  if ((dayjs().diff(timesArray[i],'minutes') < 0) === true) {
    elementsArray[i].removeClass('past');
    elementsArray[i].removeClass('present');
    elementsArray[i].addClass('future');
  }
  if ((dayjs().diff(timesArray[i],'hours') === 0) === true) {
  elementsArray[i].removeClass('past');
  elementsArray[i].removeClass('future');
  elementsArray[i].addClass('present');
}
  } 
}

changingClass()

//This works
var saveBtn2 = $('.saveBtn')

// add a listener for the entire box
saveBtn2.on('click', function(event) {
  event.preventDefault();
  var userInput = $(event.target).siblings('textarea').val()
  var id = $(event.target).parent('div').attr("id")
  localStorage.setItem(id,userInput)
});


// get today times using js
const now = dayjs().format('dddd[, ]MMMM[ ]D[, ]YYYY')

//adds the day 
cDayEl.text(now)

//create function to specify elements according to my needs
function elementFromHtml (html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}


//testing function2
function editHtmltoAppend (hour,time,classStyle) {
elFromHtmlEdited = elementFromHtml  (`
<div id="hour-${hour}" class="row time-block ${classStyle}">
<div class="col-2 col-md-1 hour text-center py-3">${hour}${time}</div>
<textarea class="col-8 col-md-10 description" rows="3"> </textarea>
<button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
</button>
</div>
`)
return elFromHtmlEdited
}

//This functions appends the elemnent into the mainContainer
function appendHtml () {
  mainContainerElQ.append(elFromHtmlEdited)
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
  // TODO: Add code to display the current date in the header of the page.
});
